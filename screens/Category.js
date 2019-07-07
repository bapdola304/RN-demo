import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, AppRegistry, AsyncStorage } from 'react-native';
import ProductList from '../components/ProductList';
import axios from 'axios';
import { CirclesLoader } from 'react-native-indicator';
import Loading from 'react-native-whc-loading'
import AnimatedLoader from "react-native-animated-loader";
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator
} from 'react-native-indicators';
export default class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prodcuts: [],
            loading: true,
            id: null,
            visible: true
        }
    }
     componentWillReceiveProps(props) {
        let { carts } = props.carts.carts;
        if (carts.length > 0) {
            alert('Add to Cart success!')
            AsyncStorage.setItem('TASKS', '2');
        }

    }
    componentDidMount() {
        let categoryid = this.props.navigation.state.params.categoryid;
        axios.get('/products?categoryid=' + categoryid)
            .then(res => {
                this.setState({
                    prodcuts: res.data,
                    visible: false
                });
            })

    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.container2}>
                    <AnimatedLoader
                        visible={this.state.visible}
                        overlayColor="rgba(255,255,255,0.75)"
                        animationStyle={styles.lottie}
                        animationType=""
                        speed={1}
                    />
                    {/* <BallIndicator animating = {this.state.visible} interaction= {this.state.visible} color = "#147efb"/> */}
                </View>

                <FlatList
                    numColumns={2}
                    data={this.state.prodcuts}
                    renderItem={(item) => <ProductList product={item} onPress={() => this.props.addCart(item)} />}
                    keyExtractor={({ id }, index) => id}
                />


            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        flex: 1

    },
    container2: {
        position: 'absolute',
        top: '40%',
        left: '50%',
    },

    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        position: 'absolute',
        top: '100%',
        left: '50%',
    },
    lottie: {
        width: 100,
        height: 100
    }
});
AppRegistry.registerComponent('Category', () => Category)
