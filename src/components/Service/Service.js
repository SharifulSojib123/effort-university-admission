import React from 'react';
import './Service.css';

const Service = (props) => {
    const { advisorName, img, unit, Quiz, modelTest, Class, courseFee, } = props.service;
    const { handleAddToCart } = props;

    return (
        <div className='service'>

            <h2>{unit}</h2>

            <img src={img} alt="" />
            <h4>Advisor-Name:{advisorName}</h4>
            <h5>Class: {Class}</h5>
            <h5>Quiz: {Quiz}</h5>
            <h5>Model-Test: {modelTest}</h5>
            <h4>Course-Fee: {courseFee}</h4>

            <button
                onClick={() => handleAddToCart(props.service)}
                className='add-cart'>
                add to cart
            </button>


        </div>
    );
};

export default Service;