import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Categories from './screens/Categories';
import Category from './containers/CategoryContainer';
import Cart from './containers/CartsContainer'
import Order from './screens/Order'
import Setting from './screens/Setting'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge} from 'react-native-elements'
import IconWithBadge from './components/IconWithBadge'

const color = {
  ACTIVE : '#147efb',
  INACTIVE : '#ccc'
}
const CategoryStack = createStackNavigator({
  Categories: { screen: Categories },
  Category: { screen: Category },
});

CategoryStack.navigationOptions = {
  tabBarLabel : 'Home',
  tabBarIcon : ({ focused }) =>{
    return <Ionicons 
            name = 'ios-home' 
            size = {30} 
            color = {focused ? color.ACTIVE : color.INACTIVE}/>
  }
}

const CartStack = createStackNavigator({
  Cart
});
CartStack.navigationOptions = {
  tabBarLabel : 'Carts',
  tabBarIcon : ({ focused }) =>{
    return <IconWithBadge 
            name = 'ios-cart' 
            size = {30} 
            color = {focused ? color.ACTIVE : color.INACTIVE}/>
  }
}
const OrderStack = createStackNavigator({
  Order
});
OrderStack.navigationOptions = {
  tabBarLabel : 'Orders',
  tabBarIcon : ({ focused }) =>{
    return <Ionicons 
            name = 'ios-albums' 
            size = {30} 
            color = {focused ? color.ACTIVE : color.INACTIVE}/>
  }
}
const SettingrStack = createStackNavigator({
  Setting
});
SettingrStack.navigationOptions = {
  tabBarLabel : 'Settings',
  tabBarIcon : ({ focused }) =>{
    return <Ionicons 
            name = 'ios-settings' 
            size = {30} 
            color = {focused ? color.ACTIVE : color.INACTIVE}/>
  }
}


const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  SettingrStack
});

export default (AppNavigator)

