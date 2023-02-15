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


const Category = ({navigation}:any) => {

    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;

    const Item = ({id, title, category, privacy, symbol, detail, color, numItems} : any) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('List', {id: id})}>
                <View style={[styles.List, {backgroundColor: color}]}>
                    <View style={{flexDirection: 'row'}}>
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
                    Category
                </Text>
                <View style={{width: 20}}/>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20, height: '86%'}}>
                <FlatList 
                    data={lists}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default Category;