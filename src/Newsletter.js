import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
  return (
    <div className="newsContainer">
        <h1 className="newsTitle">Newsletter</h1>
        <div className="newsDesc">Get Timely updates from your favourite products.</div>
        <div className="newsInputContainer">
            <input className="newsInput" placeholder="Your email"/>
            <button className="newsButton">
                <FontAwesomeIcon icon={faPaperPlane} className="faPaperPlane" />
            </button>
        </div>
    </div>
  )
}

export default Newsletter