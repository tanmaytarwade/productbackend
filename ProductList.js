import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch data from the API once the component mounts
  useEffect(() => {
    fetch('http://localhost:9000/product')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.pname}</td>
              <td>{product.price}</td>
              <td>{product.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
