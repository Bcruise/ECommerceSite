import React from 'react';
import {categories} from './data.js'
import CategoryItem from './CategoryItem.js';


const Categories = ({popularProductsArray, setPopularProductsArray}) => {
  return (
    <div className="categoriesContainer">
        {categories.map(item => {
          return (
        <>
            <CategoryItem item={item} popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray}/>
        </>
        )})}
    </div>
  )
}

export default Categories