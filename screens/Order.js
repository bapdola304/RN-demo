import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ProductList from '../components/ProductList';
import axios from 'axios'; 

export default class Order extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Orders'
        }

    }
    constructor(props) {
        super(props)
        this.state = {
            prodcuts: [],
            id: null
        }
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text>Orders</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
});
