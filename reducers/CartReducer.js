
let initState = {
    carts : []
}


const cartReducer = (state = initState, action) => {

    switch(action.type) {
      case 'ADD_CART':
        return {...state, carts : [...state.carts, action.value]}
      default : return state;
    }
  
  }
  
  export default cartReducer;