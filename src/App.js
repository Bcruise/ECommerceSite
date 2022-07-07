import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import Register from './Register';
import Login from './Login';
import Cart from './Cart.js';
import SingleProduct from './SingleProduct';
import ProductList from './ProductList';
import Products from './Products.js';
import {popularProducts} from './data.js';


function App() {
  const [popularProductsArray, setPopularProductsArray] = useState(popularProducts);
  const [singleProductItem, setSingleProductItem] = useState(0);
  const [favouritesNum, setFavouritesNum] = useState(0);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} favouritesNum={favouritesNum} setFavouritesNum={setFavouritesNum}/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} favouritesNum={favouritesNum} setFavouritesNum={setFavouritesNum}/>} />
        <Route path="/SingleProduct" element={<SingleProduct popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} />} />
        <Route path="/ProductList" element={<ProductList popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} favouritesNum={favouritesNum} setFavouritesNum={setFavouritesNum}/>} />
        <Route path="/Products" element={<Products popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} favouritesNum={favouritesNum} setFavouritesNum={setFavouritesNum}/>} />
      </Routes>
    </Router>
  );
}

export default App;
