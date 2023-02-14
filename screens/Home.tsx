import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from '../Components/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Searchbar } from 'react-native-paper';
import MyLists from '../Components/MyLists';
import CategoryList from '../Components/CategoryList';


const Home = () => {

    const [nextToken, setNextToken] = useState(null)

    //search function states
    const [newSearch, setNewSearch] = useState('');

    //search function trigger that refreshes the search results
    const [didUpdate, setDidUpdate] = useState(false);

    //focus the keyboard only on initial render
    //const focus = useRef(null)

    // useEffect(() => {
    //   focus.current.focus()
    // }, [])

     //this is the search bar
     function SearchBar () {

        const [searchQuery, setSearchQuery] = useState('');

        const onChangeSearch = (query : any)  => setSearchQuery(query); 

        return (
          <View>
            <Searchbar
              placeholder={'Search lists...'}
              placeholderTextColor='#000000a5'
              //autoComplete={true}
              onChangeText={onChangeSearch}
              onIconPress={() => {setNewSearch(searchQuery); setNextToken(null); setDidUpdate(!didUpdate); }}
              onSubmitEditing={() => {setNewSearch(searchQuery); setNextToken(null); setDidUpdate(!didUpdate);}}
              value={searchQuery}
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
                marginLeft: 40,
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
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SearchBar />
                    <FontAwesome 
                        name='gear'
                        size={20}
                        color='#fff'
                        style={{padding: 20}}
                    />
                </View>

                <TouchableOpacity style={{margin: 20}}>
                    <View style={{borderRadius: 6, borderWidth: 1, borderColor: '#fff', backgroundColor: 'transparent'}}>
                        <Text style={{fontWeight: 'bold', color: '#fff', textAlign: 'center', fontSize: 18, paddingHorizontal: 50, paddingVertical: 10}}>
                            + Create a List
                        </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            <MyLists />
            <CategoryList />
        </ScrollView>
    )
}

export default Home;