import React from 'react'
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaPhone, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaT, FaXTwitter } from 'react-icons/fa6'

const Topbar = () => {
  return (
    <div>
      <>
  {/* Topbar Section Start */}
  <div className="topbar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="topbar-info-text">
            <p>
              We are always ready to protect your data{" "}
              <a href="/">Contact now</a>
            </p>
          </div>
        </div>
        <div className="col-md-5">
          {/* Topbar Social Links Start */}
          <div className="topbar-links">
            {/* Topbar Contact Information Start */}
            <div className="topbar-contact-info">
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="https://skilledwriting.co.uk/contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* Topbar Contact Information End */}
            {/* Topbar Social Links Start */}
            <div className="topbar-social-links">
              <ul>
                <li>
                  <a href="mailto:info@skilledwriting.co.uk">

                    <FaEnvelope/>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org">
                    <FaPhone/>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+447471095853?text=Referral%20link%20website%3A%20www.skilledWritings.org">
                    <FaWhatsapp/>
                  </a>
                </li>
              </ul>
            </div>
            {/* Topbar Social Links End */}
          </div>
          {/* Topbar Social Links End */}
        </div>
      </div>
    </div>
  </div>
  {/* Topbar Section End */}
</>

    </div>
  )
}

export default Topbar
