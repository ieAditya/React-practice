import { useState } from 'react'
import Product from './components/Product'

function App() {
  const [numOfProdInCart, setNumOfProdInCart] = useState(0)
  const [cartValues, setCartValues] = useState(0)
  const [cartItems, setCartItems] = useState([
    {
      id : "01",
      name: "LAPTOP",
      price: 30000,
      quantity : 0
    },
    {
      id : '02',
      name: "KEYBOARD",
      price: 5000,
      quantity : 0
    },
    {
      id : '03',
      name: "MOUSE",
      price: 1000,
      quantity : 0
    },
    {
      id : '04',
      name: "MONITOR",
      price: 10000,
      quantity : 0
    },
    {
      id : '05',
      name: "CPU",
      price: 22000,
      quantity : 0
    },
    {
      id : '06',
      name: "GPU",
      price: 50000,
      quantity : 0
    },
  ])

  const addToCart = (id) => {
    const item = cartItems.find((item) => item.id == id)
    setCartValues(prev => prev + item.price)
    setNumOfProdInCart(prev => prev+1)
    setCartItems(cartItems.map((item) => (item.id == id) ? {...item, quantity: item.quantity+1} : item))
  }

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id == id)
    setCartValues(prev => prev - item.price)
    setNumOfProdInCart(prev => prev-1)
    setCartItems(cartItems.map((item) => (item.id == id && item.quantity > 0) ? {...item, quantity: item.quantity-1} : item))
  }

  const resetCart = () => {
    setCartValues(0)
    setNumOfProdInCart(0)
    setCartItems(cartItems.map((item) => ({...item, quantity: 0}) ))
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className="flex items-center justify-end w-full h-20 px-10 bg-zinc-800 border-b border-zinc-700 shadow-md">
        <div className="flex items-center gap-6">

          <div className="px-4 py-2 rounded-lg bg-zinc-700">
            <span className="text-zinc-400 text-sm">Total Items</span>
            <p className="text-white font-semibold">{numOfProdInCart}</p>
          </div>

          <div className="px-4 py-2 rounded-lg bg-zinc-700">
            <span className="text-zinc-400 text-sm">Cart Value</span>
            <p className="text-indigo-400 font-semibold">₹{cartValues}</p>
          </div>

          <button
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors"
            onClick={resetCart}
          >
            Clear Cart
          </button>

        </div>
      </div>

      <div className='flex-1 w-full bg-zinc-900 p-10 overflow-auto'>
        <div className="grid grid-cols-4 gap-8">
          {cartItems.map((item)=> <Product key={item.id} productDetails={item} addToCart={addToCart} removeFromCart={removeFromCart}/>)}
        </div>
      </div>
    </div>
  )
}

export default App