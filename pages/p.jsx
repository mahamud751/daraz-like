/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React, { useState } from 'react'
import useScript from '../components/ReloadJs';
import axios from 'axios'
import Slider from '../components/Slider'
function SliderHome({ data }) {
  useScript("/assets/js/main.min.js");
  return (

    <div>
      <Slider />


      <div>
        {/* End of .intro-section */}
        <div className="container shop-default-category category-ellipse-section mb-6">
          <h2 className="title title-center mb-5">POPULAR CATEGORY</h2>
          <div className="swiper-container swiper-theme shadow-swiper swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" data-swiper-options="{
                      'spaceBetween': 100,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '480': {
                              'slidesPerView': 3
                          },
                          '576': {
                              'slidesPerView': 4
                          },
                          '768': {
                              'slidesPerView': 6
                          },
                          '992': {
                              'slidesPerView': 7
                          },
                          '1200': {
                              'slidesPerView': 8,
                              'spaceBetween': 30
                          }
                      }
                  }">
            <div className="swiper-wrapper " id="swiper-wrapper-0be81e55dad9ab3b" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>


              {data.map((item, index) => (
                <div className="swiper-slide category-wrap" role="group" aria-label="4 / 8" style={{ width: 190, marginRight: 100 }} key={index}>
                  <Link href="/category/[categoryId]" as={`/category/${item._id}`} key={index}>
                    <div className="category category-ellipse">

                      <figure className="category-media">
                        <a href="/category/[categoryId]" as={`/category/${item._id}`}>
                          <img src={item.img} alt="Categroy" style={{ backgroundColor: '#4E5B63', width: '190px', height: "190px" }} />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">{item.name}</a>
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}


            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" style={{ display: 'block' }}><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 4" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 5" /></div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
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


    </div>
  )
}

export default SliderHome

export async function getServerSideProps() {
  const { data } = await axios.get("https://guarded-garden-69209.herokuapp.com/categoryWithProducts");

  return {
    props: {
      data,
    },
  };
}