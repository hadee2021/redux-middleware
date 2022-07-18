// 미들웨어는 함수를 리턴

  const add = (a, b) => {
    return a + b
  }

  function getProducts(product) {
    return async (dispatch, getState) => {
      let response = await add(1, 3)
      console.log('product: ',product)
      console.log('response: ',response)
      dispatch({type:'GET_PRODUCT', payload:{product, response}})
    }
  }

  export const ProductAction = { getProducts }