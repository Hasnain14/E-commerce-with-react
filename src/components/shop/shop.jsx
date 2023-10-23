
import React, { useState } from "react";
import "./shop.css"
import data from "../../products.json"
import Product from "../product/product";
import Cart from "../cart/cart";




const Shop = () => {
    const [product, SetProduct] = useState(data.slice(0,10))
    const [cart, setCart] = useState([]);

    const handleAddProduct = (addedProduct) => {
        // console.log(addedProduct);
        const newCart = [...cart, addedProduct];
        setCart(newCart);
    }

// console.log(product)
    return (
       <div className="shop_container">
         <div className="product_show">
            {product.map(pr  => 
               
                <Product
                    handleAddProduct = {handleAddProduct} 
                    product = {pr}/>
               
            )}
        </div>

        <div className="cart">
            <Cart cart = {cart} />
        </div>
       </div>
    );
};

export default Shop;