import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ProductList from '../components/ProductList';
import axios from 'axios'; 

export default class Setting extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Settings'
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
                <Text>Settings</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
});
