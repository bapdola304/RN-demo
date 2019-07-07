import React from 'react';
import { StyleSheet } from 'react-native';
import {View} from 'react-native'
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator'
import axios from 'axios'
const AppContainer = createAppContainer(AppNavigator);
axios.defaults.baseURL = 'https://6w71nkprpk.sse.codesandbox.io';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index'
const store = createStore(reducers);

export default function App() {
  return(
      <Provider store={ store } >
        <AppContainer/>
      </Provider> 
  )
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight : 20,
  },
});
