import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryList from '../components/CategoryList';
import Category from './Category';
import axios from 'axios'; 
import {NineCubesLoader} from 'react-native-indicator';
import AnimatedLoader from "react-native-animated-loader";
export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    constructor(props){
        super(props)
        this.state = {
            listItem : [],
            visible : true
        }
    }
    componentDidMount() {
        axios.get('/categories')
            .then(res =>{
                this.setState({
                    listItem : res.data,
                    visible: false
                });
                
            })
    }
    render() {
        const {navigate} = this.props.navigation;
        let { listItem } = this.state;
        return (
            <View style = {styles.wrap}>
                {/* <AnimatedLoader
                    visible={this.state.visible}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    animationType = ""
                    speed={1}
                /> */}
                <ScrollView style={styles.container}>
                    <FlatList
                        data={listItem}
                        renderItem={({ item }) => <CategoryList 
                                                category = {item} 
                                                onPess = {() => navigate('Category',{ title : item.name, categoryid : item.id })} />}
                        keyExtractor={({id}, index) => id}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ccc'
    },
    loader:{
        position:'absolute',
        top:'50%',
        left : '50%'
    },
    lottie: {
        width: 100,
        height: 100
      }
});
