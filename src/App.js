import React, { useState } from 'react';
import './App.css';

const picturesData = [
  { id: 1, name: 'Flower 1', price: 10 },
  { id: 2, name: 'Flower 2', price: 35 },
  { id: 3, name: 'Flower 3', price: 50 },
  { id: 4, name: 'Flower 4', price: 10 },
  { id: 5, name: 'Flower 5', price: 20 },
  { id: 6, name: 'Flower 6', price: 30 },
  { id: 7, name: 'Flower 7', price: 10 },
  { id: 8, name: 'Flower 8', price: 45 },
  { id: 9, name: 'Flower 9', price: 50 },
  { id: 10, name: 'Flower 10', price: 20 },
 
  
  
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (picture) => {
    setCart([...cart, picture]);
    setTotalPrice(totalPrice + picture.price);
  };

  const handlePay = () => {
    
    alert(`Payment successfull! Total Amount: ₹ ${totalPrice}`);
     
    const updatedPictures = picturesData.filter(picture => !cart.includes(picture));
    
    picturesData.splice(0, picturesData.length, ...updatedPictures);
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <div className="App">
      <h1>Picture Buying Store</h1>
      <div className="picture-container">
        {picturesData.map((picture) => (
          <div key={picture.id} className="picture-card">
            <img src={require(`./pictures/${picture.id}.jpg`)} alt={picture.name} />
            <p>{picture.name}</p>
            <p>₹{picture.price}</p>
            <button onClick={() => addToCart(picture)}>Buy</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.map((cartItem) => (
          <div key={cartItem.id} className="cart-item">
            <p>{cartItem.name}</p>
            <p>₹{cartItem.price}</p>
          </div>
        ))}
        <p>Total: ₹{totalPrice}</p>
        <button onClick={handlePay}>Pay</button>
      </div>
    </div>
  );
};

export default App;
