import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableWithoutFeedback, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from '../Components/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';

const data = [
    {
        id: '1',
        title: 'food',
        color: 'gold'
    },
    {
        id: '2',
        title: 'parenting',
        color: 'tan'
    },
    {
        id: '3',
        title: 'things to do',
        color: 'lime'
    },
    {
        id: '4',
        title: 'places',
        color: 'yellow'
    },
    {
        id: '5',
        title: 'media',
        color: 'violet'
    },
]

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height


const Categories = () => {

    //navigation hook
    const navigation = useNavigation();

    const Item = ({id, title, category, privacy, symbol, detail, color} : any) => {


        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Category', {id: id})}>
               <View style={{height: 60, width: (SCREEN_WIDTH-40), alignSelf: 'center', backgroundColor: color, borderRadius: 4, marginVertical: 10, marginHorizontal: 10, justifyContent: 'center',}}>
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
                    Categories
                </Text>
            </View>
            <View>
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <View style={{height: 60}}/>
                    }
                />
            </View>
        </View>
    );
}

export default Categories;