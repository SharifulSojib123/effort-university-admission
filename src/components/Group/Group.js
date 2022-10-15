import React from 'react';
import { NavLink } from 'react-router-dom';
import './Group.css';


const Group = (props) => {
    const { advisorName, img, unit, Quiz, modelTest, Class, courseFee, } = props.group;

    return (
        <div className='group'>
            <h2>{unit}</h2>

            <img src={img} alt="" />
            <h4>Advisor-Name:{advisorName}</h4>
            <h5>Class: {Class}</h5>
            <h5>Quiz: {Quiz}</h5>
            <h5>Model-Test: {modelTest}</h5>
            <h4>Course-Fee: {courseFee}</h4>
            <NavLink className='add-cart' to="/services">Click for Services</NavLink>


        </div>
    );
};

export default Group;