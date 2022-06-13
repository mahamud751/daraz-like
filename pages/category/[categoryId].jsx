import axios from "axios";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { add_item } from "../../redux/actions/cartAction";

function CategorySingle({ data }) {
  console.log(data);
  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    dispatch(add_item(e));
  };
  return (
    <div className="page-content mb-10">
      <div
        className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6"
        style={{ backgroundImage: "url(assets/images/shop/banner2.jpg)", backgroundColor: "#FFC74E" }}
      >
        <div className="container banner-content">
          <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
          <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-10">Smart Watches</h3>
          <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">
            Discover Now
            <i className="w-icon-long-arrow-right" />
          </a>
        </div>
      </div>
      {/* End of Shop Banner */}
      <div className="container-fluid">
        {/* Start of Shop Content */}
        <div className="shop-content row gutter-lg">
          {/* Start of Sidebar, Shop Sidebar */}
          <aside className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper sidebar-fixed">
            {/* Start of Sidebar Overlay */}
            <div className="sidebar-overlay" />
            <a className="sidebar-close" href="#">
              <i className="close-icon" />
            </a>
            {/* Start of Sidebar Content */}
            <div className="sidebar-content scrollable">
              {/* Start of Sticky Sidebar */}
              <div className="sticky-sidebar">
                <div className="filter-actions">
                  <label>Filter :</label>
                  <a href="#" className="btn btn-dark btn-link filter-clean">
                    Clean All
                  </a>
                </div>
                {/* Start of Collapsible widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>All Categories</label>
                  </h3>
                  <ul className="widget-body filter-items search-ul">
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Babies</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                    <li>
                      <a href="#">Decoration</a>
                    </li>
                    <li>
                      <a href="#">Electronics</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Furniture</a>
                    </li>
                    <li>
                      <a href="#">Kitchen</a>
                    </li>
                    <li>
                      <a href="#">Medical</a>
                    </li>
                    <li>
                      <a href="#">Sports</a>
                    </li>
                    <li>
                      <a href="#">Watches</a>
                    </li>
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>Price</label>
                  </h3>
                  <div className="widget-body">
                    <ul className="filter-items search-ul">
                      <li>
                        <a href="#">$0.00 - $100.00</a>
                      </li>
                      <li>
                        <a href="#">$100.00 - $200.00</a>
                      </li>
                      <li>
                        <a href="#">$200.00 - $300.00</a>
                      </li>
                      <li>
                        <a href="#">$300.00 - $500.00</a>
                      </li>
                      <li>
                        <a href="#">$500.00+</a>
                      </li>
                    </ul>
                    <form className="price-range">
                      <input type="number" name="min_price" className="min_price text-center" placeholder="$min" />
                      <span className="delimiter">-</span>
                      <input type="number" name="max_price" className="max_price text-center" placeholder="$max" />
                      <a href="#" className="btn btn-primary btn-rounded">
                        Go
                      </a>
                    </form>
                  </div>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>Size</label>
                  </h3>
                  <ul className="widget-body filter-items item-check mt-1">
                    <li>
                      <a href="#">Extra Large</a>
                    </li>
                    <li>
                      <a href="#">Large</a>
                    </li>
                    <li>
                      <a href="#">Medium</a>
                    </li>
                    <li>
                      <a href="#">Small</a>
                    </li>
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>Brand</label>
                  </h3>
                  <ul className="widget-body filter-items item-check mt-1">
                    <li>
                      <a href="#">Elegant Auto Group</a>
                    </li>
                    <li>
                      <a href="#">Green Grass</a>
                    </li>
                    <li>
                      <a href="#">Node Js</a>
                    </li>
                    <li>
                      <a href="#">NS8</a>
                    </li>
                    <li>
                      <a href="#">Red</a>
                    </li>
                    <li>
                      <a href="#">Skysuite Tech</a>
                    </li>
                    <li>
                      <a href="#">Sterling</a>
                    </li>
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}

                {/* End of Collapsible Widget */}
              </div>
              {/* End of Sidebar Content */}
            </div>
            {/* End of Sidebar Content */}
          </aside>
          {/* End of Shop Sidebar */}
          {/* Start of Shop Main Content */}
          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
              <div className="toolbox-left">
                <a
                  href="#"
                  className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                        btn-icon-left d-block d-lg-none"
                >
                  <i className="w-icon-category" />
                  <span>Filters</span>
                </a>
                <div className="toolbox-item toolbox-sort select-box text-dark">
                  <label>Sort By :</label>
                  <select name="orderby" className="form-control">
                    <option value="default" selected="selected">
                      Default sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price-low">Sort by pric: low to high</option>
                    <option value="price-high">Sort by price: high to low</option>
                  </select>
                </div>
              </div>
              <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box">
                  <select name="count" className="form-control">
                    <option value={9}>Show 9</option>
                    <option value={12} selected="selected">
                      Show 12
                    </option>
                    <option value={24}>Show 24</option>
                    <option value={36}>Show 36</option>
                  </select>
                </div>
                <div className="toolbox-item toolbox-layout">
                  <a href="shop-both-sidebar.html" className="icon-mode-grid btn-layout active">
                    <i className="w-icon-grid" />
                  </a>
                  <a href="shop-list.html" className="icon-mode-list btn-layout">
                    <i className="w-icon-list" />
                  </a>
                </div>
              </div>
            </nav>
            <div className="product-wrapper row cols-xl-4 cols-lg-3 cols-md-4 cols-sm-3 cols-2">
              {data.products.map((category, index) => (
                <div className="product-wrap" key={index}>
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img src={category.img} alt="Product" style={{ width: "400px", height: "400px" }} />
                      </a>
                      <div className="product-action-horizontal">
                        <Link href={`/productDetails/${category._id}`}>
                          <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" onClick={() => handleAddItem(category)} />
                        </Link>
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist" />
                        <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare" />
                        <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View" />
                      </div>
                    </figure>

                    <div className="product-details">
                      {/* <div className="product-cat">
                        <a href="shop-banner-sidebar.html">{category.category}</a>
                      </div> */}
                      <h3 className="product-name">
                        <a href="product-default.html">{category.name}</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: "100%" }} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="product-default.html" className="rating-reviews">
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">{category.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="toolbox toolbox-pagination justify-content-between">
              <p className="showing-info mb-2 mb-sm-0">
                Showing<span>1-12 of 60</span>Products
              </p>
              <ul className="pagination">
                <li className="prev disabled">
                  <a href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                    <i className="w-icon-long-arrow-left" />
                    Prev
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="next">
                  <a href="#" aria-label="Next">
                    Next
                    <i className="w-icon-long-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End of Shop Main Content */}
          {/* Start of Sidebar, Right-sidebar */}
          <aside className="shop-sidebar right-sidebar sticky-sidebar-wrapper">
            <div className="sidebar-overlay" />
            <a className="sidebar-close" href="#">
              <i className="close-icon" />
            </a>
            <a href="#" className="sidebar-toggle">
              <i className="fas fa-chevron-left" />
            </a>
            <div className="sidebar-content">
              <div className="widget widget-icon-box mb-6">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="w-icon-truck" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title">Free Shipping &amp; Returns</h4>
                    <p>For all orders over $99</p>
                  </div>
                </div>
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="w-icon-bag" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title">Secure Payment</h4>
                    <p>We ensure secure payment</p>
                  </div>
                </div>
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="w-icon-money" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title">Money Back Guarantee</h4>
                    <p>Any back within 30 days</p>
                  </div>
                </div>
              </div>
              {/* End of Widget Icon Box */}
              <div className="widget widget-banner mb-9">
                <div className="banner banner-fixed br-sm">
                  <figure>
                    <img src="assets/images/shop/banner3.jpg" alt="Banner" width={266} height={220} style={{ backgroundColor: "#1D2D44" }} />
                  </figure>
                  <div className="banner-content">
                    <div className="banner-price-info font-weight-bolder text-white lh-1">
                      40<sup className="font-weight-bold">%</sup>
                      <sub className="font-weight-bold text-uppercase">Off</sub>
                    </div>
                    <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">Ultimate Sale</h4>
                  </div>
                </div>
              </div>
              {/* End of Widget Banner */}
              <div className="widget widget-products">
                <h4 className="title title-underline mb-2 font-weight-bold">More Products</h4>
                <div
                  className="swiper-container swiper-theme nav-top"
                  data-swiper-options="{
                        'nav': true,
                        'dots': false,
                        'slidesPerView': 1
                    }"
                >
                  <div className="widget-col">
                    <div className="product product-widget">
                      <figure className="product-media">
                        <a href="#">
                          <img src="assets/images/shop/13.jpg" alt="Product" width={100} height={113} />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">Smart Watch</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: "100%" }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                        </div>
                        <div className="product-price">$80.00-$90.00</div>
                      </div>
                    </div>
                    <div className="product product-widget">
                      <figure className="product-media">
                        <a href="#">
                          <img src="assets/images/shop/14.jpg" alt="Product" width={100} height={113} />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">Sky Medical Facility</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: "80%" }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                        </div>
                        <div className="product-price">$58.00</div>
                      </div>
                    </div>
                    <div className="product product-widget">
                      <figure className="product-media">
                        <a href="#">
                          <img src="assets/images/shop/15.jpg" alt="Product" width={100} height={113} />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">Black Stunt Motor</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: "60%" }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                        </div>
                        <div className="product-price">$374.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-col">
                    <div className="product product-widget">
                      <figure className="product-media">
                        <a href="#">
                          <img src="assets/images/shop/16.jpg" alt="Product" width={100} height={113} />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">Skate Pan</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: "100%" }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                        </div>
                        <div className="product-price">$278.00</div>
                      </div>
                    </div>
                    <div className="product product-widget">
                      <figure className="product-media">
                        <a href="#">
                          <img src="assets/images/shop/17.jpg" alt="Product" width={100} height={113} />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">Modern Cooker</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: "80%" }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                        </div>
                        <div className="product-price">$324.00</div>
                      </div>
                    </div>
                    <div className="product product-widget">
                      <figure className="product-media">
                        <a href="#">
                          <img src="assets/images/shop/18.jpg" alt="Product" width={100} height={113} />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">CT Machine</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: "100%" }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                        </div>
                        <div className="product-price">$236.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        {/* End of Shop Content */}
      </div>
    </div>
  );
}

export default CategorySingle;

export async function getServerSideProps(context) {
  const id = context.params.categoryId;
  const { data } = await axios.get(`https://guarded-garden-69209.herokuapp.com/categoryWithProducts/${id}`);
  return {
    props: { data },
  };
}
