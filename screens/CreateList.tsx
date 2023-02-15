import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, TouchableWithoutFeedback, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from '../Components/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const CreateList = ({navigation} : any) => {

    const [listItems, setListItems] = useState([
        {
            id: '',
            name: '',
            description: '',
            symbol: '',
        }
    ]);

    const Item = ({id, name, description, symbol} : any) => {
        return (
            <View>

            </View>
        );
    }

    const renderItem = ({ item } : any) => (
        <Item 
            id={item.id}
            name={item.name}
            description={item.description}
            symbol={item.symbol}
        />
      );

    const [privacy, setPrivacy] = useState('public');

    const [data, setData] = useState({
        title: '',
        check_textInputChange: false,
    });

    const textInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setData({
                ... data,
                title: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ... data,
                check_textInputChange: false
            });
        }
    }

    return (
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
                                onChangeText={(val) => textInputChange(val)}
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
                                onChangeText={(val) => textInputChange(val)}
                                autoCapitalize='none'
                            />
                        </View>

                        <View style={{marginTop: 40, marginBottom: 6, alignSelf: 'flex-start', marginLeft: 20}}>
                            <Text style={styles.inputtitle}>
                                Items
                            </Text>
                        </View>
                        <TouchableOpacity>
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
    );
}

export default CreateList;