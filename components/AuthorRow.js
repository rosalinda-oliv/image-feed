import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import getInitials from '../utils/getInitials';
import getAvatarColor from '../utils/getAvatarColor';

const AuthorRow = ({ fullname, linktext, onPressLinkText }) => {

    
    return (
        <View style={styles.container}>
            <Avatar 
                initials={getInitials(fullname)}
                size={35}
                backgroundColor={getAvatarColor(fullname)}
            />
            <Text style={styles.text}>{fullname}</Text>
            {!!linktext && (
                <TouchableOpacity onPress={onPressLinkText}>
                    <Text numberOfLines={1}>{linktext}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default AuthorRow;

AuthorRow.propTypes = {
    fullname:PropTypes.string.isRequired,
    linktext:PropTypes.string.isRequired,
    onPressLinkText:PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
    },
    text:{
        flex:1,
        marginHorizontal:6,
    }
})
