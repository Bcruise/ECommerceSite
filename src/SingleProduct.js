import React from 'react';
import Navbar from './Navbar.js';
import Announcement from './Announcement';
import Footer from './Footer';
import Newsletter from './Newsletter';
import { Link } from 'react-router-dom';


const SingleProduct = ({popularProductsArray, setPopularProductsArray, singleProductItem, setSingleProductItem, basketTotal}) => {
    
  return (
    <>
    <div className="singleProductContainer">
        <Navbar />
        <Announcement />
        {popularProductsArray.map(item => item.id === singleProductItem && (<div className="singleProductWrapper">
            <div className="SPImageContainer">
                <img className="SPImage" src={item.img}></img>
            </div>
            <div className="SPInfoContainer">
                <h1 className="SPTitle">{item.title}</h1>
                <p className="SPDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                tristique tortor pretium ut. Curabitur elit justo, consequat id
                condimentum ac, volutpat ornare.</p>
                <span className="SPPrice">$ {item.price}</span>
                <div className="SPFilterContainer">
                    <div className="SPFilter">
                        <span className="SPFilterTitle">Color:</span>
                        <div className="SPFilterColor" style={{backgroundColor: 'black'}}></div>
                        <div className="SPFilterColor" style={{backgroundColor: '#00008b'}}></div>
                        <div className="SPFilterColor" style={{backgroundColor: 'green'}}></div>
                    </div>
                    <div className="SPFilter">
                    <span className="SPFilterTitle">Size</span>
                        <select className="SPFilterSize">
                            <option className="filterSizeOption">XS</option>
                            <option className="filterSizeOption">S</option>
                            <option className="filterSizeOption">M</option>
                            <option className="filterSizeOption">L</option>
                            <option className="filterSizeOption">XL</option>
                        </select>
                    </div>
                </div>
                <div className="addContainer">
                    <div className="amountContainer">
                        <button className="SPButtons" onClick={() => setPopularProductsArray(popularProductsArray.map(el => el.id === item.id ? {...el, qty: el.qty + 1} : el))}>+</button>
                        <span className="SPAmount">{item.qty}</span>
                        <button className="SPButtons" onClick={() => setPopularProductsArray(popularProductsArray.map(el => el.id === item.id && el.qty > 0 ? {...el, qty: el.qty - 1} : el.id === item.id && el.qty === 1 ? {...el, qty: el.qty - 1, chosen: false} : el))}>-</button>
                    </div>
                    <Link to="/Cart" popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray}><button className="addToCart">ADD TO CART</button></Link>
                </div>
            </div>
        </div>))}
        <Newsletter />
        <Footer />
    </div>
    </>
  )
}

export default SingleProduct