import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, clearCart, addItem } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ padding: '20px', background: '#f9f9f9' }}>
        <h3>კალათა</h3>
        <p>კალათა ცარიელია.</p>
      </div>
    );
  }

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', background: '#f9f9f9' }}>
      <h3>კალათა</h3>
      {items.map((item) => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '10px 0' }}>
          <span>{item.name} (x{item.quantity}) - {item.price * item.quantity} ₾</span>
          <div>
            <button onClick={() => addItem(item)} style={{ marginRight: '5px' }}>+</button>
            <button onClick={() => removeItem(item.id)} style={{ marginRight: '5px' }}>-</button>
          </div>
        </div>
      ))}
      <h4>ჯამური ფასი: {totalPrice} ₾</h4>
      <button onClick={clearCart} style={{ background: 'red', color: 'white' }}>
        კალათის გასუფთავება
      </button>
    </div>
  );
};

export default Cart;