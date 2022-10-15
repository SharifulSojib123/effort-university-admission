import React from 'react';

import './Cart.css';

const Cart = (props) => {

    const { cart } = props

    let total = 0;
    let serviceCharge = 0;
    let discount = 0;
    let grandTotal = 0;
    for (const service of cart) {
        total = total + service.courseFee;
        serviceCharge = total / 50;
        discount = total / 20;
        grandTotal = total + serviceCharge - discount;
    }


    return (
        <div>
            <h4 className='title' >CourseOrder</h4>
            <p>Course-Item : {cart.length}</p>
            <h6>Total: {total} tk.</h6>
            <p>Service-charge: {serviceCharge} tk. </p>
            <p>Discount: {discount} tk.</p>
            <h6>Total-cost: {grandTotal} tk.</h6>
            <button className='add-cart'

            >Confirm-Order</button>

        </div>
    );
};

export default Cart;