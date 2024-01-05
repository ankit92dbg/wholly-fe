import React from "react";
import Link from "next/link"
import { useEffect, useState } from "react";
import { server,imagePath } from "../../config/index";

const Footer = () => {
    const [banner, setBanner] = useState({});

    useEffect(() => {
        fetchBanner();
    }, []);

    const fetchBanner = async () => {
        const request = await fetch(`${server}/api/index.php?action=banner_list`);
        const getBanner = await request.json();
        setBanner(getBanner);
    };

    return (
        <>
            <footer className="main">
           
            <div className="featured section-padding">
                              <div className="row padding-0">
                              {Object.keys(banner).length > 0 && (
                                <a target="_blank" href={`${banner.otherBanner.banner_bottom_link_2}`}>
                                  <img src={`${imagePath}${banner.otherBanner.banner_bottom_2}`} style={{width: '100%',height: '300px'}} alt="" />
                                </a>
                              )}
                              </div>
                            </div>
                
                <section className="featured  section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-1.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Best prices & offers
                                        </h3>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-2.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Free delivery
                                        </h3>
                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-3.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Great daily deal
                                        </h3>
                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-4.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Wide assortment
                                        </h3>
                                        <p>Mega Discounts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-5.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Easy returns
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </section>
                            
                            
                            <section className="featured  section-padding">
                            <div className="container">
                              <div className="row ">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-6.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Safe delivery
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid">
                <div className="container">
  <div className="row">
    <div className="col-md-4 col-sm-4 col-lg-2 col-6">
      <div className="footer-widget">
        <span className="custom-h4 column-heading-icon">
          <img
            height={27}
            width={27}
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/quick-links.svg"
            alt="Quick Links"
          />
          Quick Links
        </span>
        <hr className="footer-border" />
        <ul>
          <li>
            <a href="/page-about" title="About Us">
              About Us
            </a>
          </li>
          <li>
            <a href="/page-contact" title="Contact Us">
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/page-privacy-policy"
              title="Privacy Policy"
            >
             Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/page-terms"
              title="/page-terms"
            >
             Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="" title="Sitemap">
              Sitemap
            </a>
          </li>
          <li>
            <a href="#" title="Track Order">
              Track Order
            </a>
          </li>
          
          <li>
            <a
              href="/shipping-policy"
              title="Shipping Policy"
            >
              Shipping Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Micro Influencer"
            >
              Micro Influencer
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 col-sm-4 col-lg-2 col-6">
      <div className="footer-widget">
        <span className="custom-h4 column-heading-icon">
          <img
            height={27}
            width={27}
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/ubuy-important-links.svg"
            alt="Ubuy"
          />
          Wholly
        </span>
        <hr className="footer-border" />
        <ul>
          <li>
            <a
              href="#"
              title="Brands List"
            >
              Brands List
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Customer Reviews"
            >
              Customer Reviews
            </a>
          </li>
          <li>
            <a
              href="/Returnpolicy"
              title="Return Policy"
            >
              Return Policy
            </a>
          </li>
          <li>
            <a href="#" title="Careers">
              Careers
            </a>
          </li>
          <li>
            <a target="_blank" href="#" title="Blog">
              Blog
            </a>
          </li>
          <li>
            <a href="#" title="FAQ">
              FAQ
            </a>
          </li>
         
        </ul>
      </div>
    </div>
    {/*colm-end*/}
    <div className="col-md-4 col-sm-4 col-lg-2 col-6">
      <div className="footer-widget footer-without-anchor payment-icons">
        <span className="custom-h4 column-heading-icon">
          <img
            height={27}
            width={27}
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/payment-links.svg"
            alt="Payment"
          />
          Payment
        </span>
        <hr className="footer-border" />
        <ul>
          <li className="">
            <img
              width={45}
              height={30}
              alt="Paypal payment"
              title="Paypal"
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/homebanner/payment_methods-158997744021.png"
              defer="defer"
              longdesc=""
              style={{ margin: "0 0 0 -7px" }}
            />{" "}
            Paypal
          </li>
          <li className="">
            <img
              width={45}
              height={30}
              alt="Visa payment"
              title="Visa"
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/homebanner/payment_methods-159064539994.png"
              defer="defer"
              longdesc=""
              style={{ margin: "0 0 0 -7px" }}
            />{" "}
            Visa
          </li>
          <li className="">
            <img
              width={45}
              height={30}
              alt="Mastercard payment"
              title="Mastercard"
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/homebanner/payment_methods-159049393275.png"
              defer="defer"
              longdesc=""
              style={{ margin: "0 0 0 -7px" }}
            />{" "}
            Mastercard
          </li>
          <li className="">
            <img
              width={45}
              height={30}
              alt="American Express payment"
              title="American Express"
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/homebanner/payment_methods-159049550294.png"
              defer="defer"
              longdesc=""
              style={{ margin: "0 0 0 -7px" }}
            />{" "}
            American Express
          </li>
          <li className="">
            <img
              width={45}
              height={30}
              alt="RuPay payment"
              title="RuPay"
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/homebanner/payment_methods-162021036610.png"
              defer="defer"
              longdesc=""
              style={{ margin: "0 0 0 -7px" }}
            />{" "}
            RuPay
          </li>
          <li className="">
            <img
              width={45}
              height={30}
              alt="Net Banking payment"
              title="Net Banking"
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/homebanner/payment_methods-161950834476.png"
              defer="defer"
              longdesc=""
              style={{ margin: "0 0 0 -7px" }}
            />{" "}
            Net Banking
          </li>{" "}
        </ul>
      </div>
    </div>
    {/*colm-end*/}
    <div className="col-md-4 col-sm-4 col-lg-2 col-6">
      <div className="footer-widget footer-area footer-without-anchor">
        <span className="custom-h4 column-heading-icon">
          <img
            height={27}
            width={27}
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/shipping-links.svg"
            alt="Shipping"
          />
          Shipping
        </span>
        <hr className="footer-border" />
        <div className="media shipping-info">
          <img
            className="mr-3"
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/ufulfilled-icon.svg"
            alt="ufulfilled"
            height={20}
            width={36}
          />
          <div className="media-body">
            <ul>
              <li>Express Shipping </li>
              <li>Fast Delivery</li>
            </ul>
          </div>
        </div>
        <div className="media shipping-info">
          <img
            className="mr-3"
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/u-not-fulfilled-icon.svg"
            alt="ufulfilled"
            height={20}
            width={36}
          />
          <div className="media-body">
            <ul>
              <li>Standard Shipping</li>
              <li>10+ Business Days</li>
            </ul>
          </div>
        </div>
      </div>
      {/*Country Selector*/}
    </div>
    {/*colm-end*/}
    <div className="col-md-4 col-sm-4 col-lg-2 col-6">
      <div className="footer-widget">
        <span className="custom-h4 column-heading-icon">
          <img
            height={27}
            width={27}
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/countries-covered-links.svg"
            alt="India"
          />
          Cities Covered{" "}
        </span>
        <hr className="footer-border" />
        <ul>
          <li>
            <a
              href="#"
              title="Mumbai"
            >
              Mumbai
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Delhi"
            >
              Delhi
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Bangalore"
            >
              Bangalore
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Hyderabad"
            >
              Hyderabad
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Ahmedabad"
            >
              Ahmedabad
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Chennai"
            >
              Chennai
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Kolkata"
            >
              Kolkata
            </a>
          </li>
          <li>
            <a
              href="#"
              title="Surat"
            >
              Surat
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/*colm-end*/}
    <div className="col-md-4 col-sm-4 col-lg-2 col-6">
      <div className="footer-widget footer-contant footer-without-anchor">
        <span className="custom-h4 column-heading-icon">
          <img
            height={27}
            width={27}
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/support-links.svg"
            alt="24/7 Support"
          />
          24/7 Support
        </span>
        <hr className="footer-border" />
        <ul>
          <li>
            <div className="customer-support media p-3">
              <img
                className="m-0"
                src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/footer/24-hours.png"
                alt="24/7 support"
                height={21}
                width={21}
              />
              <div className="media-body pl-3">
                <p className="large-font">
                  <a
                    className="font-weight-bold p-0"
                    href="#"
                  >
                    24/7 Customer Support
                  </a>
                </p>
                <p>
                  <a
                    className="mt-2 p-0"
                    href="#"
                  >
                    Get your texts/emails answered in your native language
                  </a>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>Customer Services</li>
          <li>
            <span className="dir-ltr">(+91) 8744991343</span>
          </li>
        </ul>
        <div className="play-icons">
          <span className="app-heading">Download our App</span>
          <div className="play-images d-flex">
            <a
              rel="noopener"
              href="https://apps.apple.com/app/ubuy-mobile/id613084551?utm_source=ubuy&utm_medium=website&utm_campaign=app_install&utm_term=footer_icon"
              target="_blank"
            >
              <img
                width={100}
                height={29}
                src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/app-store-icon.svg"
                alt="App Store"
              />
            </a>
            <a
              rel="noopener"
              href="https://play.google.com/store/apps/details?id=com.ubuy&referrer=utm_source=ubuy&utm_medium=website&utm_term=footer_icon&utm_campaign=app_install"
              target="_blank"
            >
              <img
                width={100}
                height={29}
                src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/play-store-icon.svg"
                alt="Play Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*colm-end*/}
  </div>
  {/*colm-perent*/}

</div>
   
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                &copy; 2021,{" "}
                                <strong className="text-brand">Wholly</strong> - <a href="https://vrcwebsolution.com/" target="_blank">Developed by VRC Websolution</a> <br />
                                All rights reserved
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            {/* <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 6666<span>Working 8:00 - 22:00</span>
                                </p>
                            </div> */}
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                +91-8744991343<span>24/7 Support Center</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <p className="font-sm">
                                Up to 15% discount on your first subscribe
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
