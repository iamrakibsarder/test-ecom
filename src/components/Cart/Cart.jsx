import React from 'react';
import './Cart.css';


const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0;

    for(const p of cart){
        total = total + p.price;
    }
    let shippingCharge;
    if(total>1000 || total == 0){
        shippingCharge = 0;
    }
    else{
        shippingCharge = 100;
    }
    const subTotal = shippingCharge + total;
    const tax = subTotal * 0.1;
    const grandTotal = subTotal + tax;
    // console.log(total);

    return (
        <div className='cart-holder'>
            <h3>Order Summary</h3>
            <h5>Selected Items : {cart.length}</h5>
            <h5>Total Price : ${total}</h5>
            <h5>Total Shipping Charge : ${shippingCharge}</h5>
            <h5>Tax : ${tax.toFixed(2)}</h5>
            <h4>Grand Total: $ {grandTotal} </h4>
            <button className='clear-cart'>Clear Cart</button>
            <button className='review-order'>Review Order</button>
        </div>
    );
};

export default Cart;