import React from 'react';
import './Me.css';

const Me = (props) => {
    const { name, Designation, contactNumber, img } = props.me;
    return (
        <div className='me'>


            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <h5>Designation: {Designation}</h5>

            <h5>contactNumber: {contactNumber}</h5>



        </div>
    );
};

export default Me;