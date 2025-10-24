import React from 'react';
import { useCart } from '../context/CartContext';

const mockProducts = [
  { id: 1, name: 'ლეპტოპი', price: 2500 },
  { id: 2, name: 'მაუსი', price: 80 },
  { id: 3, name: 'კლავიატურა', price: 150 },
];

const ProductList = () => {
  const { addItem } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h3>პროდუქტები</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        {mockProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h4>{product.name}</h4>
            <p>ფასი: {product.price} ₾</p>
            <button onClick={() => addItem(product)}>
              კალათაში დამატება
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;