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

import { API, graphqlOperation, Auth } from "aws-amplify";
import { listLists, getCategory } from '../src/graphql/queries';
import { createList, createCategory } from '../src/graphql/mutations';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Category = ({navigation, route}:any) => {

    const { id } = route.params;

    const [cat, setCat] = useState()

    const [lists, setLists] = useState([])

    useEffect(() => {

        let listsarr = []
        setLists([])

        const check = async (nextToken : any) => {
          try {  
                let response = await API.graphql(graphqlOperation(
                    listLists, {
                        nextToken,
                        filter: {
                            categoryID: {
                                eq: id
                            },
                        }
                    }
                ));
                
                for(let i = 0; i < response.data.listLists.items.length; i++ ){
                    listsarr.push(response.data.listLists.items[i])
                }
            
                if(response.data.listLists.nextToken !== null) {
                    check(response.data.listLists.nextToken);
                    return;
                }

                if (response.data.listLists.nextToken === null) {
                    setLists(listsarr)
                    return;
                }
            } catch (e) {
            console.log(e)
        }
    }

    check(null);
    //console.log(listsarr)
    //setLists(listsarr)

    }, [])

    useEffect(() => {
        const check = async () => {
                try {
                    let response = await API.graphql(graphqlOperation(
                        getCategory, {id: id}
                    ));
                    setCat(response.data.getCategory)
                } catch (e) {
                    console.log(e)
                }
        }
        check();
    }, [])

    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;

    const Item = ({id, title, privacy, symbol, detail} : any) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('List', {id: id})}>
                <View style={[styles.List, {backgroundColor: 'lime'}]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginHorizontal: 10}}>
                        <Text style={{ color: '#000', paddingVertical: 4, fontSize: 18, fontWeight: '600', textTransform: 'capitalize' }}>
                            {title}
                        </Text>
                    </View>
                    </View>
                    
                    <View style={{ marginHorizontal: 20}}>
                        <Text style={{ textAlign: 'center', color: '#000', paddingVertical: 4, fontSize: 26, fontWeight: '900' }}>
                            42
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
            privacy={item.privacy}
            symbol={item.symbol}
            details={item.details}
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
                    {cat?.category.slice(0,1).toUpperCase() + cat?.category.slice(1, cat?.category.length)}
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