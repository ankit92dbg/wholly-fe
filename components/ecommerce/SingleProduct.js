import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import { handleFilterImage,imagePath, sort_by } from "../../config/index";

const SingleProduct = ({
    product,
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
}) => {
    const handleCart = (product) => {
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
            <div className="product-cart-wrap mb-30">
            <div className="product-category">
                        <Link href="/products">
                         <a>{product.brand}</a>
                        </Link>
                    </div>
                <div className="product-img-action-wrap">
                    
                    <div className="product-img product-img-zoom">
                        
                        <Link
                            href={`/details/${product.slug}`}
                        >
                            <a>
                                
                                <img
                                    className="default-img"
                                    src={handleFilterImage(product)}
                                    alt=""
                                    style={{width:'100%',height:'170px'}}
                                />
                                <img
                                    className="hover-img"
                                    src={(product.img.length > 1) ? imagePath+product.img[1].path : ""}
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <a
                            aria-label="Quick view"
                            className="action-btn hover-up"
                            data-bs-toggle="modal"
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
                        {product.is_trending_products && <span className="hot">Hot</span>}
                        {/* {product.created && <span className="new">New</span>} */}
                        {/* {product.totalSell > 100 && (
                            <span className="best">Best Sell</span>
                        )} */}
                        {/* {product.discount.isActive && (
                            <span className="sale">Sale</span>
                        )}
                        {(product.variants.length > 0) ? product.variants[0].discount : ""  >= 5 && (
                            <span className="hot">
                                {(product.variants.length > 0) ? product.variants[0].discount : "" }%
                            </span>
                        )} */}
                    </div>
                    <div className="product-badges product-badges-position-right product-badges-mrg">
                         <span className="hot">Upto {product.variants[0].discount}% Off</span>
                       
                    </div>
                </div>
                
                <div className="product-content-wrap">
                    <div className="row">
                        <div className="col-10">
                <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                            <div
                                className="product-rating"
                                style={{ width: `${product.review.aggregateReview.rating_percent}%` }}
                            ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                            {" "}
                            ({product.review.aggregateReview.total_review})
                        </span>
                    </div>
                    <p>Minimum Order Quantity {product.variants[0].variant_minimum_order_qty} </p>
                    <h2>
                        <Link
                             href={`/details/${product.slug}`}
                        >
                            <a>{product.title}</a>
                        </Link>
                    </h2>
                    </div>
                    <div className="col-2">
                    <div className="add-cart">
                                <a
                                    className="add"
                                    onClick={(e) => handleCart(product)}
                                >
                                    <i className="fi-rs-shopping-cart mr-5"></i> {(product.variants[0].variant_total_stock > product.variants[0].variant_minimum_order_qty && product.variants[0].stock_status=="in_stock") ? ""  : (product.variants[0].stock_status=="on_back_order") ? "" : "" }
                                </a>
                        </div>
                    </div>
                    </div>

                    <div>
                        {/* <span className="font-small text-muted">
                            By <Link href="#"><a>{product.vendor.name}</a></Link>
                        </span> */}
                    </div>

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <div className="old-price-old">
                        <span className="old-price">&#8377;{product.variants.length > 0 && `${product.variants[0].variant_regular_price}`}</span></div>
                            <span ><sup>&#8377;</sup><span className="regular-price-pk">{(product.variants.length > 0) ? product.variants[0].variant_sale_price : "" } </span></span>
                           
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <a aria-label="Add To Wishlist" class="action-btn hover-up"><i class="fi-rs-heart"></i></a>
                            </div>
                            <div className="col-6">
                            <a aria-label="Compare" class="action-btn hover-up"><i class="fi-rs-shuffle"></i></a>
                            </div>
                        </div>
                      
                       
                    </div>
                    <p>Fullfiled By Wholly</p>
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

export default connect(null, mapDispatchToProps)(SingleProduct);
