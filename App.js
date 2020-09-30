import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Card from './components/Card';
import CardList from './components/CardList';

const items = [
  { id: 0, author: "Rosalinda Oliveira" },
  { id: 1, author: "Joseph Nunez" }
  { id: 2, author: "Johan Domingues" },
  { id: 3, author: "Zafira Carillo" }
]

export default function App() {
  return (
    <View style={styles.container}>
      <CardList items={items} />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
