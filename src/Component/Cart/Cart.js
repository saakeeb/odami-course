import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, sum)=> total + sum.balance , 0).toFixed(2);
    return (
        <div className='text-center m-3'>
            <p>Course Order: {cart.length}</p>
            <p>Total Cost: ${total}</p>
        </div>
    );
};

export default Cart;