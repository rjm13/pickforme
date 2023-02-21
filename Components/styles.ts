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
      //height: 60, 
      width: (SCREEN_WIDTH-40), 
      alignSelf: 'center', 
      backgroundColor: 'transparent', 
      borderRadius: 8, 
      paddingVertical: 10, 
      marginHorizontal: 10, 
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    paragraph: {
      fontSize: 14,
      color: '#fff',
    },
    textInputTitle: {
      color: '#fff',
      fontWeight: 'normal',
    },
    inputfield: {
        width: '90%',
        height: 40,
        backgroundColor: '#363636',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    inputtitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600'
    },
    buttonlayout: {
        backgroundColor: 'purple',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        overflow: 'hidden',
    },
    buttontext: {
      fontSize: 16,
      fontWeight: '800',
      color: '#fff',
      textAlign: 'center'
    }
});

export { styles }