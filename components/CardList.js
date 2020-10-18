import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import Card from './Card';
import { getImageFromId } from '../utils/api';

const keyExtractor = ({id}) => id.toString();

const CardList = ({items, commentsForItem, onPressComment}) => {

    const renderItem = ( {item:{id, author}}) => {

        const comments = commentsForItem[id];

       return (
       <Card 
            fullname={author}
            image={{uri:getImageFromId(id)}}
            linktext={`${comments ? comments.length : 0} Comments`}
            onPressLinkComment={()=>onPressComment(id)}
        />
       )
    }
    
    return (
       <FlatList 
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            extraData={commentsForItem}
       />
    )
}

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            author:PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CardList;

const styles = StyleSheet.create({})
