
import style from "./header.module.css"

const Header = () => {
    return(
        
            <div className={style.container} >
                <div className={style.top}>
                    <img src="logo.png" alt="Logo" />
                    <input type="text" placeholder="Search For Product" />
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