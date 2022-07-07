import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {sliderItems} from './data.js';
import { Link } from 'react-router-dom';

const Slider = ({popularProductsArray, setPopularProductsArray}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const styles = { 
        transform: `translate(${slideIndex}vw)`,
        transition: 'all 1.5s ease', 
    };

    

    const handleClickLeft = () => {
        if (slideIndex === 0) {
            setSlideIndex(-200);
        } else {
            setSlideIndex(slideIndex + 100);
        }
    }

    const handleClickRight = () => {
        if (slideIndex === -200) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex - 100);
        }
    }



  return (
    <div className="sliderContainer">
        <FontAwesomeIcon icon={faArrowLeft} className="arrow left" onClick={handleClickLeft}/>
        <div className="wrapper" style={styles}>
            {sliderItems.map((item) => (
            <div className="slide" style={{backgroundColor: item.bg}}>
                <div className="imageContainer">
                    <img className="image" src={item.img} alt={item.title} style={{paddingLeft: item.padding}}></img>
                </div>
                <div className="infoContainer">
                    <h1 className="title">{item.title}</h1>
                    <p className="description">{item.desc}</p>
                    <Link to ="/ProductList" popularProductsArray={popularProductsArray} setPopularProductsArray={setPopularProductsArray} ><button className="button" >SHOW NOW</button></Link>
                </div>
            </div>))}
        </div>
        <FontAwesomeIcon icon={faArrowRight} className="arrow right" onClick={handleClickRight}/>
    </div>
  )
}

export default Slider