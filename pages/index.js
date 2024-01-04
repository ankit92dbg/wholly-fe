import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import FeatchTab from "../components/ecommerce/fetchTab";
import FetchTabSlider from "../components/ecommerce/fetchTabSlider";
import Bottom from "../components/elements/Bottom";
import QuickView from "./../components/ecommerce/QuickView";
import Banner5 from "./../components/elements/Banner5";
import Deals1 from "./../components/elements/Deals1";
import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Intro1 from "./../components/sliders/Intro1";
import Link from "next/link";
import { useEffect, useState } from "react";
import { server } from "../config/index";
import { imagePath } from "../config/index";


export default function Home() {
    const [category, setCategory] = useState([]);
    const [banner, setBanner] = useState({});

    useEffect(() => {
        fetchAllCategory();
        fetchBanner();
    }, []);

    const fetchAllCategory = async () => {
        // With Category
        const request = await fetch(`${server}/api/index.php?action=category_list`);
        const allCategory = await request.json();
        setCategory(allCategory);
    };

    const fetchBanner = async () => {
        const request = await fetch(`${server}/api/index.php?action=banner_list`);
        const getBanner = await request.json();
        setBanner(getBanner);
    };

    return (
        <>
            {/* <IntroPopup /> */}

            <Layout title={"Home"} noBreadcrumb="d-none">
                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-30">
                            <Intro1 bannerData={banner} />
                        </div>
                    </div>
                </section>

                <section className="popular-categories section-padding">
                    <div className="container wow animate__fadeIn animate__animated">
                        {/* <div className="section-title">
                            <div className="title">
                                <h3>Featured Categories</h3>
                                <ul className="list-inline nav nav-tabs links">
                                {category.map((cat, i) => (
                                    <li className="list-inline-item nav-item">
                                        <Link href="/products">
                                            <a className="nav-link">{cat.cat_name}</a>
                                        </Link>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div> */}
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns">
                                <CategorySlider catData={category} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banners mb-25">
                    <div className="container">
                        <div className="row">
                            <Banner5 bannerData={banner} />
                        </div>
                    </div>
                </section>

                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="col-lg-12">
                            <CategoryTab />
                        </div>
                    </div>
                </section>

                <section className="section-padding pb-5">
                    <div className="container">
                        <FetchTabSlider bannerData={banner} />
                    </div>
                </section>
                <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            {Object.keys(banner).length > 0 && (
                                <a href={banner.otherBanner.banner_bottom_link} target="_blank">
                                <div style={{
                                    background: `url(${imagePath}${banner.otherBanner.banner_bottom}) no-repeat center bottom`,
                                    backgroundSize: 'cover',
                                    padding: '84px 78px',
                                    clear: 'both',
                                    display: 'table',
                                    width: '100%',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    minHeight: '400px'
                                }}>
                                </div>
                                </a>
                            )}    
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-padding pb-5">
                    <div className="container">
                        <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                            <h3 className="">Deals Of The Day</h3>
                            <Link href="/products">
                                <a className="show-all">
                                    All Deals
                                    <i className="fi-rs-angle-right"></i>
                                </a>
                            </Link>
                        </div>
                        <FeatchDeals />
                    </div>
                </section> */}

                <Bottom />

                <QuickView />
            </Layout>
        </>
    );
}
