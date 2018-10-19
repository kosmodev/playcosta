import React from "react";
import style from "./header.css";
const Header = () => (
    <header className={style.header} >
        <div className={style.topLine} >
            <div className="container">
                <div className="row">
                    <div className="col-6"><i className="icon-phone"></i><strong>0045 043204434</strong></div>
                    <div className="col-6">
                        <ul id="top_links" className={style.topLinks}>
                            <li className={style.topLinksLi}><a href="#sign-in-dialog" id="access_link">Sign in</a></li>
                            <li className={style.topLinksLi}><a href="wishlist.html" id="wishlist_link">Wishlist</a></li>
                            <li className={style.topLinksLi}><a href="http://themeforest.net/item/citytours-city-tours-tour-tickets-and-guides/10715647?ref=ansonika">Purchase this template</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row">
                
                <div className="col-3">
                    <div id="logo_home">
                    	<h1><a href="index.html" title="City tours travel template">City Tours travel template</a></h1>
                    </div>
                </div>

                <nav className="col-9">
                <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></a>
                    <div className="main-menu">
                        <div id="header_menu">
                        </div>
                        <a href="#" className="open_close" id="close_in"><i className="icon_set_1_icon-77"></i></a>
                        <ul>
                            <li className="submenu">
                                <a href="javascript:void(0);" className="show-submenu">Home <i className="icon-down-open-mini"></i></a>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);" className="show-submenu">Tours <i className="icon-down-open-mini"></i></a>
                            </li>
                             <li className="submenu">
                                <a href="javascript:void(0);" className="show-submenu">Hotels <i className="icon-down-open-mini"></i></a>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);" className="show-submenu">Transfers <i className="icon-down-open-mini"></i></a>
                            </li>
                              <li className="submenu">
                                <a href="javascript:void(0);" className="show-submenu">Restaurants <i className="icon-down-open-mini"></i></a>
                            </li>
                             <li className="megamenu submenu">
                                <a href="javascript:void(0);" className="show-submenu-mega">Bonus<i className="icon-down-open-mini"></i></a>
                            </li>
                            <li className="megamenu submenu">
                                <a href="javascript:void(0);" className="show-submenu-mega">Pages<i className="icon-down-open-mini"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        </div>    

    </header>
)

export default Header;