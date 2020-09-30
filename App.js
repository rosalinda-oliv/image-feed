import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

import Card from './components/Card';
import CardList from './components/CardList';

const items = [
  {id:0, author: "Joao Goncalves"},
  {id:1, author: "Antonio Silva"},
  {id:3, author: "Jose Silva"},
  {id:4, author: "Antonio Antunes"},
  {id:5, author: "Manuel Silva"},
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
