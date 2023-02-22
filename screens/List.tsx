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

import {Portal, Modal, Provider} from 'react-native-paper';

import {styles} from '../Components/styles';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getList, getSavedList, getUser } from '../src/graphql/queries';
import { createSavedList, deleteSavedList } from '../src/graphql/mutations';
//import lists from '../Constants/dummydata';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const List = ({navigation, route}: any) => {

    const { id } = route.params;

    const [saveID, setSaveID] = useState('')

    const [listItems, setListItems] = useState([{
        id: '',
        name: '',
        details: '',
        symbol: ''
    }]);

    const [picked, setPicked] = useState(false);

    const [list, setList] = useState({});

    const [isSaved, setIsSaved] = useState(false);

    //get the List items
    useEffect(() => {
        const fetchList = async () => {
            try {
                const listData = await API.graphql(graphqlOperation(
                    getList, {id: id}
                ))
                setList(listData.data.getList); 
            } catch (e) {
            console.log(e);
          }
        }

        fetchList();
        
        setListItems([]);
    }, [id])

    function getRandomInt(max : any) {
        return Math.floor(Math.random() * max);
      }

    //List Items Modal
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {
        backgroundColor: '#000', 
        padding: 20,
        borderRadius: 15,
    };

    const Item = ({id, name, description, symbol, index} : any) => {
        return (
            <View style={{height: 60, width: SCREEN_WIDTH-40, backgroundColor: 'lime', justifyContent: 'center', padding: 10, marginTop: 20, alignSelf: 'center', borderRadius: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '900'}}>
                        {index}. 
                    </Text>
                    <Text style={{width: '80%', fontSize: 16, fontWeight: '500'}}>
                       {name}
                    </Text>
                    <View />
                    {/* <FontAwesome 
                        name='edit'
                        color='#000'
                        size={20}
                        style={{padding: 10}}
                        onPress={() => {setActiveItem(index); showModal(); setItemData({id: index.toString(), name: listItems[index]?.name, description: listItems[index]?.description, symbol: listItems[index].symbol })}}
                    /> */}
                </View>
            </View>
        );
    }

    const renderItem = ({ item, index } : any) => (
        <Item 
            id={item.id}
            index={index}
            name={item.name}
            description={item.description}
            symbol={item.symbol}
        />
      );

    //on render, determine if the list in alraedy saved or not
    useEffect(() => {
        const fetchSavedList = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();

            try {
                let userData = await API.graphql(graphqlOperation(
                    getUser, {id: userInfo.attributes.sub
                    }
                ))

                for (let i = 0; i < userData.data.getUser.saved.items.length; i++) {
                    if (userData.data.getUser.saved.items[i].listID === id) {
                        setIsSaved(true);
                        setSaveID(userData.data.getUser.saved.items[i].id)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSavedList();
    }, [])

    const SaveList = async ({id} : any) => {

        let userInfo = await Auth.currentAuthenticatedUser();

        let createList = await API.graphql(graphqlOperation(
            createSavedList, {input: {
                userID: userInfo.attributes.sub, 
                listID: id,
                type: "SavedList",
                createdAt: new Date(),
                updatedAt: new Date(),
            }}
        ))
        setSaveID(createList.data.createSavedList.id)
        console.log(createList)
    }

    const UnSaveList = async ({id} : any) => {

        let userInfo = await Auth.currentAuthenticatedUser();

        let getAList = await API.graphql(graphqlOperation(
            getSavedList, {
                id: saveID
            }
        ))
        console.log(getAList)
        
        let connectionID = getAList.data.getSavedList.id

        let deleteConnection = await API.graphql(graphqlOperation(
            deleteSavedList, {input: {"id": connectionID}}
        ))
        console.log(deleteConnection)
    }

    const onSavePress = () => {
        if ( isSaved === false ) {
            setIsSaved(true);
            SaveList({id: id})
        }
        if ( isSaved === true ) {
            setIsSaved(false);
            UnSaveList({id: id});
        }  
    };
    
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View>
                    <FlatList 
                        data={listItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false} 
                        ListHeaderComponent={
                            <View style={{marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <FontAwesome 
                                    name='close'
                                    color='#fff'
                                    size={20}
                                    style={{padding: 10}}
                                    onPress={hideModal}
                                />
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('EditList', {id: id})}>
                                    <View style={{width: 60, height: 24, borderRadius: 16, borderWidth: 1, borderColor: '#fff', backgroundColor: '000000a5', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{color: '#fff'}}>
                                            Edit
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        }
                    />
                    </View>
                </Modal>

            </Portal>
        <View style={styles.container}>
            <View style={{width: SCREEN_WIDTH, height:80, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <FontAwesome 
                        name='close'
                        color='white'
                        size={20}
                        style={{padding: 20}}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onSavePress}>
                    <FontAwesome 
                        name={isSaved === true ? 'bookmark' : 'bookmark-o'}
                        color={isSaved === true ? 'gold' : '#fff'}
                        size={20}
                        style={{padding: 20}}
                    />
                </TouchableWithoutFeedback>

            </View>
            <View style={{alignItems: 'center', justifyContent: 'space-between', height: SCREEN_HEIGHT-200}}>
                <View>
                    <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                        {list.title}
                    </Text>

                    <View style={{marginVertical: 40, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 40}}>
                        <View>
                            <Text style={{color: '#fff'}}>
                                {listItems.length} items
                            </Text>
                            <Text style={{color: '#fff', textTransform: 'capitalize'}}>
                                {list?.privacy}
                            </Text>
                        </View>
                        <View>
                            <Text style={{color: '#fff', textTransform: 'capitalize'}}>
                                {list?.category}
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => setPicked(!picked)} style={{justifyContent: 'center'}}>
                    {picked === true ? (
                        <View style={{width: SCREEN_WIDTH, height: 200}}>
                            <Text style={[styles.title, {textAlign: 'center', textTransform: 'capitalize'}]}>
                                {listItems[getRandomInt(listItems.length)].name}
                            </Text>
                        </View>
                    ) : (
                        <Image 
                            style={{width: 200, height: 200}}
                            source={require('../assets/magicorb.png')}
                        />
                    )}
                </TouchableOpacity>

                <View>
                    <TouchableOpacity onPress={showModal}>
                        <Text style={styles.title}>
                            See Complete List
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </Provider>
    )
}

export default List;