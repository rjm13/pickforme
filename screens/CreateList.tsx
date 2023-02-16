import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, TouchableWithoutFeedback, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from '../Components/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import {Portal, Modal, Provider} from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const CreateList = ({navigation} : any) => {

    const [didUpdate, setDidUpdate] = useState(false);

    const [activeItem, setActiveItem] = useState(0);

    const [listItems, setListItems] = useState([
        // {
        //     id: '0',
        //     name: 'take a walk in the fresh air',
        //     description: 'put some shoes on. go outside. and breathe the fresh air',
        //     symbol: 'diamond',
        // }
    ]);

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
                    <FontAwesome 
                        name='edit'
                        color='#000'
                        size={20}
                        style={{padding: 10}}
                        onPress={() => {setActiveItem(index); showModal(); setItemData({id: index.toString(), name: listItems[index]?.name, description: listItems[index]?.description, symbol: listItems[index].symbol })}}
                    />
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

    const [privacy, setPrivacy] = useState('public');

    const [data, setData] = useState({
        title: '',
        category: '',
        details: '',
        privacy: privacy,
    });

    useEffect(() => {
        setData({
            ... data,
            privacy: privacy,
        });
    }, [privacy])

    const textInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setData({
                ... data,
                title: val,
            });
        } else {
            setData({
                ... data,
            });
        }
    };

    const catInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setData({
                ... data,
                category: val,
            });
        } else {
            setData({
                ... data,
            });
        }
    };

    const detailsInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setData({
                ... data,
                details: val,
            });
        } else {
            setData({
                ... data,
            });
        }
    };
    

    //NameModal
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {
        backgroundColor: '#000', 
        padding: 20,
        margin: 20,
        borderRadius: 15,
    };

    const [itemData, setItemData] = useState({
        id: activeItem.toString(),
        name: '',
        description: '',
        symbol: '',
    });

//modal text input states
    const nameInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setItemData({
                ... itemData,
                name: val,
            });
        } else {
            setItemData({
                ... itemData,
            });
        }
    };

    const descriptionInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setItemData({
                ... itemData,
                description: val,
            });
        } else {
            setItemData({
                ... itemData,
            });
        }
    };

    const symbolInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setItemData({
                ... itemData,
                symbol: val,
            });
        } else {
            setItemData({
                ... itemData,
            });
        }
    };

    const AddItemToList = () => {

        if (activeItem < listItems.length) {
                let newArray = [...listItems];
                newArray[activeItem] = {...newArray[activeItem], id: activeItem.toString(), name: itemData.name, description: itemData.description, symbol: itemData.symbol}
                setListItems(newArray);
                hideModal();
                setDidUpdate(!didUpdate);
        } else {
            let newData = listItems.concat([itemData]);
            setListItems(newData);
            setDidUpdate(!didUpdate);
            hideModal(); 
        }

        
    };

    useEffect(() => {
        setItemData({
            id: '0',
            name: '',
            description: '',
            symbol: '',
        })
    }, [didUpdate])

    const RemoveFromArray = () => {

    }

    return (
        <Provider>
            <Portal>
{/* create list item modal */}
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View />
                            <Text style={styles.title}>
                                List Item
                            </Text>
                            <FontAwesome 
                                name='trash'
                                color='#ff0000'
                                size={20}
                                style={{padding: 10}}
                                onPress={RemoveFromArray}
                            />
                        </View>
                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Item name
                            </Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput 
                                placeholder={listItems[activeItem]?.name || '....'}
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={40}
                                onChangeText={(val) => nameInputChange(val)}
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Description
                            </Text>
                        </View>
                        <View style={[styles.inputfield, {height: 120}]}>
                            <TextInput 
                                placeholder={listItems[activeItem]?.description || '....'}
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={200}
                                onChangeText={(val) => descriptionInputChange(val)}
                                autoCapitalize='sentences'
                                multiline={true}
                            />
                        </View>
                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Symbol
                            </Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput 
                                placeholder={listItems[activeItem]?.symbol || '....'}
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={40}
                                onChangeText={(val) => symbolInputChange(val)}
                                autoCapitalize='none'
                            />
                        </View>
                        <TouchableOpacity onPress={AddItemToList}>
                            <View style={{marginTop: 80, marginBottom: 20, borderRadius: 20, backgroundColor: 'purple', width: 160, height: 40, justifyContent: 'center'}}>
                                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center'}}>
                                    Add item
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Portal>

        <View style={styles.container}>
            <FlatList 
                data={listItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: SCREEN_WIDTH}}>
                            <FontAwesome5 
                                name='chevron-left'
                                color='#fff'
                                size={20}
                                style={{padding: 20}}
                                onPress={() => navigation.goBack()}
                            />
                            <Text style={styles.title}>
                                Create List
                            </Text>
                            <View style={{width: 20}}/>
                        </View>

                        <View style={{marginTop: 20, flexDirection: 'row', width: SCREEN_WIDTH - 0, justifyContent: 'center'}}>
                            <TouchableWithoutFeedback onPress={() => setPrivacy('private')}>
                                <View style={{alignItems: 'center', width: 120, height: 50, justifyContent: 'center',
                                    backgroundColor: privacy === 'private' ? 'purple' : '#474747',  
                                    borderBottomLeftRadius: 20, 
                                    borderTopLeftRadius: 20, 
                                    borderTopRightRadius: 0, 
                                    borderBottomRightRadius: 0,
                                }}>
                                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>
                                        Private
                                    </Text>
                                </View> 
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => setPrivacy('public')}>
                                <View style={{alignItems: 'center', width: 120, height: 50, justifyContent: 'center',
                                    backgroundColor: privacy === 'public' ? 'purple' : '#474747',   
                                    borderBottomLeftRadius: 0, 
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 20, 
                                    borderBottomRightRadius: 20
                                }}>                        
                                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>
                                        Public
                                    </Text>
                                </View> 
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Title
                            </Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput 
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={40}
                                onChangeText={(val) => textInputChange(val)}
                                autoCapitalize='none'
                            />
                        </View>

                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Category
                            </Text>
                        </View>
                        <View style={styles.inputfield}>
                            <TextInput 
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={40}
                                onChangeText={(val) => catInputChange(val)}
                                autoCapitalize='none'
                            />
                        </View>

                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Details
                            </Text>
                        </View>
                        <View style={[styles.inputfield, {height: 100}]}>
                            <TextInput 
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={40}
                                onChangeText={(val) => detailsInputChange(val)}
                                autoCapitalize='none'
                            />
                        </View>

                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Items
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => {setActiveItem(listItems.length); showModal();}}>
                            <View style={{alignSelf: 'center', marginTop: 20, justifyContent: 'center', backgroundColor: '#454545a5', width: SCREEN_WIDTH - 40, height: 60, borderRadius: 10, borderColor: 'gray', borderWidth: 1}}>
                                <Text style={{color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: '400'}}>
                                    + Add Item
                                </Text>
                            </View> 
                        </TouchableOpacity>  
                    </View>
                    
                }
                ListFooterComponent={
                    <View style={{height: 160}}/>
                }
            />
            <LinearGradient
                colors={['transparent','transparent', '#000000a5', '#000']}
                style={{height: 100, position: 'absolute', bottom: 0, width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center'}}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={{borderRadius: 20, backgroundColor: 'purple', width: 160, height: 40, justifyContent: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center'}}>
                        Create List
                    </Text>
                </View>
            </LinearGradient>
        </View>
        </Provider>
    );
}

export default CreateList;