import Layout from "../components/layout/Layout";

function About() {
    return (
        <>
            <Layout title={"About Us"} parent="Home" sub="Pages" subChild="About">
            <div className="container  pt-50">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <section className="row align-items-center mb-50">
                                <div className="col-lg-6">
                                    <img src="/assets/imgs/page/about-1.png" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-25">
                                        <h2 className="mb-30">Welcome to Wholly</h2>
                                        <p className="mb-25">Welcome to Wholly - Your Ultimate Online Shopping Destination!</p>
                                        <p className="mb-50">At Wholly, we believe in the transformative power of online shopping. In a world where convenience meets quality, we strive to redefine your shopping experience by curating a diverse selection of products that resonate with your lifestyle.</p>
                                        <h2 className="mb-30">What Sets Us Apart:</h2>
                                        <ol>
                                            <li ><b style={{ fontWeight: 'bold',fontSize:'16px',color:'#000' }}>Curated Selection:</b> Every product on Wholly is handpicked to ensure quality, style, and functionality.</li>
                                            <li><b style={{ fontWeight: 'bold',fontSize:'16px',color:'#000' }}>User-Friendly Experience:</b> Our website is designed with you in mind, making your shopping journey smooth and enjoyable.</li>
                                            <li><b style={{ fontWeight: 'bold',fontSize:'16px',color:'#000' }}>Secure Transactions:</b> Shop with confidence knowing that your transactions are safe and secure.</li>
                                            <li><b style={{ fontWeight: 'bold',fontSize:'16px',color:'#000' }}>Customer-Centric Approach:</b> Your satisfaction is our priority. Our customer support team is here to assist you every step of the way.</li>
                                        </ol>
                                    </div>
                                </div>
                            </section>
                            {/* <section className="text-center mb-50">
                                <h2 className="title style-3 mb-40">What We Provide?</h2>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-1.svg" alt="" />
                                            <h4>Best Prices & Offers</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />
                                            <h4>Wide Assortment</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />
                                            <h4>Free Delivery</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-4.svg" alt="" />
                                            <h4>Easy Returns</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-5.svg" alt="" />
                                            <h4>100% Satisfaction</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-6.svg" alt="" />
                                            <h4>Great Daily Deal</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </section> */}
                            {/* <section className="row align-items-center mb-50">
                                <div className="row mb-50 align-items-center">
                                    <div className="col-lg-7 pr-30">
                                        <img src="/assets/imgs/page/about-5.png" alt="" className="mb-md-3 mb-lg-0 mb-sm-4" />
                                    </div>
                                    <div className="col-lg-5">
                                        <h4 className="mb-20 text-muted">Our performance</h4>
                                        <h1 className="heading-1 mb-40">Your Partner for e-commerce grocery solution</h1>
                                        <p className="mb-30">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                                        <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                                        <h3 className="mb-30">Who we are</h3>
                                        <p>Wholly is not just an ecommerce platform; we are a team of passionate individuals dedicated to bringing you the best of the digital marketplace. Our commitment to excellence is reflected in every aspect of our website, from the user-friendly interface to the carefully curated product catalog.</p>
                                    </div>
                                    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                                        <h3 className="mb-30">Our history</h3>
                                        <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <h3 className="mb-30">Our mission</h3>
                                        <p>To empower your everyday life by providing a seamless and enjoyable online shopping journey. We aim to be your go-to destination for a wide array of products, from the latest trends to timeless classics.</p>
                                    </div>
                                </div>
                            </section> */}
                        </div>
                    </div>
                </div>
                {/* <section className="container mb-50 d-none d-md-block">
                    <div className="row about-count">
                        <div className="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
                            <h1 className="heading-1"><span className="count">12</span>+</h1>
                            <h4>Glorious years</h4>
                        </div>
                        <div className="col-lg-1-5 col-md-6 text-center">
                            <h1 className="heading-1"><span className="count">36</span>+</h1>
                            <h4>Happy clients</h4>
                        </div>
                        <div className="col-lg-1-5 col-md-6 text-center">
                            <h1 className="heading-1"><span className="count">58</span>+</h1>
                            <h4>Projects complete</h4>
                        </div>
                        <div className="col-lg-1-5 col-md-6 text-center">
                            <h1 className="heading-1"><span className="count">24</span>+</h1>
                            <h4>Team advisor</h4>
                        </div>
                        <div className="col-lg-1-5 text-center d-none d-lg-block">
                            <h1 className="heading-1"><span className="count">26</span>+</h1>
                            <h4>Products Sale</h4>
                        </div>
                    </div>
                </section> */}
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <section className="mb-50">
                                <h2 className="title style-3 mb-40 text-center">Our Team</h2>
                                <div className="row">
                                    <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                                        <h6 className="mb-5 text-brand">Our Team</h6>
                                        <h1 className="mb-30">Meet Our Expert Team</h1>
                                        <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                                        <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                                        <a href="#" className="btn">View All Members</a>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-card">
                                                    <img src="/assets/imgs/page/about-6.png" alt="" />
                                                    <div className="content text-center">
                                                        <h4 className="mb-5">H. Merinda</h4>
                                                        <span>CEO & Co-Founder</span>
                                                        <div className="social-network mt-20">
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-card">
                                                    <img src="/assets/imgs/page/about-8.png" alt="" />
                                                    <div className="content text-center">
                                                        <h4 className="mb-5">Dilan Specter</h4>
                                                        <span>Head Engineer</span>
                                                        <div className="social-network mt-20">
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>
                                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div> */}
            </Layout>
        </>
    );
}

export default About;
