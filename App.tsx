import React, {useEffect, useState, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
        <Navigation colorScheme='dark'/>
        <StatusBar style='light' backgroundColor='#0000004D'/>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
