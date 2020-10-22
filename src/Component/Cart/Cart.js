import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, sum)=> total + sum.balance , 0).toFixed(2);
    return (
        <div className='text-center m-3'>
            <h4>Order Summary</h4>
            <h5>Course Order: {cart.length}</h5>
            <h6>Total Cost: ${total}</h6>
        </div>
    );
};

export default Cart;