let initialState = {
  product: '',
  response: 0
}

function ProductReducer(state = initialState, action) {
  console.log('action은 뭘까??', action)
  let { type, payload} = action
  switch(type) {
    case 'GET_PRODUCT':
      return {...state, product: payload.product, response: payload.response}
    default :
    return { ...state}
  }
}

export default ProductReducer