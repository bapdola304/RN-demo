import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import phoneImage from '../assets/smartphone.png';


export default function ProductList(props){
   let { onPress, product } = props;   
    return(
        <View style = {styles.wraper}>  
            <View style = {styles.container}>
                <View style = {styles.img}>
                    <Text style = {styles.title}>{product.item.name}</Text>
                    <Image style = {styles.categoryImage} source = {{uri : product.item.imgUrl }}/>
                </View>
                <View style = {styles.caption}>
                    <Text style = {styles.price}>${ product.item.price }</Text>
                    <TouchableOpacity onPress = {onPress}>  
                        <Text style = {styles.addcart}>Buy Now +</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
       )
}

const styles = StyleSheet.create({
    categoryImage : {
        width : 128,
        height: 128,
        textAlign : 'center'
    },
    title : {
        textTransform : 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold',
        textAlign : 'center'
    },
    price : {
        marginLeft : 0,
        fontSize: 16,
        flex: 1
    },
    caption : {
        flexDirection : 'row',
        paddingTop: 5,
    },  
    addcart : {
        flexDirection : 'row',
        fontSize: 16,
        padding: 5,
        backgroundColor : '#4285f4',
        borderRadius: 10

    },
    container : {
        marginBottom : 10,
        padding : 20,
        shadowColor : '#000',
        backgroundColor : '#d4d5d8',
        borderRadius : 4,
        shadowRadius : 10,
        shadowOffset : { width: 0, height : 0},
        shadowOpacity : 0.5,
        elevation: 2
    },
    img : {
        alignItems : 'center'
    },
    wraper : {
        flex : 1,
        paddingHorizontal: 8,
        marginTop: 16
    }
})