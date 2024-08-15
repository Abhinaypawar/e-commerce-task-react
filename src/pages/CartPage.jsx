import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

function CartPage() {

  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // const handleRemove = (id) => {
  //   const updatedCart = cart.filter(item => item.id !== id);
  //   setCart(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // };

  // const handleQuantityChange = (id, quantity) => {
  //   const updatedCart = cart.map(item => 
  //     item.id === id ? { ...item, quantity } : item
  //   );
  //   setCart(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // };
  const handleRemove = (id) => {
    console.log("Remove item with ID:", id);
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  const handleQuantityChange = (id, quantity) => {
    console.log("Change quantity for item with ID:", id, "to:", quantity);
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length > 0 ? (
        cart.map(item => (
          <CartItem key={item.id} item={item} onRemove={handleRemove} onQuantityChange={handleQuantityChange} />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="text-right mt-4">
        <h2 className="text-xl">Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default CartPage;