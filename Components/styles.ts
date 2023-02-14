import React from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        marginTop: 40
      },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
      },
      subtext: {
        fontSize: 14,
        color: '#fff',
      },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        backgroundColor: '#00ffff',
        borderRadius: 15,
        overflow: 'hidden',
    },
    List : {
      height: 60, 
      width: (SCREEN_WIDTH-40), 
      alignSelf: 'center', 
      backgroundColor: 'transparent', 
      borderRadius: 4, 
      marginVertical: 10, 
      marginHorizontal: 10, 
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    }
});

export { styles }