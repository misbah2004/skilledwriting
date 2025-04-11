import React from 'react'
import { FaFacebookF, FaInstagram, FaPaperPlane, FaPinterestP } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
  {/* Main Footer Section Start */}
  <footer className="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Footer Header Start */}
          <div className="footer-header">
            {/* Footer Logo Start */}
            <div className="footer-logo">
              <img src="images/footer-logo.svg" alt="" />
            </div>
            {/* Footer Logo End */}
            {/* Footer Social Links Start */}
            <div className="footer-social-links">
              <ul>
                <li>
                  <a href="#">
                    <FaPinterestP/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaXTwitter/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebookF/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram/>
                  </a>
                </li>
              </ul>
            </div>
            {/* Footer Social Links End */}
          </div>
          {/* Footer Header End */}
        </div>
        <div className="col-lg-4">
          {/* Footer Newsletter Form Start */}
          <div className="footer-links footer-newsletter-form">
            <h3>Subscribe our newsletter:</h3>
            <p>Protecting networks, systems data from evolving. </p>
            <form id="newsletterForm" action="#" method="POST">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="mail"
                  placeholder="Enter Your Email"
                  required=""
                />
                <button type="submit" className="newsletter-btn">
                  <FaPaperPlane/>
                </button>
              </div>
            </form>
          </div>
          {/* Footer Newsletter Form End */}
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          {/* Footer Links Start */}
          <div className="footer-links footer-quick-links">
            <h3>Quick link</h3>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          {/* Footer Links Start */}
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Threat detection</a>
              </li>
              <li>
                <a href="#">Endpoint security</a>
              </li>
              <li>
                <a href="#">Network defense</a>
              </li>
              <li>
                <a href="#">Data encryption</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          {/* Footer Links Start */}
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Term's &amp; condition </a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          {/* Footer Links Start */}
          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#">+000 000 000</a>
              </li>
              <li>
                <a href="#">ABC@domain.com</a>
              </li>
              <li>123 High Street LN1 1AB United Kingdom</li>
            </ul>
          </div>
          {/* Footer Links End */}
        </div>
      </div>
    </div>
    {/* Footer Copyright Start */}
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Footer Copyright Text Start */}
            <div className="footer-copyright-text">
              <p>Copyright © 2025 All Rights Reserved.</p>
            </div>
            {/* Footer Copyright Text End */}
          </div>
        </div>
      </div>
    </div>
    {/* Footer Copyright End */}
  </footer>
  {/* Main Footer Section End */}
</>

  )
}

export default Footer
