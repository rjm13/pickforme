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
    
    return (
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
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            See Complete List
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default List;