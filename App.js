import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Platform, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

import Card from './components/Card';
import CardList from './components/CardList';
import Feed from './screens/Feed';
import CommentInput from './components/CommentInput';
import Comments from './screens/Comments';

export default function App() {

  const [commentsForItem, setCommentsForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openCommentsScreen = id => {
    setShowModal(true);
    setSelectedItemId(id);
  }

  const closeCommentsScreen = () => {
    setShowModal(false);
    setSelectedItemId(null)
  }

  const onSubmitComment = text => {
    const comments = commentsForItem[selectedItemId] || [];

    const update = {
      ...commentsForItem, 
      [selectedItemId]: [...comments, text],
    }

    setCommentsForItem(update);
  }

  return (
    <View style={styles.container}>
      
      <Feed 
      style={styles.feed}
      commentsForItem={commentsForItem}
      onPressComment={openCommentsScreen} 
      />

      <Modal 
      visible={showModal}
      animationType="slide"
      onRequestClose={closeCommentsScreen}
      >
        <Comments 
        style={styles.comment}
        comments={commentsForItem[selectedItemId] || []}
        onClose = {closeCommentsScreen}
        onSubmitComment={onSubmitComment}
        />

      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const platformVersion = Platform.OS === "ios"
  ? parseInt(Platform.Version, 10)
  : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === 'android' || platformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  },
  comment: {
    flex: 1,
    marginTop: Platform.OS === 'android' || platformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  }
});
