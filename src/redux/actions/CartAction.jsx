// 미들웨어는 함수를 리턴


function getCart() {
  return (dispatch, getState) => {
    let cart= ['apple', 'orange']
    console.log('cart: ',cart)
    dispatch({type:'GET_CART', payload: cart})
  }
}

export const CartAction = { getCart }