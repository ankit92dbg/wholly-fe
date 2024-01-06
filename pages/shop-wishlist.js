import { connect } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";
import { addToCart } from "../redux/action/cart";
import {
    clearWishlist,
    closeWishlistModal,
    deleteFromWishlist
} from "../redux/action/wishlistAction";

const Wishlist = ({
    wishlist,
    clearWishlist,
    closeWishlistModal,
    deleteFromWishlist,
    addToCart,
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
    return (
        <>
            <Layout title={"Product Wishlist"} parent="Home" sub="Shop" subChild="Wishlist">
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                {wishlist.items.length > 0 ? (
                                    <div className="table-responsive shopping-summery">
                                        <table className="table table-wishlist">
                                            <thead>
                                                <tr className="main-heading">
                                                    <th className="custome-checkbox start pl-30" colSpan="2">
                                                        Product
                                                    </th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">
                                                        Stock Status
                                                    </th>
                                                    <th scope="col">Action</th>
                                                    <th scope="col" className="end">
                                                        Remove
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishlist.items.map(
                                                    (product, i) => (
                                                        <tr className="pt-30" key={i}>
                                                            <td className="image product-thumbnail pt-40">
                                                                <img
                                                                    src={
                                                                        product
                                                                            .img[0]
                                                                            .image_type
                                                                    }
                                                                    alt=""
                                                                    className="img-fluid"
                                                                />
                                                            </td>

                                                            <td className="product-des product-name">
                                                                <h6 className="product-name  mb-10">
                                                                    <a>
                                                                        {
                                                                            product.title
                                                                        }
                                                                    </a>
                                                                </h6>
                                                                <div className="product-rate-cover">
                                                                    <div className="product-rate d-inline-block">
                                                                        <div
                                                                            className="product-rating"
                                                                            style={{
                                                                                width: "90%",
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                    <span className="font-small ml-5 text-muted">
                                                                        {" "}
                                                                        (4.0)
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="price"
                                                                data-title="Price"
                                                            >
                                                                <h3 className="text-brand">
                                                                    Rs. 
                                                                    {
                                                                        (product.variants.length > 0) ? product.variants[0].variant_sale_price : "" 
                                                                    }
                                                                </h3>
                                                            </td>
                                                            <td
                                                                className="text-center detail-info"
                                                                data-title="Stock"
                                                            >
                                                                {product.variants[0].stock_status ===
                                                                'in_stock' ? (
                                                                   
                                                                    <span className="stock-status in-stock mb-0">
                                                                        In Stock
                                                                    </span>
                                                                ) : (
                                                                    <span className="stock-status out-stock mb-0">
                                                                        Out of
                                                                        stock
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td
                                                                className="text-right"
                                                                data-title="Cart"
                                                            >
                                                                {product.variants[0].variant_total_stock ===
                                                                0 ? (
                                                                    <button className="btn btn-sm btn-secondary">
                                                                        Contact
                                                                        Us
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        className="btn btn-sm"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleCart(
                                                                                product
                                                                            )
                                                                        }
                                                                    >
                                                                        Add to
                                                                        cart
                                                                    </button>
                                                                )}
                                                            </td>
                                                            <td
                                                                className="action"
                                                                data-title="Remove"
                                                            >
                                                                <a
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        deleteFromWishlist(
                                                                            product.pr_id
                                                                        )
                                                                    }
                                                                >
                                                                    <i className="fi-rs-trash"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                        <div className="text-right">
                                            <span
                                                className="clear-btn"
                                                onClick={clearWishlist}
                                            >
                                                Clear All
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <h4 className="mb-0">No Products</h4>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

const mapStateToProps = (state) => ({
    wishlist: state.wishlist,
});

const mapDispatchToProps = {
    closeWishlistModal,
    deleteFromWishlist,
    clearWishlist,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
