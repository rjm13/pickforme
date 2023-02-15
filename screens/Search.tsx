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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Searchbar } from 'react-native-paper';

import {styles} from '../Components/styles';

//import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Search = ({route, navigation} : any) => {

    const { searchParams } = route.params;

    //navigation hook
    //const navigation = useNavigation();

    const [nextToken, setNextToken] = useState(null)

    //search function states
    const [newSearch, setNewSearch] = useState('');

    //search function trigger that refreshes the search results
    const [didUpdate, setDidUpdate] = useState(false);

    //this is the search bar
    function SearchBar () {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query : any)  => setSearchQuery(query); 

    return (
        <View>
        <Searchbar
            placeholder={searchParams || 'Search lists...'}
            placeholderTextColor='#000000a5'
            //autoComplete={true}
            onChangeText={onChangeSearch}
            onIconPress={() => {setNewSearch(searchQuery); setNextToken(null); setDidUpdate(!didUpdate); }}
            onSubmitEditing={() => {setNewSearch(searchQuery); setNextToken(null); setDidUpdate(!didUpdate);}}
            value={searchQuery}
            defaultValue={searchParams}
            //ref={focus}
            maxLength={20}
            icon={() => {return(
            <FontAwesome5 
                name='search'
                color='#000000a5'
                size={18}
            />)}}
            iconColor='#000000a5'
            style={{
            height: 35,
            marginRight: 20,
            borderRadius: 8,
            backgroundColor: '#e0e0e0',
            width: Dimensions.get('window').width - 80 
            }}
            inputStyle={{fontSize: 16,}}
        />
        </View>
    );
    };


    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 
                    name='chevron-left'
                    color='#fff'
                    size={20}
                    style={{padding: 20}}
                    onPress={() => navigation.goBack()}
                />
                <SearchBar />
            </View>
        </View>
    );
}

export default Search;