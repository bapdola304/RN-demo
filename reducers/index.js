import { combineReducers} from 'redux';
import carts from './CartReducer';
const reducers =  combineReducers({ 
    carts
  })

  export default reducers;