import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa";
import { servicesData } from "../../../public/assets/js/servicesdata";
import { Link } from "react-router";

const Header = () => {
  const [show , setShow]=useState(false)
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src="/assets/images/logo.png" alt="Logo" />
              </Link>

              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item ">
                      <Link className="nav-link" to="/">
                        Home 
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link className="nav-link" to="#">
                        Services <FaChevronDown />
                      </Link>
                      <ul className="mega-dropdown">
                        {Object.keys(servicesData).map((title) => (
                          <li className="nav-item" key={title}>
                            <Link
                              className="nav-link"
                              to={`/services/${title}`}
                            >
                              {title}
                            </Link>
                          </li>
                        ))}

                        {/* You can add more items here */}
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Header Btn Start */}
                <div className="header-btn">
                  <Link
                    to="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org%22"
                    className="btn-default"
                  >
                    Whatsapp
                    <FaWhatsapp />
                  </Link>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle">
                <Link
                  to="#"
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                  onClick={()=>setShow(!show)}
                  className={show ? "slicknav_btn slicknav_open" :"slicknav_btn slicknav_collapsed"}
                  style={{ outline: "none" }}
                >
                  <span className="slicknav_menutxt" />
                  <span className="slicknav_icon slicknav_no-text">
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                  </span>
                </Link>
              </div>
            </div>
          </nav>
          <div className="responsive-menu">
            <div className="slicknav_menu">
              <ul
                className="slicknav_nav slicknav_hidden"
                aria-hidden="true"
                role="menu"
                style={{  display: show ? '': "none" }}
              >
                <li className="nav-item submenu slicknav_collapsed slicknav_parent">
                  <Link
                    to="#"
                    role="menuitem"
                    aria-haspopup="true"
                    tabIndex={-1}
                    className="slicknav_item slicknav_row"
                    style={{ outline: "none" }}
                  />
                  <Link className="nav-link" to="/" tabIndex={-1}>
                    Home
                  </Link>
                  <span className="slicknav_arrow">►</span>
                  <ul
                    role="menu"
                    className="slicknav_hidden"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Home - Image
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Home - Video
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Home - Slider
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to=""
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item submenu slicknav_collapsed slicknav_parent">
                  <Link
                    to="#"
                    role="menuitem"
                    aria-haspopup="true"
                    tabIndex={-1}
                    className="slicknav_item slicknav_row"
                    style={{ outline: "none" }}
                  />
                  {/* <Link  className="nav-link" to="#" tabIndex={-1}>
                    Pages
                  </Link>  */}
                  {/* <span className="slicknav_arrow">►</span> */}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Contact Us
                  </Link>
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
