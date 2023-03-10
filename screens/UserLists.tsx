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
    RefreshControl
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { listLists, getUser } from '../src/graphql/queries';
import { updateUser } from '../src/graphql/mutations';

import {styles} from '../Components/styles';
import SavedList from '../Components/SavedList';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SavedLists from '../Components/SavedList';


const UserLists = ({navigation}:any) => {

    //state for selecting the playlist
    const [SelectedId, setSelectedId] = useState(1);

    //update trigger
    const [didUpdate, setDidUpdate] = useState(false);

    const [lists, setLists] = useState([]);

    const [publists, setPubLists] = useState([]);

    const [loading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchLists = async () => {

            setIsLoading(true);

            const listsarr = []

            const publistarr = []

            const userInfo = await Auth.currentAuthenticatedUser();

            if (!userInfo) {return;}

            try {

                const userData = await API.graphql(graphqlOperation(
                    getUser, {id: userInfo.attributes.sub}
                ))

                if (userData.data.getUser.lists.items.length > 0) {
                    for (let i = 0; i < userData.data.getUser.lists.items.length; i++) {
                        if (userData.data.getUser.lists.items[i].privacy === 'private') {
                            listsarr.push(userData.data.getUser.lists.items[i])
                         }
                         if (userData.data.getUser.lists.items[i].privacy === 'public') {
                            publistarr.push(userData.data.getUser.lists.items[i])
                    } 
                    //else {return;}
                    }
                }
                setLists(listsarr);
                setPubLists(publistarr)
                setIsLoading(false);
               
            } catch (e) {
            console.log(e);
          }
        }
        fetchLists(); 
      }, [didUpdate])

      const [isFetching, setIsFetching] = useState(false);

      const onRefresh = () => {
        setIsFetching(true);
        setDidUpdate(!didUpdate)
        setTimeout(() => {
          setIsFetching(false);
        }, 2000);
      }

    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;

    const Item = ({id, title, category, privacy, symbol, details} : any) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('List', {id: id})}>
                <View style={[styles.List, {backgroundColor: 'lime'}]}>
                    <View style={{flexDirection: 'row', width: '70%'}}>
                        {privacy === 'private' ? (
                            <FontAwesome 
                                name='lock'
                                size={22}
                                color='#000'
                                style={{paddingHorizontal: 14, alignSelf: 'center'}}
                            />
                        ) : null}
                        <View style={{marginHorizontal: 10}}>
                            <Text style={{ color: '#000', paddingVertical: 0, fontSize: 18, fontWeight: '600', textTransform: 'capitalize' }}>
                                {title}
                            </Text>
                            <Text style={{ color: '#000', paddingBottom: 4, fontSize: 13, fontWeight: '400', textTransform: 'capitalize' }}>
                                {category}
                            </Text>
                        </View>
                    </View>
                    
                    <View style={{ marginHorizontal: 0, width: '20%'}}>
                        <Text style={{ textAlign: 'center', color: '#000', paddingVertical: 4, fontSize: 26, fontWeight: '900' }}>
                            166
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const renderItem = ({ item } : any) => (
        <Item 
            id={item.id}
            title={item.title}
            category={item.category.category}
            privacy={item.privacy}
            symbol={item.symbol}
            details={item.detail}
            //color={item.color}
            //numItems={item.numItems}
        />
      );

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
                    My Lists
                </Text>
                <View style={{width: 20}}/>
            </View>

            <View>
                <View>
                    <View style={{ 
                        flexDirection: 'row', 
                        justifyContent: 'flex-start', 
                        width: '100%', 
                        alignItems: 'flex-end',
                        marginHorizontal: 10,
                        marginTop: 10,
                    }}>
                        <TouchableWithoutFeedback onPress={() => setSelectedId(1)}>
                            <Text style={{ 
                                color: SelectedId ===  1 ? '#C617E0' : '#ffffffa5',
                                borderColor: SelectedId ===  1 ? '#C617E0' : '#ffffffa5',
                                marginHorizontal: 15, 
                                fontSize: 16,
                                fontWeight: 'normal',
                                borderWidth: 0.5,
                                borderRadius: 20,
                                paddingHorizontal: 16,
                                paddingVertical: 4,
                            }}>
                                Private
                            </Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => setSelectedId(2)}>
                            <Text style={{ 
                                color: SelectedId ===  2 ? '#C617E0' : '#ffffffa5',
                                borderColor: SelectedId ===  2 ? '#C617E0' : '#ffffffa5',
                                marginHorizontal: 15, 
                                fontSize: 16,
                                fontWeight: 'normal',
                                borderWidth: 0.5,
                                borderRadius: 20,
                                paddingHorizontal: 16,
                                paddingVertical: 4,
                            }}>
                                Public
                            </Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => setSelectedId(3)}>
                            <Text style={{ 
                                color: SelectedId ===  3 ? '#C617E0' : '#ffffffa5',
                                borderColor: SelectedId ===  3 ? '#C617E0' : '#ffffffa5',
                                marginHorizontal: 15, 
                                fontSize: 16,
                                fontWeight: 'normal',
                                borderWidth: 0.5,
                                borderRadius: 20,
                                paddingHorizontal: 16,
                                paddingVertical: 4,
                            }}>
                                Saved
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 20, height: '86%'}}>
                    {SelectedId === 1 ? (
                        <View>
                            <FlatList 
                                data={lists}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                extraData={lists}
                                maxToRenderPerBatch={20}
                                refreshControl={
                                    <RefreshControl
                                    refreshing={isFetching}
                                    onRefresh={onRefresh}
                                    />
                                }
                            />
                        </View>
                    ) : SelectedId === 2 ? (
                        <View>
                            <FlatList 
                                data={publists}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                extraData={lists}
                                maxToRenderPerBatch={20}
                                refreshControl={
                                    <RefreshControl
                                    refreshing={isFetching}
                                    onRefresh={onRefresh}
                                    />
                                }
                            />
                        </View>
                    ) : SelectedId === 3 ? (
                        <SavedList />
                    ) : null}
                </View>
            </View>
        </View>
    );
}

export default UserLists;