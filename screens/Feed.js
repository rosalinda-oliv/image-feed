import React, { Component }from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import { fetchImages } from "../utils/api";
import CardList from '../components/CardList';

export default class Feed extends Component {

    state = {
        loading: true,
        error: false,
        items: [],
    }

    async componentDidMount() {
        try {
            const items = await fetchImages();
            this.setState({
                loading:false,
                items: items,
            })
        } catch (error) {
            this.setState({
                loading:false,
                error:true,
            })
        }
    }

    static propTypes = {
        style: ViewPropTypes.style,
    }

    static defaultProps = {
        style: null,
    }

    render() {
        
        const { style, commentsForItem, onPressComment } = this.props;
        const { loading, error, items } = this.state;

        if(loading) {
            return <ActivityIndicator size="large" />
        }

        if(error) {
            return <Text> An error has ocurred </Text>
        }

        return (
            <SafeAreaView>
                <CardList 
                items={items}
                commentsForItem={commentsForItem}
                onPressComment={onPressComment}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
