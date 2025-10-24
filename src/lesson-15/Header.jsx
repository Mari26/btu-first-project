import React from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ background: '#eee', padding: '20px', textAlign: 'right' }}>
      <h2>ჩემი მაღაზია</h2>
      <div style={{ fontSize: '20px',fontStyle:'unset' }}>
        🛒 კალათა: {totalItems}
      </div>
      {/* <span>თქვენს მიერ არჩეული ნივთების ჯამური რაოდენობაა:{totalItems}</span> */}
    </header>
  );
};

export default Header;