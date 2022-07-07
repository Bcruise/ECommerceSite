import React, {useState} from 'react'
import Navbar from './Navbar.js';
import Announcement from './Announcement.js';
import Slider from './Slider.js';
import Categories from './Categories.js';
import Products from './Products.js';
import Newsletter from './Newsletter.js';
import Footer from './Footer.js';
import ProductList from './ProductList';
import SingleProduct from './SingleProduct.js';
import Register from './Register.js';
import Login from './Login.js';
import Cart from './Cart.js';



const Home = ({popularProductsArray, setPopularProductsArray, singleProductItem, setSingleProductItem, favouritesNum, setFavouritesNum}) => {
  

  return (
    <>
    <Announcement />
    <Navbar popularProductsArray={popularProductsArray}/>
    <Slider popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray}/>
    <Categories popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} />
    <Products popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} favouritesNum={favouritesNum} setFavouritesNum={setFavouritesNum}/>
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home