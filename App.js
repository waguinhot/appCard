import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cardpage from './src/pages/card';

export default function App() {
  return (
   <Cardpage />
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
