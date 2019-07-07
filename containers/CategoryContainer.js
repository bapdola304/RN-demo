import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Category from '../screens/Category';
import { connect } from 'react-redux';
import addCart from '../actions/CartAction';
class CategoryContainer extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
            categoryId: navigation.getParam('categoryid')
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
            <Category value={carts} {...this.props} />
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
        carts: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addCart: (item) => dispatch(addCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
