import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import PropTypes from 'prop-types'

const renderItem = (item, index) => {
    <View key={index} style={styles.comments}>
        <Text>{item}</Text>
    </View>
}

const CommentList = ({items}) => {

    return (
        <View>
            <ScrollView>
                {items.map(renderItem)}
            </ScrollView>
        </View>
    )
}

CommentList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CommentList

const styles = StyleSheet.create({
    comments: {
        marginLeft:20,
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.2)",
    }
})
