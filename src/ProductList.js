import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Announcement from './Announcement';
import Newsletter from './Newsletter';
import Products from './Products.js';
import Footer from './Footer';

const ProductList = ({popularProductsArray, setPopularProductsArray, singleProductItem, setSingleProductItem, favouritesNum, setFavouritesNum}) => {
    window.scrollTo(0, 0)    

    const [chooseFilter, setChooseFilter] = useState(0);

  return (
    <div className="productListContainer">
        <Navbar />
        <Announcement />
        <h1 className="productListTitle">Dresses</h1>
        <div className="filterContainer">
            <div className="filter">
                <span className="filterText">Filter Products</span>
                <select className="productListSelect">
                    <option disabled selected>Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
                <select className="productListSelect">
                    <option disabled selected>Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
            <div className="filter">
                <span className="filterText">Sort Products</span>
                <select className="productListSelect">
                    <option selected>Newest</option>
                    <option onClick={() => setChooseFilter('asc')}>Price (asc)</option>
                    <option onClick={() => setChooseFilter('des')}>Price (des)</option>
                </select>
            </div>
        </div>
        <Products popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} singleProductItem={singleProductItem} setSingleProductItem={setSingleProductItem} chooseFilter={chooseFilter} setChooseFilter={setChooseFilter}/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList