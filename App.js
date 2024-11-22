import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [refresh, setRefresh] = useState(false);

  // Function to trigger refresh of product list
  const handleProductAdded = () => {
    setRefresh(!refresh); // Toggle state to trigger re-fetch of product list
  };

  return (
    <div>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductList refresh={refresh} />
    </div>
  );
}

export default App;


