import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import SingleProduct from './Components/SingleProduct';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[Products,setProducts]=useState([])
  const API="https://api.pujakaitem.com/api/products"
  useEffect(()=>{
    getProducts();

},[setProducts])
const getProducts=async()=>{
    const res=await axios.get(API);
    setProducts(res.data)
    
}
  return (
    <BrowserRouter>
      <Nav Products={Products} setProducts={setProducts} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:type" element={<Product Products={Products} setProducts={setProducts} />} />
          <Route path="/products/:type/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
