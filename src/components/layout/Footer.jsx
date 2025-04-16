import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaPinterestP } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

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
                {/* <li>
                  <a href="">
                    <FaPinterestP/>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/company/ezaconsultancy90/">
                    <FaLinkedinIn/>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/people/Eza-Consultancy/61560131918581/?mibextid=LQQJ4d">
                    <FaFacebookF/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_skilledwriting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
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
            <form id="newsletterForm" action="javascript:void(0);" method="POST">
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/faqs">FAQ</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
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
                <a href="/services/skilled%20writing">Skilled Writing</a>
              </li>
              <li>
                <a href="/services/Dissertation%20Writing">Dessertation Writing</a>
              </li>
              <li>
                <a href="/services/Essay%20Writing">Eassy Writing</a>
              </li>
              <li>
                <a href="/services/Live%20Sessions">Live Sessions</a>
              </li>
              <li>
                <a href="/services/Presentation%20Writing">Presentation Writting</a>
              </li>
              <li>
                <a href="/services/Project%20Report%20Writing">Project Report</a>
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
