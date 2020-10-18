import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Proptypes from 'prop-types'

const NavigationBar = ({ title, leftText, onPressLeftText }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.leftText}
            onPress={onPressLeftText}
            >
                <Text>{leftText}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default NavigationBar;

NavigationBar.proptypes = {
    title: Proptypes.string,
    leftText: Proptypes.string,
    onPressLeftText: Proptypes.func,
}
NavigationBar.defaultProps = {
    title: '',
    leftText: '',
    onPressLeftText: () => { },
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderBottomColor: "rgba(0,0,0,0.2)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "500",
    },
    leftText: {
        position: "absolute",
        left: 20,
        top: 0,
        bottom: 0,
        justifyContent: "center",
    }
})