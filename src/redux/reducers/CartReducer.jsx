let initialState = {
  cart: []
}

function CartReducer(state = initialState, action) {
  console.log('action은 뭘까??', action)
  let { type, payload} = action
  switch(type) {
    case 'GET_CART':
      return {...state, cart: payload}
    default :
    return { ...state}
  }
}

export default CartReducer