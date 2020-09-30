import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';

import AuthorRow from './AuthorRow';

const Card = ({fullname, linktext, onPressLinkText, image}) => {

    const [loading, setLoading] = useState(true);

    return (
        <View>
            <AuthorRow 
                fullname={fullname}
                linktext={linktext}
                onPressLinkText={onPressLinkText}
            />
            <View style={styles.image} >
                {loading && 
                    <ActivityIndicator 
                        style={StyleSheet.absoluteFill}
                        size="large"
                    />
                }
                <Image 
                    style={StyleSheet.absoluteFill}
                    source={image}
                    onLoad={()=>setLoading(false)}
                />
            </View>
        </View>
    )
}

export default Card;

Card.propTypes = {
    fullname: PropTypes.string.isRequired,
    linktext: PropTypes.string,
    onPressLinktext:PropTypes.func,
    image: Image.propTypes.source.isRequired,
}

Card.defaultProps= {
    linktext: "",
    onPressLinkText: () => {},
}

const styles = StyleSheet.create({
    image:{
        aspectRatio:1,
        backgroundColor:"rgba(0,0,0,0.05)",
    }
})
