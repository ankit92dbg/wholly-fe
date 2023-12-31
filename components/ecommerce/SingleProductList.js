import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import { handleFilterImage } from "../../config/index";


const SingleProductList = ({
    product,
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
}) => {
    const handleCart = (product) => {
        // product.selectedVariant = product.variants[0]
        // product.description = ""
        // addToCart(product);
        // toast("Product added to Cart !");
        if(Number(product.variants[0].variant_total_stock) >= Number(product.variants[0].variant_minimum_order_qty) && product.variants[0].stock_status=="in_stock"){
            product.selectedVariant = product.variants[0]
            product.description = ""
            product.quantity = Number(product.variants[0].variant_minimum_order_qty)
            addToCart(product);
            toast("Product added to Cart !");
        }else if(product.variants[0].stock_status=="on_back_order"){
            product.selectedVariant = product.variants[0]
            product.description = ""
            product.quantity = Number(product.variants[0].variant_minimum_order_qty)
            addToCart(product);
            toast("Product added to Cart !");
        }else{
            toast("Product is out of stock !");
        }
    };

    const handleCompare = (product) => {
        addToCompare(product);
        toast("Added to Compare list !");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast("Added to Wishlist !");
    };

    return (
        <>
            <div className="product-list mb-30">
                <div className="product-cart-wrap">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <div className="product-img-inner">
                                <Link
                                    href="/[id]"
                                    as={`/${product.pr_id}`}
                                >
                                    <a>
                                        <img
                                            className="default-img"
                                            src={handleFilterImage(product)}
                                            style={{width:'100%',height:'170px'}}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={(product.img.length > 1) ? imagePath+product.img[1].path : ""}
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="product-action-1">
                            <a
                                aria-label="Quick view"
                                className="action-btn hover-up"
                                data-bs-toggle="modal"
                                // data-bs-target="#quickViewModal"
                                onClick={(e) => openQuickView(product)}
                            >
                                <i className="fi-rs-eye"></i>
                            </a>
                            <a
                                aria-label="Add To Wishlist"
                                className="action-btn hover-up"
                                onClick={(e) => handleWishlist(product)}
                            >
                                <i className="fi-rs-heart"></i>
                            </a>
                            <a
                                aria-label="Compare"
                                className="action-btn hover-up"
                                onClick={(e) => handleCompare(product)}
                            >
                                <i className="fi-rs-shuffle"></i>
                            </a>
                        </div>

                        <div className="product-badges product-badges-position product-badges-mrg">
                            {product.trending && (
                                <span className="hot">Hot</span>
                            )}
                            {product.created && (
                                <span className="new">New</span>
                            )}
                            {product.totalSell > 100 && (
                                <span className="best">Best Sell</span>
                            )}
                            {product.discount.isActive && (
                                <span className="sale">Sale</span>
                            )}
                            {(product.variants.length > 0) ? product.variants[0].discount : ""  >= 5 && (
                                <span className="hot">
                                    {(product.variants.length > 0) ? product.variants[0].discount : "" }%
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <div className="product-category">
                            <Link href="/products">
                                <a>{product.brand}</a>
                            </Link>
                        </div>
                        <h2>
                            <Link
                                href="/[id]"
                                as={`/${product.id}`}
                            >
                                <a>{product.title}</a>
                            </Link>
                        </h2>
                        <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                                <div
                                    className="product-rating"
                                    style={{ width: "90%" }}
                                ></div>
                            </div>
                            <span className="font-small ml-5 text-muted">
                                {" "}
                                (4.0)
                            </span>
                            <span className="ml-30">500g</span>
                        </div>
                        <p className="mt-15 mb-15">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam beatae consectetur, atque inventore
                            aliquam adipisci perspiciatis nostrum qui
                            consequatur praesentium?
                        </p>

                        <div className="product-price">
                            <span>Rs. {(product.variants.length > 0) ? product.variants[0].variant_sale_price : "" } </span>
                            <span className="old-price">{product.oldPrice && `Rs. ${product.oldPrice}`}</span>
                        </div>

                        <p className="mt-15">{product.desc}</p>

                        <div className="mt-30 d-flex align-items-center">
                            <a
                                aria-label="Add To Cart"
                                className="btn"
                                onClick={(e) => handleCart(product)}
                            >
                                <i className="fi-rs-shopping-bag-add"></i>
                                Add to Cart
                            </a>
                            <a
                                onClick={(e) => handleCompare(product)}
                                className="add-wishlish ml-30 text-body font-sm font-heading font-weight-bold"
                            >
                                <i className="fi-rs-shuffle mr-5"></i>Add Compare
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

const mapDispatchToProps = {
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleProductList);
