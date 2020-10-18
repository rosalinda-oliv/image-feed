import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

const CommentInput = ({placeholder, onSubmit}) => {

    const [text, setText] = useState('');
    const handleChangeText = text => setText(text);
    const handleSubmitEditing = () => {
        if(!text) return;
        onSubmit(text);
        setText('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            value={text}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
            onChangeText={handleChangeText}
            onSubmitEditing={handleSubmitEditing}
            />
        </View>
    )
}

export default CommentInput

CommentInput.propTypes = {
    onSubmit:PropTypes.func.isRequired,
    placeholder:PropTypes.string,
}

CommentInput.defaultProps = {
    placeholder: '',
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.2)",
        paddingHorizontal: 20,
        height: 60,
    },
    input: {
        flex:1,
    }
})
