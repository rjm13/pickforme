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
import lists from '../Constants/dummydata';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const List = ({navigation, route}: any) => {

    const { id } = route.params;

    const [listItems, setListItems] = useState([{
        id: '',
        name: '',
        details: '',
        symbol: ''
    }]);

    const [picked, setPicked] = useState(false);

    const [list, setList] = useState({
        id: '',
        title: '',
        category: '',
        privacy: '',
        symbol: '',
        detail: '',
        color: '',
        numItems: 0,
        createdAt: '',
        updatedAt: '',
        items: [{}]
    })

    //get the List items
    useEffect(() => {

        let numId = +id - 1

        setListItems(lists[numId].items);
        setList(lists[numId]);
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
            <View style={{width: SCREEN_WIDTH, height:80, justifyContent: 'center', alignItems: 'flex-start'}}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <FontAwesome 
                        name='close'
                        color='white'
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
                                {list.numItems} items
                            </Text>
                            <Text style={{color: '#fff', textTransform: 'capitalize'}}>
                                {list.privacy}
                            </Text>
                        </View>
                        <View>
                            <Text style={{color: '#fff', textTransform: 'capitalize'}}>
                                {list.category}
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