import './App.css'
import { ProductAction } from './redux/actions/ProductAction'
import { CartAction } from './redux/actions/CartAction'
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch()

  const getProducts = () => {
    let product = '상품'
    dispatch(ProductAction.getProducts(product))
  }
  const product = useSelector(state => state.product.product)
  const response = useSelector(state => state.product.response)

  const getCart = () => {
    dispatch(CartAction.getCart())
  }
  const cart = useSelector(state => state.cart.cart)
  
  return (
    <div>
      <p>{product}</p>
      <p>{response}</p>
      <button onClick={getProducts}>상품</button> <hr />
      {cart.map((item, index) => (<p key={index}>{item}</p>))}
      <button onClick={getCart}>카트</button>
    </div>
  )
}

export default App
