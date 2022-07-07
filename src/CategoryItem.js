import React from 'react';
import { Link } from 'react-router-dom';


const CategoryItem = ({item, popularProductsArray, setPopularProductsArray}) => {
  return (
    <div className="categoryItemContainer">
      <img className="categoryItemImage" src={item.img} alt={item.title}></img>
      <div className="categoryItemInfo">
        <h1 className="categoryItemTitle">{item.title}</h1>
        <Link to="/ProductList" popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} ><button className="categoryItemButton">SHOP NOW</button></Link>
      </div>
    </div>
  )
}

export default CategoryItem