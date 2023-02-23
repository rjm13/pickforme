import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableWithoutFeedback, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from '../Components/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';

import lists from '../Constants/dummydata'

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../src/graphql/queries';
import { updateUser } from '../src/graphql/mutations';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height


const MyLists = () => {

        //update trigger
        const [didUpdate, setDidUpdate] = useState(false);

        const [lists, setLists] = useState([]);
    
        const [loading, setIsLoading] = useState(false)
    
        useEffect(() => {
    
            const fetchLists = async () => {
    
                setIsLoading(true);
    
                const listsarr = []
    
                const userInfo = await Auth.currentAuthenticatedUser();
    
                if (!userInfo) {return;}
    
                try {
    
                    const userData = await API.graphql(graphqlOperation(
                        getUser, {id: userInfo.attributes.sub}
                    ))
    
                    if (userData.data.getUser.lists.items.length < 4  && userData.data.getUser.lists.items.length !== 0) {
                        for (let i = 0; i < userData.data.getUser.lists.items.length; i++) {
                            listsarr.push(userData.data.getUser.lists.items[i])
                        }
                    } else if (userData.data.getUser.lists.items.length > 4 && userData.data.getUser.lists.items.length !== 0) {
                        for (let i = 0; i < 4; i++) {
                            listsarr.push(userData.data.getUser.lists.items[i])
                        }
                    }
                    setLists(listsarr);
                    setIsLoading(false);
                } catch (e) {
                console.log(e);
              }
            }
            fetchLists(); 
          }, [didUpdate])

    //navigation hook
    const navigation = useNavigation();

    //list item
    const Item = ({id, title, category, privacy, symbol, detail, color} : any) => {


        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('List', {id: id})}>
                <View style={{height: 120, width: (SCREEN_WIDTH-40)/2, alignSelf: 'center', backgroundColor: 'yellow', borderRadius: 4, marginVertical: 10, marginHorizontal: 10, justifyContent: 'center',}}>
                    <Text style={{color: '#000', padding: 4, textAlign: 'center', fontSize: 15, fontWeight: '600'}}>
                        {title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const renderItem = ({ item } : any) => (
        <Item 
            id={item.id}
            title={item.title}
            category={item.category}
            privacy={item.privacy}
            symbol={item.symbol}
            detail={item.detail}
            color={item.color}
        />
      );

    return (
        <View style={{marginTop: 20}}>
            <View style={{alignItems: 'flex-end', flexDirection: 'row', marginHorizontal: 20, marginBottom: 10, justifyContent: 'space-between'}}>
                <Text style={styles.title}>
                    My Lists
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('UserLists')}>
                   <Text style={styles.subtext}>
                        See all
                    </Text> 
                </TouchableOpacity>
                
            </View>
            <View>
                <FlatList 
                    data={lists}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>
        </View>
    );
}

export default MyLists;