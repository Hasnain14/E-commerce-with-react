
import "./product.css"
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ product, handleAddProduct }) => {
    return (
        <div className="products">
            <div className="product_image">
                <img src={product.img} alt="" />
            </div>

            <div className="product">
                <h3>{product.name}</h3>
                <br />
                <h4>By: {product.seller}</h4>
                <br />
                <p>{"$" + product.price}</p>
                <br />
                <h5>only {product.stock} left in stock</h5>
                <br />
                <button 
                    className="cart_button" 
                    onClick={() => handleAddProduct(product)}> <FaShoppingCart /> Add to cart</button>


            </div>

        </div>
    );
};

export default Product;