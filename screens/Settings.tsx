import React, {useEffect, useState, useRef} from 'react';

import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Dimensions, 
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from '../Components/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../src/graphql/queries';
import { updateUser } from '../src/graphql/mutations';

const Settings = ({navigation} : any) => {

    //the current authenticated user object
    const [user, setUser] = useState()
    const [authUser, setAuthUser] = useState()

//determines if the user object updated. If it did, pull the info
    const [update, setDidUpdate] = useState(false);

//when didUpdate is called, pull the user attributes from AWS
    useEffect(() => {
        const fetchUser = async () => {
        
            const userInfo = await Auth.currentAuthenticatedUser();
            setAuthUser(userInfo);

            if (!userInfo) {return;}

            try {
                const userData = await API.graphql(graphqlOperation(
                    getUser, {id: userInfo.attributes.sub}
                ))

                if (userData) {
                    setUser(userData.data.getUser);
                }

            } catch (e) {
                console.log(e);
            }
        }
        fetchUser();
    }, [update])

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: SCREEN_WIDTH}}>
                <FontAwesome5 
                    name='chevron-left'
                    color='#fff'
                    size={20}
                    style={{padding: 20}}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>
                    Settings
                </Text>
                <View style={{width: 20}}/>
            </View>
            <View>
                {user ? (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
                        <Text style={[styles.paragraph, {width: '50%'}]}>
                            Signed in as
                        </Text>
                        <Text style={styles.paragraph}>
                            {authUser.attributes.email.toLowerCase()}
                        </Text>
                    </View>
                ) : (
                   <TouchableWithoutFeedback onPress={() => navigation.navigate('SignIn')}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
                            <Text style={[styles.paragraph, {width: '50%'}]}>
                                Sign in
                            </Text>
                            <Text style={styles.paragraph}>
                            
                            </Text>
                        </View>
                    </TouchableWithoutFeedback> 
                )}
                
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
                    <Text style={[styles.paragraph, {width: '50%'}]}>
                        Pick time
                    </Text>
                    <Text style={styles.paragraph}>
                        Medium
                    </Text>
                </View>
                <View style={{width: SCREEN_WIDTH - 40, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
                    <Text style={[styles.paragraph, {width: '50%'}]}>
                        Theme
                    </Text>
                    <Text style={styles.paragraph}>
                        Magic Orb
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
                    <Text style={[styles.paragraph, {width: '50%'}]}>
                        Do not pick the same item twice
                    </Text>
                    <Text style={styles.paragraph}>
                        True
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Settings;