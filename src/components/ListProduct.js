import React, { useState } from 'react';
import { parseEther } from 'ethers'; // Update import statement
import { productListingContract } from '../blockchain'; // Ensure correct path

const ListProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const listProduct = async () => {
    setError(''); // Reset error state
    const priceInWei = parseEther(price); // Update usage
    try {
      await productListingContract.listProduct(name, priceInWei);
      alert('Product listed successfully!');
    } catch (err) {
      setError('Failed to list product. Please try again.');
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price (ETH)" />
      <button onClick={listProduct}>List Product</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ListProduct;
