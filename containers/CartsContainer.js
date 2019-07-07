import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Cart from '../screens/Cart';
import { connect } from 'react-redux';
import addCart from '../actions/CartAction';
class CartsContainer extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Cart'
        }

    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
 
    render() {       
        const { addCart, carts } = this.props;
        return (
          <Cart value = {carts} {...this.props} />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
});
const mapStateToProps = state => {
    return {
        carts : state.carts
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartsContainer)
