import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Announcement from './Announcement.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

const Cart = ({popularProductsArray, setPopularProductsArray, favouritesNum, setFavouritesNum}) => {
  
  const subTotal = popularProductsArray.reduce((a, b) => a = a + (b.qty * b.price),0);
  const shoppingBagTotal = popularProductsArray.reduce((a, b) => a = a + b.qty,0);
  window.scrollTo(0, 0)
  return (
    <div className="cartContainer">
        <Navbar />
        <Announcement />
            <div className="cartWrapper">
                <h1 className="cartTitle">YOUR BAG</h1>
                <div className="cartTop">
                    <Link to="/" ><button className="cartButton" style={{backgroundColor: 'transparent'}}>CONTINUE SHOPPING</button></Link>
                      <div className="cartTopTexts">
                        <span className="cartTopText" style={{marginRight: '10px'}}>Shopping Bag ({shoppingBagTotal})</span>
                      </div>
                    <button className="cartButton" style={{border: 'none', backgroundColor: 'black', color: 'white'}}>CHECKOUT NOW</button>
                </div>
                <div className="cartBottom">
                  <div className="divRow">
                {popularProductsArray.map(item => item.qty > 0 && (<div className="cartInfo">
                    <div className="cartProduct">
                      <div className="cartProductDetails">
                        <img className="cartImage col-5" src={item.img}></img>
                        <div className="cartDetails">
                          <span className="cartProductName"><b>Product:</b><span style={{marginLeft: '5px'}}>{item.title}</span></span>
                          <span className="cartID"><b>ID:</b><span style={{marginLeft: '5px'}}>947449778324</span></span>
                          <div className="cartColor" style={{backgroundColor: 'black'}}></div>
                          <span className="cartSize"><b>Size:</b><span style={{marginLeft: '5px'}}>37.5</span></span>
                        </div>
                      </div>
                    </div>
                  <div className="cartPriceDetails">
                    <div className="productAmountContainer">
                      <button className="SPButtons" onClick={() => setPopularProductsArray(popularProductsArray.map(el => el.id === item.id ? {...el, qty: el.qty + 1} : el))}>+</button>
                        <div className="productAmount">{item.qty}</div>
                      <button className="SPButtons" onClick={() => setPopularProductsArray(popularProductsArray.map(el => el.id === item.id && el.qty > 1 ? {...el, qty: el.qty - 1} : el.id === item.id && el.qty === 1 ? {...el, qty: el.qty - 1, chosen: false} : el))}>-</button>
                    </div>
                    <div className="cartProductPrice">$ {item.price}</div>
                  </div>
                  </div>))}
                  </div>
                  <div className="cartSummary col-5">
                    <h1 className="summaryTitle">ORDER SUMMARY</h1>
                    <div className="summaryItem">
                      <span className="summaryTitleText">Subtotal</span>
                      <span className="summaryTitlePrice">$ {subTotal}</span>
                    </div>
                    <div className="summaryItem">
                      <span className="summaryTitleText">Estimated Shipping</span>
                      <span className="summaryTitlePrice">$ 5</span>
                    </div>
                    <div className="summaryItem">
                      <span className="summaryTitleText">Shipping Discount</span>
                      {subTotal >= 50 ? (<span className="summaryTitlePrice">-$ 5</span>) : (<span className="summaryTitlePrice">$ 0</span>)}                      
                    </div>
                    <div className="summaryItem" style={{fontSize: '24px', fontWeight: '500'}}>
                      <span className="summaryTitleText">Total</span>
                      {subTotal >= 50 ? (<span className="summaryTitlePrice">$ {subTotal}</span>) : (<span className="summaryTitlePrice">$ {subTotal + 5}</span>)}
                    </div>
                    <button className="summaryButton">CHECKOUT</button>
                  </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Cart