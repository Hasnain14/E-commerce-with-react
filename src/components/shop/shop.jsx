
import { useState, useEffect } from "react";
import "./shop.css"
import data from "../../products.json"
import Product from "../product/product";
import Cart from "../cart/cart";
import { useProductStore } from "../../store/productStore";

const Shop = () => {
    const { searchKey } = useProductStore();
    const [product, SetProduct] = useState(data.slice(10))
    const [cart, setCart] = useState([]);

    // console.log(searchKey);

    useEffect(() => {
        if (searchKey === '') {
            SetProduct(product);
        } else {
            const filter_data = data?.filter((product) =>
                product.name.toLowerCase().includes(searchKey.toLowerCase()));

            SetProduct(filter_data);
        }
    }, [searchKey])


    const handleAddProduct = (addedProduct) => {
        // console.log(addedProduct);
        const newCart = [...cart, addedProduct];
        setCart(newCart);
    }
    // console.log(product)
    return (
        <div className="shop_container">
            <div className="product_show">
                {product.map(pr =>

                    <Product
                        handleAddProduct={handleAddProduct}
                        product={pr}
                        key={product.key} />

                )}
            </div>

            <div className="cart">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;