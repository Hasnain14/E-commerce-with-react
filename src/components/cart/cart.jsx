import React from 'react';
import "./cart.css";

const Cart = (props) => {

    const cart = props.cart;
    // console.log(cart);

    const totalPrice = cart.reduce((subTotal,product) => subTotal + product.price , 0);
    const shipping = cart.reduce((shipping,product) => shipping + product.shipping , 0);

    let totaCost = totalPrice + shipping;

    const fixNumber = (num) => num.toFixed(2);
    

    return (
        <div className="cart">
            <h4 className="heading_cart">Order Summary</h4>
            <br />
            <h5>Items Add: {cart.length}</h5>
            <h5>Product Cost: {fixNumber(totalPrice)}</h5>
            <h5>Shipping Cost: {fixNumber(shipping)}</h5>
            <h5 className="total_cost">Total Cost: {fixNumber(totaCost)}</h5>
           
        </div>
    );
};

export default Cart;