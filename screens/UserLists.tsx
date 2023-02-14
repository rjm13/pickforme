import React, {useEffect, useState, useRef} from 'react';

import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Dimensions, 
    TouchableOpacity,
    FlatList
} from 'react-native';

import {styles} from '../Components/styles';
import lists from '../Constants/dummydata';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const UserLists = ({navigation}:any) => {

    //state for selecting the playlist
    const [SelectedId, setSelectedId] = useState(1);

    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;

    const Item = ({id, title, category, privacy, symbol, detail, color, numItems} : any) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('List', {id: id})}>
                <View style={[styles.List, {backgroundColor: color}]}>
                    <View style={{flexDirection: 'row'}}>
                        {privacy === 'private' ? (
                            <FontAwesome 
                                name='lock'
                                size={22}
                                color='#000'
                                style={{paddingHorizontal: 20, alignSelf: 'center'}}
                            />
                        ) : null}
                        <View style={{marginHorizontal: 10}}>
                        <Text style={{ color: '#000', paddingVertical: 4, fontSize: 18, fontWeight: '600', textTransform: 'capitalize' }}>
                            {title}
                        </Text>
                        <Text style={{ color: '#000', paddingBottom: 4, fontSize: 13, fontWeight: '400', textTransform: 'capitalize' }}>
                            {category}
                        </Text>
                    </View>
                    </View>
                    
                    <View style={{ marginHorizontal: 20}}>
                        <Text style={{ textAlign: 'center', color: '#000', paddingVertical: 4, fontSize: 26, fontWeight: '900' }}>
                            {numItems}
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
            category={item.category}
            privacy={item.privacy}
            symbol={item.symbol}
            detail={item.detail}
            color={item.color}
            numItems={item.numItems}
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
                            />
                        </View>
                    ) : SelectedId === 2 ? (
                        <View />
                    ) : SelectedId === 3 ? (
                        <View />
                    ) : null}
                </View>
            </View>
        </View>
    );
}

export default UserLists;