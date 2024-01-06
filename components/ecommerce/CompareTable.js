import Link from "next/link";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { handleFilterImage } from "../../config/index";

const CompareTable = ({ data, features, deleteFromCompare, addToCart }) => {
 
    

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
    return (
        <table className="table text-center">
            <tbody>
                {features.map((feature) => (
                    <tr>
                        <th
                            className="text-muted font-md fw-600"
                            style={{ textTransform: "capitalize" }}
                        >
                            {feature}
                        </th>
                        {data.map((product) =>
                            feature == "preview" ? (
                                <td className="row_img">
                                    <img src={handleFilterImage(product)} />
                                </td>
                            ) : feature == "name" ? (
                                <td className="product_name">
                                    <h5>
                                        <a href="#">{product.title}</a>
                                    </h5>
                                </td>
                            ) : feature == "price" ? (
                                <td className="product_price">
                                    <span className="price">Rs. {(product.variants.length > 0) ? product.variants[0].variant_sale_price : "" }</span>
                                </td>
                            ) : feature == "rating" ? (
                                <td>
                                    <div className="rating_wrap">
                                        {product.review >= 0 && (
                                            <>
                                                <div className="product-rate d-inline-block">
                                                    <div
                                                        className="product-rating"
                                                        style={{
                                                            width: `${product.review.aggregateReview.rating_percent}%`,
                                                        }}
                                                    ></div>
                                                </div>

                                                <span className="rating_num">
                                                    ({product.review})
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </td>
                            ) : feature == "description" ? (
                                <td className="row_text font-xs">
                                   <div dangerouslySetInnerHTML={{
                                                        __html: product.description
                                                      }}></div>
                                </td>                
                            ) : feature == "description" ? (
                                <td className="row_text font-xs">
                                   <div dangerouslySetInnerHTML={{
                                                        __html: product.description
                                                      }}></div>
                                </td>                
                            ) : feature == "color" ? (
                                <td className="row_text font-xs">
                                   <div dangerouslySetInnerHTML={{
                                                        __html: product.description
                                                      }}></div>
                                </td>                
                            ) : feature == "stock" ? (
                                <td className="row_stock">
                                  <ul className="list-filter color-filter">
                                        {Object.keys(product).length > 0 && product.variants.map((clr, i) => (
                                            <li key={i}>
                                                <a href="javascript:void(0)">
                                                    <span style={{ background: clr.variant_color }}></span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            ) : feature == "weight" ? (
                                <td className="row_weight">
                                    {product.variants[0].variant_weight} gram
                                </td>
                            ) : feature == "dimensions" ? (
                                <td className="row_dimensions">
                                    <ul>
                                        <li>
                                            <p>Length : {product.variants[0].variant_length}mm</p>
                                        </li>
                                        <li>
                                            <p>Width : {product.variants[0].variant_width}mm</p>
                                        </li>
                                        <li>
                                            <p>Height : {product.variants[0].variant_height}mm</p>
                                        </li>
                                    </ul>
                                </td>
                            ) : feature == "buy" ? (
                                <td className="row_btn">
                                    {product.variants[0].variant_total_stock >= 0 ? (
                                        <button
                                            className="btn  btn-sm"
                                            onClick={(e) => handleCart(product)}
                                        >
                                            <i className="fi-rs-shopping-bag mr-5"></i>
                                            Add to cart
                                        </button>
                                    ) : (
                                        <Link href="/contact">
                                        <button className="btn  btn-sm btn-secondary">
                                            <i className="fi-rs-headset mr-5"></i>
                                            Contact Us
                                        </button>
                                        </Link>
                                        
                                    )}
                                </td>
                            ) : feature == " " ? (
                                <td className="row_remove">
                                    <a
                                        onClick={() =>
                                            deleteFromCompare(product.id)
                                        }
                                    >
                                        <i className="fi-rs-trash mr-5"></i>
                                        <span>Remove</span>
                                    </a>
                                </td>
                            ) : null
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const mapDispatchToProps = {
    addToCart,
};

export default connect(null, mapDispatchToProps)(CompareTable);
