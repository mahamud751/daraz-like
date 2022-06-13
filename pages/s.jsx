import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

import useScript from '../components/ReloadJs';



export default function Home({ data }) {
    useScript("/assets/js/main.min.js");





    return (
        <div>
            {/* End of .intro-section */}
            <div style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container" style={{ padding: "10px" }}>
                    <section className="vendor-banner-section mb-10 mb-lg-7">
                        <h2 className="title title-center mb-5">POPULAR CATEGORY</h2>
                        <div
                            className="swiper-container swiper-theme show-code-action"
                            data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 1,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 2
                            },
                            '768': {
                                'slidesPerView': 3
                            },
                            '992': {
                                'slidesPerView': 4
                            }
                        }
                    }"
                        >
                            <div className="swiper-wrapper row cols-xl-6 cols-md-3 cols-sm-2 cols-1">
                                {data.map((item, index) => (
                                    <div key={index} className="swiper-slide vendor-widget">
                                        <div className="vendor-widget-banner">
                                            <figure className="vendor-banner">
                                                <Link href="/category/[categoryId]" as={`/category/${item.id}`}>
                                                    <a>
                                                        <img src={item.img} alt="Brand" style={{ objectFit: "fill", height: "85px" }} />
                                                    </a>
                                                </Link>
                                            </figure>
                                            <div className="vendor-details" style={{ backgroundColor: "#E6E6E6" }}>
                                                <figure className="vendor-logo">
                                                    <Link href="/category/[categoryId]" as={`/category/${item.id}`}>
                                                        <a>
                                                            <img src={item.img} style={{ objectFit: "fill", height: "85px" }} />
                                                        </a>
                                                    </Link>
                                                </figure>
                                                <div className="vendor-personal">
                                                    <h4 className="vendor-name">
                                                        <Link href="/category/[categoryId]" as={`/category/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </section>

                    <div
                        className="swiper-container appear-animate  br-sm mt-6 mb-6"
                        data-swiper-options="{
                'slidesPerView': 1,
                'loop': false,
                'breakpoints': {
                    '576': {
                        'slidesPerView': 2
                    },
                    '768': {
                        'slidesPerView': 3
                    },
                    '1200': {
                        'slidesPerView': 4
                    }
                }
            }"
                    >
                        <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
                            <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                                <span className="icon-box-icon icon-shipping">
                                    <i className="w-icon-truck" />
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bold mb-1">Free Shipping &amp; Returns</h4>
                                    <p className="text-default">For all orders over ৳99</p>
                                </div>
                            </div>
                            <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                                <span className="icon-box-icon icon-payment">
                                    <i className="w-icon-bag" />
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bold mb-1">Secure Payment</h4>
                                    <p className="text-default">We ensure secure payment</p>
                                </div>
                            </div>
                            <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
                                <span className="icon-box-icon icon-money">
                                    <i className="w-icon-money" />
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bold mb-1">Money Back Guarantee</h4>
                                    <p className="text-default">Any back within 30 days</p>
                                </div>
                            </div>
                            <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
                                <span className="icon-box-icon icon-chat">
                                    <i className="w-icon-chat" />
                                </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bold mb-1">Customer Support</h4>
                                    <p className="text-default">Call or email us 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: "url(assets/images/agents/BG.jpg)" }}>

                {/* <FlashSales /> */}
                <div className="container pt-3 shadow" style={{ border: "2px solid #FBB959", borderRadius: "25px", marginTop: "120px" }}>
                    <h2 className="title title-underline mb-4 ls-normal appear-animate">FlashSales</h2>
                    <div
                        className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-2"
                        data-swiper-options="{
          'spaceBetween': 20,
          'slidesPerView': 2,
          'breakpoints': {
              '576': {
                  'slidesPerView': 3
              },
              '768': {
                  'slidesPerView': 5
              },
              '992': {
                  'slidesPerView': 6
              },
              '1200': {
                  'slidesPerView': 8
              }
          }
      }"
                    >
                        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
                            {data.map((item, index) => (
                                <div key={index} className="swiper-slide product-wrap mb-0">
                                    <div className="product text-center product-absolute">
                                        <div className="shadow">
                                            <figure className="brand">
                                                <Link href={"/product-details/[productId]"} as={`/product-details/${item.id}`}>
                                                    <a>
                                                        <img src={item.img} alt="Product" style={{ height: "160px", objectFit: "fill" }} />
                                                    </a>
                                                </Link>
                                            </figure>
                                            <Link href={"/product-details/[productId]"} as={`/product-details/${item.id}`}>
                                                <a>
                                                    <h4 className="product-name">{item.name}</h4>
                                                </a>
                                            </Link>


                                            <div className="product-price"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>



                </div>

                <div>




                    {/* Recent Views */}
                    <div className="container">
                        <h2 className="title title-underline mb-4 ls-normal appear-animate">Your Recent Views</h2>
                        <div
                            className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8"
                            data-swiper-options="{
          'spaceBetween': 20,
          'slidesPerView': 2,
          'breakpoints': {
              '576': {
                  'slidesPerView': 3
              },
              '768': {
                  'slidesPerView': 5
              },
              '992': {
                  'slidesPerView': 6
              },
              '1200': {
                  'slidesPerView': 8
              }
          }
      }"
                        >
                            <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
                                {data.map((user, index) => (
                                    <div key={index} className="swiper-slide product-wrap mb-0">
                                        <div className="product text-center product-absolute">
                                            <div className="shadow">
                                                <a href="recent product">
                                                    <figure className="brand">
                                                        <img
                                                            effect="black-and-white"
                                                            src={user.img}
                                                            alt="Product"
                                                            style={{ height: "160px", objectFit: "fill" }}
                                                        />
                                                    </figure>
                                                    <h4 className="product-name">
                                                        <Link href={"/product-details/[productId]"} as={`/product-details/${user.id}`}>
                                                            {user.name}
                                                        </Link>
                                                    </h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Start our client */}
        </div>
    );
}

export async function getServerSideProps() {
    const { data } = await axios.get("https://floating-plateau-70387.herokuapp.com/products");

    return {
        props: {
            data,
        },
    };
}