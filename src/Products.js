import React, {useState} from 'react';
import {popularProducts} from './data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';
import SingleProduct from './SingleProduct.js';
import { Link } from 'react-router-dom';
import Cart from './Cart.js';


const Products = ({popularProductsArray, setPopularProductsArray, singleProductItem, setSingleProductItem, favouritesNum, setFavouritesNum, chooseFilter, setChooseFilter}) => {
    
    const asc = popularProductsArray.filter((a, b) => b.qty - a.qty);

    window.scrollTo(0, 0)
    return (
    <div className="mainContainer" >
        <div className="secondaryContainer">
        {popularProductsArray.map(item => (
        <div className="productContainer col-3" key={item.id} >
            <div className="circle">
                <img className={item.id !== 2 ? "productsImage" : "productsImageBigger"} src={item.img} alt="image"></img>
            </div>
            <div className="productsInfo">
                <div className="icons">
                    <Link to="/SingleProduct" onClick={() => setSingleProductItem(item.id)} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray}><div className="iconDivs"><FontAwesomeIcon icon={faMagnifyingGlass} class="faMagnifyingGlassProducts" style={{color: 'black'}} /></div></Link>
                    <div className="iconDivs"><FontAwesomeIcon icon={faPlus} class="faPlusProducts" 
                    onClick={() => {setPopularProductsArray(popularProductsArray.map((el) => el.id === item.id && el.chosen === false ? {...el, chosen: true, qty: item.qty + 1} : el.id === item.id && el.chosen === true ? {...el, chosen: false, qty: item.qty + 1} : el )); setFavouritesNum(popularProductsArray.filter(item => item.chosen).length); alert('Item added to cart')}}/></div>
                    <Link to="/Cart" popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} favouritesNum={favouritesNum} setFavouritesNum={setFavouritesNum}><div className="iconDivs"><FontAwesomeIcon icon={faShoppingCart} class="faShoppingCartProducts" style={{color: 'black'}}/></div></Link>
                </div>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Products