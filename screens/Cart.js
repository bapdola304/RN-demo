import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import CartsList from '../components/CartsList';
import axios from 'axios';

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prodcuts: [],
            id: null
        }
    }
 

    render() {
        let { carts } = this.props.carts;
        let TotalPrice = carts.reduce((a, b) => {
            return a + b.item.price
        }, 0)
        console.log(TotalPrice);

        return (
            <View style={styles.container}>
                <FlatList
                    data={carts}
                    renderItem={(item) => <CartsList product={item.item} onPress={() => alert(1)} />}
                    keyExtractor={({ id }, index) => id}
                />
                <View style={styles.infoCarts}>
                    <Text>TotalPrice: $ {TotalPrice}</Text>
                    <Button
                        title="Order"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        flex: 1
    },
    infoCarts: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        shadowColor: '#000',
        backgroundColor: '#ccc',
        borderRadius: 4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
