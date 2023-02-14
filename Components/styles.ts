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
    }
});

export { styles }