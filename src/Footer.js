import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="footerLeft">
            <h1 className="footerLogo">LAMA.</h1>        
            <p className="footerDesc">There are many variations of passages of Lorem Ipsum available, but
            there majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.</p>
        <div className="footerSocialContainer">
            <div className="socialIcon" style={{backgroundColor: '#3B5999'}}>
                <FaFacebook/>
            </div>
            <div className="socialIcon" style={{backgroundColor: '#E4405F'}}>
                <FaInstagram/>
            </div>
            <div className="socialIcon" style={{backgroundColor: '#55ACEE'}}>
                <FaTwitter/>
            </div>
            <div className="socialIcon" style={{backgroundColor: '#E60023'}}>
                <FaPinterest/>
            </div>
        </div>
        </div>
        <div className="footerCenter">
            <h3 className="footerCenterTitle">Useful Links</h3>
            <ul className="footerList">
                <li className="footerListItems">Home</li>
                <li className="footerListItems">Cart</li>
                <li className="footerListItems">Men's Fashion</li>
                <li className="footerListItems">Women's Fashion</li>
                <li className="footerListItems">Accessories</li>
                <li className="footerListItems">My Account</li>
                <li className="footerListItems">Order Tracking</li>
                <li className="footerListItems">Wishlist</li>
                <li className="footerListItems">Wishlist</li>
                <li className="footerListItems">Terms</li>
            </ul>
        </div>
        <div className="footerRight">
            <h3 className="footerRightTitle">Contact</h3>
            <div className="contactItem" ><FontAwesomeIcon style={{marginRight: '10px'}} icon={faLocationDot} />622 Dixie Path, South Tobinchester 98336</div>
            <div className="contactItem"><FontAwesomeIcon style={{marginRight: '10px'}} icon={faPhone} />+1 234 56 78</div>
            <div className="contactItem"><FontAwesomeIcon style={{marginRight: '10px'}} icon={faEnvelope} />contact@lama.dev</div>
            <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png"></img>
        </div>
    </div>
  )
}

export default Footer