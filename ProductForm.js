import React, { useState } from 'react';

function ProductForm({ onProductAdded }) {
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { pname, price: parseFloat(price), discount: parseFloat(discount) };

    // Send a POST request to add the product
    fetch('http://localhost:9000/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        // Once the product is added, call the onProductAdded function to refresh the list
        onProductAdded();
      })
      .catch((error) => console.error('Error adding product:', error));

    // Clear the form
    setPname('');
    setPrice('');
    setDiscount('');
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Discount:</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
