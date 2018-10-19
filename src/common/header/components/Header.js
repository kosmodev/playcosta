import React from "react";
import style from "./header.css";
const Header = () => (
    <header className={style.header} >
        <div className={style.topLine} >
            <div className="container">
                <div className="row">
                    <div className="col-6"><i className="icon-phone"></i><strong>0045 043204434</strong></div>
                    <div className="col-6">
                        <ul className={style.topLinks}>
                            <li className={style.topLinksLi}><a href="#sign-in-dialog" id="access_link">Sign in</a></li>
                            <li className={style.topLinksLi}><a href="wishlist.html" id="wishlist_link">Wishlist</a></li>
                            <li className={style.topLinksLi}><a href="http://themeforest.net/item/citytours-city-tours-tour-tickets-and-guides/10715647?ref=ansonika">Purchase this template</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    </header>
)

export default Header;