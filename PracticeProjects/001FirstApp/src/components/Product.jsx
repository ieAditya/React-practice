function Product({productDetails, addToCart, removeFromCart}) {
  return (
    <div className="w-80 rounded-xl bg-zinc-800 border border-zinc-700 p-6 shadow-lg shadow-black/40 hover:border-indigo-500 transition-all duration-300">
  <h1 className="text-2xl font-bold text-white">{productDetails.name}</h1>

  <div className="my-5 h-40 rounded-lg bg-zinc-700 flex items-center justify-center">
    <span className="text-zinc-400">Product Image</span>
  </div>

  <h1 className="text-zinc-300">
    Price: <span className="text-indigo-400 font-semibold">₹{productDetails.price}</span>
  </h1>

  <h1 className="text-zinc-300 mt-1">
    Added: <span className="text-white">{productDetails.quantity}</span>
  </h1>

  <div className="mt-6 flex gap-3">
    <button
      className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm transition-colors"
      onClick={() => addToCart(productDetails.id)}
    >
      Add to cart
    </button>

    <button
      className="px-4 py-2 rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-200 text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      disabled={productDetails.quantity == 0}
      onClick={() => removeFromCart(productDetails.id)}
    >
      Remove
    </button>
  </div>
</div>
  )
}

export default Product