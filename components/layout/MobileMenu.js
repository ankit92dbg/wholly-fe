import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../util/outsideClick";


const MobileMenu = ({ isToggled, toggleClick }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/logo.jpeg"
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Search for items…"
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <div className="main-categori-wrap mobile-header-border">
                                <Link href="#">
                                    <a className="categori-button-active-2">
                                        <span className="fi-rs-apps"></span> Browse
                                        Categories
                                    </a>
                                </Link>
                                <div className="categori-dropdown-wrap categori-dropdown-active-small">
                                    <ul>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-dress"></i>
                                                    Women's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-tshirt"></i>
                                                    Men's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-smartphone"></i>{" "}
                                                    Cellphones
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-desktop"></i>
                                                    Computer & Office
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-cpu"></i>
                                                    Consumer Electronics
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-home"></i>
                                                    Home & Garden
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-high-heels"></i>
                                                    Shoes
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-teddy-bear"></i>
                                                    Mother & Kids
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-kite"></i>
                                                    Outdoor fun
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    <li
                                        className={
                                            isActive.key == 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(1)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="/index">
                                            <a>Home</a>
                                        </Link>
                                        
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 2
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(2)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                       <Link href="/products">
                                            <a>shop</a>
                                        </Link>
                                       
                                    </li>
                                   <li>
                                   <Link href="/products">
                                            <a>About Us</a>
                                        </Link>
                                   </li>
                                   <li>
                                   <Link href="/products">
                                            <a>Blog</a>
                                        </Link>
                                   </li>
                                   <li>
                                   <Link href="/products">
                                            <a>Contact Us</a>
                                        </Link>
                                   </li>
                                   
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <Link href="/page-contact">
                                    <a> Our location </a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="/page-login-register">
                                    <a>Log In / Sign Up </a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#">
                                    <a>(+01) - 2345 - 6789 </a>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Follow Us</h5>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
