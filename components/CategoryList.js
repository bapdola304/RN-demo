import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import phoneImage from '../assets/smartphone.png';


export default function CategoryList(props){

   let { onPess, category } = props;
   
    return(
        <TouchableOpacity onPress = {onPess}>
            <View style = {styles.container}>
                <Text style = {styles.title}>{category.name}</Text>
                <Image style = {styles.categoryImage} source = {{ uri : category.imgUrl}}/> 
            </View>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    categoryImage : {
        width : 128,
        height: 128
    },
    title : {
        textTransform : 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    container : {
        marginBottom : 10,
        alignItems: 'center',
        padding : 20,
        shadowColor : 'black',
        backgroundColor : '#FFF',
        borderRadius : 10,
        shadowRadius : 30,
        shadowOffset : { width: 0, height : 0},
        shadowOpacity : 0.8,
        elevation: 2
    }
})