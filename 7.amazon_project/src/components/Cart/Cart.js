import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price,0);

    let shipping = 0;
    if(totalPrice > 800){
        shipping = 0;
    }else if(totalPrice > 350){
        shipping = 4.99;
    }else if(totalPrice > 0){
        shipping = 12.55;
    }

    const tax = Math.round(totalPrice / 15);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shiping fee cost: {shipping}</small></p>
            <p><small>Tax(15%): {tax}</small></p>
            <p>Total Price : {totalPrice + shipping + tax}</p>
        </div>
    );
};

export default Cart;