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
            <img src="/assets/images/logo.png" alt="" width={100} />
            <h3>Subscribe our newsletter:</h3>
            <p>We are a group of skilled Writting Writingers with several years of experience ..</p>
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
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
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
                <a href="#">Skilled Writing</a>
              </li>
              <li>
                <a href="#">Dessertation Writing</a>
              </li>
              <li>
                <a href="#">Eassy Writing</a>
              </li>
              <li>
                <a href="#">Live Sessions</a>
              </li>
              <li>
                <a href="#">Presentation Writting</a>
              </li>
              <li>
                <a href="#">Project Report</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          {/* Footer Links Start */}
          <div className="footer-links">
            <h3>Newsletter</h3>
            <ul>
              {/* <li>
                <a href="#">+000 000 000</a>
              </li>
              <li>
                <a href="#">ABC@domain.com</a>
              </li> */}
              <li>Subscribe to our weekly Newsletter and receive updates via email.</li>
            <h3>We Accept</h3>
            <img src="/assets/images/payment.png" alt="" />
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
              <p>All Rights Reserved by skilledwriting.org 2025</p>
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
