import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableWithoutFeedback, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from '../Components/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
    {
        id: '1',
        title: 'List 1',
        category: 'food',
        privacy: 'private',
        symbol: 'diamond',
        detail: 'Take out',
        color: 'orange'
    },
    {
        id: '2',
        title: 'List 2',
        category: 'food',
        privacy: 'private',
        symbol: 'diamond',
        detail: 'Take out',
        color: 'cyan'
    },
    {
        id: '3',
        title: 'List 3',
        category: 'food',
        privacy: 'private',
        symbol: 'diamond',
        detail: 'Take out',
        color: 'blue'
    },
    {
        id: '4',
        title: 'List 4',
        category: 'food',
        privacy: 'private',
        symbol: 'diamond',
        detail: 'Take out',
        color: 'red'
    },
]

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height


const MyLists = () => {

    const Item = ({id, title, category, privacy, symbol, detail, color} : any) => {


        return (
            <View style={{height: 120, width: (SCREEN_WIDTH-40)/2, alignSelf: 'center', backgroundColor: color, borderRadius: 4, marginVertical: 10, marginHorizontal: 10, justifyContent: 'center',}}>
                <Text style={{color: '#000', padding: 4, textAlign: 'center', fontSize: 15, fontWeight: '600'}}>
                    {title}
                </Text>
            </View>
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
                <Text style={styles.subtext}>
                    See all
                </Text>
            </View>
            <View>
                <FlatList 
                    data={data}
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