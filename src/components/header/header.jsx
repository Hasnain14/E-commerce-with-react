
import style from "./header.module.css"
import { useProductStore } from "../../store/productStore";


const Header = () => {

            const {searchKey, setSearchKey} = useProductStore();

            const searchProduct = (e) => {
                setSearchKey(e.target.value);
             };
            //  console.log(searchKey);
   
    return(
            <div className={style.container} >
                <div className={style.top}>
                    <img src="logo.png" alt="Logo" />
                    <input onChange={searchProduct} type="text" placeholder="Search For Product" />
                </div>
                <div className={style.menu}>
                    <a href="shop">Shop</a>
                    <a href="">Order Review</a>
                    <a href="">Manage</a>
                </div>
            </div>
        
    )
}

export default Header;
