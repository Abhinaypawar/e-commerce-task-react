import { useState } from 'react';

function ProductCard({ product }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    setInCart(true);
  };

  return (
    <div className="border p-4 rounded-md">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p>${product.price}</p>
      <button 
        onClick={handleAddToCart} 
        disabled={inCart} 
        className={`mt-2 px-4 py-2 ${inCart ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded-md`}
      >
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;