import Link from "next/link";

function Menu() {
  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className={`container main-nav `}>
            <div className="header-left">
              <p className="welcome-msg">Welcome to Korbo Joy Store</p>
            </div>
            <div className="header-right"></div>
          </div>
        </div>

        <div
          className="header-middle"
          style={{
            background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(229,255,250,1) 100%)",
          }}
        >
          <div className="container">
            <div className="header-left mr-md-4">
              <a href="#" className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle"></a>

              <form method="get" action="#" className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper">
                <div className="select-box"></div>
                <input type="text" className="form-control" name="search" id="search" placeholder="Search in..." required />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search" />
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              <div className="header-call d-xs-show d-lg-flex align-items-center">
                <a className="w-icon-call" />
                <div className="call-info d-lg-show">
                  <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                    <a className="text-capitalize">Live Chat</a>
                    or :
                  </h4>
                  <a className="phone-number font-weight-bolder ls-50">+8801837212981</a>
                </div>
              </div>
              {/* <Link href="/wishlist"> */}
              <a className="wishlist label-down link d-xs-show">
                <i className="w-icon-heart" />
                <span className="wishlist-label d-lg-show">Wishlist</span>
              </a>
              {/* </Link> */}
              <a className="compare label-down link d-xs-show">
                <i className="w-icon-compare" />
                <span className="compare-label d-lg-show">Compare</span>
              </a>
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div className="cart-overlay" />
                <a className="cart-toggle label-down link" href="cart">
                  <i className="w-icon-cart">{/* <span className="cart-count">s</span> */}</i>
                  <span className="cart-label">Carts</span>
                </a>
                <div className="dropdown-box">
                  <div className="cart-header">
                    <span>Shopping Cart</span>
                    <a className="btn-close">{/* <i className="w-icon-long-arrow-right" /> */}</a>
                  </div>

                  <div className="products">
                    <hr />
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px" }}>
                      <h5>Subtotal:</h5>
                    </div>

                    <div style={{ display: "flex" }}></div>
                  </div>
                  <div className="cart-total"></div>
                  <div className="cart-action"></div>
                </div>
                {/* End of Dropdown Box */}
              </div>
            </div>
          </div>
        </div>
        {/* End of Header Middle */}
        <div div className="header-bottom sticky-content fix-top sticky-header shadow p-2 mb-5 bg-body rounded" style={{ borderTop: "solid 2px #8A908E" }}>
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div className="dropdown category-dropdown has-border" data-visible="true">
                  <a
                    className="category-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category" />
                    <span>Browse Categories</span>
                  </a>
                  <div className="dropdown-box">
                    <ul className="menu vertical-menu category-menu">
                      <li>
                        <a className="font-weight-bold text-primary text-uppercase ls-25">
                          View All Categories
                          <i className="w-icon-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <nav className="main-nav">
                  <ul className="menu active-underline">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/aboutUs">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contactUs">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mission">
                        <a>Mission & Vission</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/become-a-vendor">Vendor</Link>
                    </li>
                    <li>
                      <Link href="/outlet">
                        <a>Outlet</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <a className="d-xl-show">
                  <i className="w-icon-map-marker mr-1" />
                  Track Order
                </a>
                <a>
                  <i className="w-icon-sale" />
                  Daily Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Menu;
