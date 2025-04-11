import React from "react";
import { FaArrowAltCircleRight, FaChevronDown, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <a className="navbar-brand" href="index-2.html">
                <img src="/assets/images/logo.png" alt="Logo" />
              </a>
              {/* Logo End */}
              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item ">
                      <a className="nav-link" href="index-2.html">
                        Home <FaChevronDown/>
                      </a>
                      {/* <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="index.html">
                            Home - Image
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index-video.html">
                            Home - Video
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index-slider.html">
                            Home - Slider
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About Us
                      </a>
                    </li> */}
                    {/* <li className="nav-item">
                      <a className="nav-link" href="services.html">
                        Services
                      </a>
                    </li> */}
                    <li className="nav-item ">
                      <a className="nav-link" href="#">
                        services <FaChevronDown/>
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="service-single.html">
                            Service Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="blog-single.html">
                            Blog Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="projects.html">
                            Projects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="project-single.html">
                            Project Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="team.html">
                            Our Team
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="team-single.html">
                            Team Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pricing.html">
                            Pricing
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="testimonials.html">
                            Testimonials
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="image-gallery.html">
                            Image Gallery
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="video-gallery.html">
                            Video Gallery
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="faqs.html">
                            FAQs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Header Btn Start */}
                <div className="header-btn">
                  <a href="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org%22" className="btn-default">
                    Whatsapp
                    <FaWhatsapp/>
                  </a>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle">
                <a
                  href="#"
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                  className="slicknav_btn slicknav_collapsed"
                  style={{ outline: "none" }}
                >
                  <span className="slicknav_menutxt" />
                  <span className="slicknav_icon slicknav_no-text">
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                  </span>
                </a>
              </div>
            </div>
          </nav>
          <div className="responsive-menu">
            <div className="slicknav_menu">
              <ul
                className="slicknav_nav slicknav_hidden"
                aria-hidden="true"
                role="menu"
                style={{ display: "none" }}
              >
                <li className="nav-item submenu slicknav_collapsed slicknav_parent">
                  <a
                    href="#"
                    role="menuitem"
                    aria-haspopup="true"
                    tabIndex={-1}
                    className="slicknav_item slicknav_row"
                    style={{ outline: "none" }}
                  />
                  <a className="nav-link" href="index-2.html" tabIndex={-1}>
                    Home
                  </a>
                  <span className="slicknav_arrow">►</span>
                  <ul
                    role="menu"
                    className="slicknav_hidden"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="index.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Home - Image
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="index-video.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Home - Video
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="index-slider.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Home - Slider
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    href="about.html"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    About Us
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="services.html"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="blog.html"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item submenu slicknav_collapsed slicknav_parent">
                  <a
                    href="#"
                    role="menuitem"
                    aria-haspopup="true"
                    tabIndex={-1}
                    className="slicknav_item slicknav_row"
                    style={{ outline: "none" }}
                  />
                  <a className="nav-link" href="#" tabIndex={-1}>
                    Pages
                  </a>
                  <span className="slicknav_arrow">►</span>
                  <ul
                    role="menu"
                    className="slicknav_hidden"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="service-single.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Service Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="blog-single.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Blog Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="projects.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="project-single.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Project Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="team.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Our Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="team-single.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Team Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pricing.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="testimonials.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="image-gallery.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Image Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="video-gallery.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Video Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="faqs.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="404.html"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        404
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="contact.html"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
