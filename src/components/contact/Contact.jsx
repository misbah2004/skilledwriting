import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
   <>
  {/* Page Header Start */}
  <div className="page-header parallaxie">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          {/* Page Header Box Start */}
          <div className="page-header-box">
            <h1 className="wow fadeInUp" data-cursor="-opaque">
              Contact us
            </h1>
            {/* <nav className="wow fadeInUp" data-wow-delay="0.2s">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index-2.html">home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  contact us
                </li>
              </ol>
            </nav> */}
          </div>
          {/* Page Header Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Page Contact Us Start */}
  <div className="page-contact-us">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          {/* <div className="section-title">
            <h3 className="wow fadeInUp">contact us</h3>
            <h2
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Do you have questions? <span>ask us anytime</span>
            </h2>
          </div> */}
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Page Contact Box Start */}
          <div className="page-contact-box parallaxie">
            {/* Contact Info List Start */}
            <div className="contact-info-list">
              {/* Contact Info Item Start */}
              <div className="contact-info-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/icon-phone-accent.svg" alt="" />
                </div>
                <div className="contact-info-content">
                  <h3>UK Call And whatsapp</h3>
                  <p>
                    <a href="tel:+44 7554405359">+91-123 456 789</a>
                  </p>
                  {/* <p>
                    <a href="tel:+91123456789">+91-123 456 789</a>
                  </p> */}
                </div>
              </div>
              {/* Contact Info Item End */}
              {/* Contact Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-box">
                  <img src="/assets/images/icon-mail-accent.svg" alt="" />
                </div>
                <div className="contact-info-content">
                  <h3>e-mail us</h3>
                  <p>
                    <a href="mailto:info@skilledwriting.co.uk">
                    info@skilledwriting.co.uk
                    </a>
                  </p>
                  {/* <p>
                    <a href="mailto:domainname@gmail.com">
                      domainname@gmail.com
                    </a>
                  </p> */}
                </div>
              </div>
              {/* Contact Info Item End */}
              {/* Contact Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                <img src="/assets/images/icon-phone-accent.svg" alt="" />
                </div>
                <div className="contact-info-content">
                  <h3>Whatsapp Chat</h3>
                  <p>
                    <a href="tel:+447471095853">+447471095853</a>
                  </p>
                  {/* <p>
                    <a href="tel:+91123456789">+91-123 456 789</a>
                  </p> */}
                </div>
              </div>
              {/* Contact Info Item End */}
            </div>
            {/* Contact Info List End */}
            <div className="contact-us-form">
              {/* Section Title Start */}
              <div className="section-title dark-section wow fadeInUp">
                <h2 className="wow fadeInUp" data-cursor="-opaque">
                Get A Quote
                </h2>
              </div>
              {/* Section Title End */}
              <div className="member-contact-form contact-form">
                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="First name"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Last name"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Your Phone No."
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your E-mail"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={4}
                        placeholder="Write Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn-default btn-highlighted"
                      >
                        <span>GET IN TOUCH</span>
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Page Contact Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Contact Us End */}
</>


  )
}

export default Contact
