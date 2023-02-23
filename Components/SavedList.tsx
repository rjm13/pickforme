import React, {useState, useEffect} from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    FlatList, 
    Dimensions, 
    RefreshControl,
    ActivityIndicator,
    TouchableWithoutFeedback
} from 'react-native';

import {styles} from '../Components/styles';

import { savedListByDate, getUser } from '../src/graphql/queries';
import {graphqlOperation, API, Auth} from 'aws-amplify';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';

const SavedLists = () => {

    //navigation hook
    const navigation = useNavigation();

    //state for the array of pinned stories for that user
    const [savedLists, setSavedLists] = useState([])

    //update trigger
    const [didUpdate, setDidUpdate] = useState(false);

    useEffect(() => {

        const fetchLists = async () => {

            setIsLoading(true);

            const saved = []

            const userInfo = await Auth.currentAuthenticatedUser();

            if (!userInfo) {return;}

            try {

                const savedData = await API.graphql(graphqlOperation(
                    getUser, {id: userInfo.attributes.sub}
                ))

                if (savedData.data.getUser.saved.items.length > 0) {
                    for (let i = 0; i < savedData.data.getUser.saved.items.length; i++) {
                        if (savedData.data.getUser.saved.items[i] !== null) {
                            saved.push(savedData.data.getUser.saved.items[i].list)
                        }
                    }
                }

                console.log('saved are...')
                console.log(saved)
                     
                setSavedLists(saved);
                
                setIsLoading(false);
               
            } catch (e) {
            console.log(e);
          }
        }
        fetchLists(); 
      }, [didUpdate])


    //refresh state of the flatlist
    const [isFetching, setIsFetching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onRefresh = () => {
        setIsFetching(true);
        setDidUpdate(!didUpdate)
        setTimeout(() => {
          setIsFetching(false);
        }, 2000);
      }

      const Item = ({id, title, category, privacy, symbol, details} : any) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('List', {id: id})}>
                <View style={[styles.List, {backgroundColor: 'lime'}]}>
                    <View style={{flexDirection: 'row', width: '70%'}}>
                        {privacy === 'private' ? (
                            <FontAwesome 
                                name='lock'
                                size={22}
                                color='#000'
                                style={{paddingHorizontal: 14, alignSelf: 'center'}}
                            />
                        ) : null}
                        <View style={{marginHorizontal: 10}}>
                            <Text style={{ color: '#000', paddingVertical: 0, fontSize: 18, fontWeight: '600', textTransform: 'capitalize' }}>
                                {title}
                            </Text>
                            <Text style={{ color: '#000', paddingBottom: 4, fontSize: 13, fontWeight: '400', textTransform: 'capitalize' }}>
                                {category}
                            </Text>
                        </View>
                    </View>
                    
                    <View style={{ marginHorizontal: 0, width: '20%'}}>
                        <Text style={{ textAlign: 'center', color: '#000', paddingVertical: 4, fontSize: 26, fontWeight: '900' }}>
                            166
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const renderItem = ({ item } : any) => {

        let cat = ''

        if (item) {
            cat = item.category.category
        }

        return (
            <Item 
                id={item.id}
                title={item.title}
                category={cat}
                privacy={item.privacy}
                symbol={item.symbol}
                details={item.detail}
                //color={item.color}
                //numItems={item.numItems}
            />
        )
    }

    return (
            <View style={styles.container}>
               
                <FlatList 
                    data={savedLists}
                    renderItem={renderItem}
                    keyExtractor={item => item}
                    extraData={savedLists}
                    maxToRenderPerBatch={20}
                    refreshControl={
                        <RefreshControl
                        refreshing={isFetching}
                        onRefresh={onRefresh}
                        />
                    }
                    showsVerticalScrollIndicator={false}    
                    ListFooterComponent={ () => {
                        return (
                            <View style={{ height:  100}} />
                    );}}
                    ListEmptyComponent={ () => {
                        return (
                            <View style={{ alignItems: 'center'}}>
                                {isLoading === true ? (
                                <View style={{margin: 30}}>
                                    <ActivityIndicator size='small' color='purple' />
                                </View>
                                ) : (
                                <View>
                                    <Text style={{ color: 'white', margin: 20, textAlign: 'center'}}>
                                        There is nothing here! Tap the save icon to save a list.
                                    </Text>

                                    <Text style={{ textAlign: 'center', color: 'gray', margin: 20,}}>
                                        (pull to refresh)
                                    </Text>
                                </View>
                                )}
                            </View>
                    );}}
                />
            
            </View>
    );
}

export default SavedLists;