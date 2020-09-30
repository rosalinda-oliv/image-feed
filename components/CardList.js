import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Card from './Card';
import { getImageFromId, FlatList } from '../utils/api';

const keyExtractor = ({ id }) => id.toString();

const renderItem = ({ item: { id, author } }) => (
    <Card
        fullname={author}
        image={{ uri: getImageFromId(id) }}
    />
)
const CardList = ({ items }) => {
    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired
        })
    ).isRequired,
};



export default CardList

const styles = StyleSheet.create({})
