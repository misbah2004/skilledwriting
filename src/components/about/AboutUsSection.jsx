import React from 'react'

const AboutUsSection = () => {
  return (
      <>
  {/* About Us Section Start */}
  <div className="about-us">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          {/* About Us Image Start */}
          <div className="about-us-image">
            {/* About Image Box Start */}
            <div className="about-image-box about-img-1">
              <figure className="image-anime ">
                <img src="/assets/images/about-image-1.jpg" alt="" />
              </figure>
            </div>
            {/* About Image Box End */}
            {/* About Image Box Start */}
            <div className="about-image-box">
              <div className="about-img-2">
                <figure className="image-anime ">
                  <img src="/assets/images/about-image-2.jpg" alt="" />
                </figure>
              </div>
              <div className="about-img-3">
                <figure className="image-anime ">
                  <img src="/assets/images/about-image-3.jpg" alt="" />
                </figure>
              </div>
            </div>
            {/* About Image Box Start */}
            {/* Get Free Security Circle Start */}
            <div className="get-free-security-circle">
              <a href="#">
                <img src="/assets/images/get-free-security-circle.svg" alt="" />
              </a>
            </div>
            {/* Get Free Security Circle End */}
          </div>
          {/* About Us Image End */}
        </div>
        <div className="col-lg-6">
          {/* About Us Content Start */}
          <div className="about-us-content">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">about us</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Your trusted partner in our{" "}
                <span>cyber security solutions</span>
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                {" "}
                We provide reliable, cutting-edge cybersecurity solutions to
                protect your digital assets, ensuring safety and peace of mind.
              </p>
            </div>
            {/* Section Title End */}
            {/* About Us Body Start */}
            <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
              {/* About Us Body Image Start */}
              <div className="about-us-body-img">
                <figure className="image-anime">
                  <img src="/assets/images/about-body-img.png" alt="" />
                </figure>
              </div>
              {/* About Us Body Image End */}
              {/* About Us Body Content Start */}
              <div className="about-us-body-content">
                <h3>24/7 aecurity assistance</h3>
                <p>
                  Real-time support for all cybersecurity concerns, including
                  breach response, threat detection, guidance.
                </p>
              </div>
              {/* About Us Body Content End */}
            </div>
            {/* About Us Body End */}
            {/* About Us Footer Start */}
            <div className="about-us-footer wow fadeInUp" data-wow-delay="0.8s">
              {/* About Footer List Start */}
              <div className="about-footer-list">
                <ul>
                  <li>Threat Detection and Monitoring</li>
                  <li>Access Control Management</li>
                  <li>Security Awareness Training</li>
                </ul>
              </div>
              {/* About Footer List End */}
              {/* About Footer Content Start */}
              <div className="about-footer-content">
                {/* About Content Button Start */}
                <div className="about-contact-btn">
                  <div className="icon-box">
                    <img src="/assets/images/icon-phone.svg" alt="" />
                  </div>
                  <div className="about-footer-btn-content">
                    <h3>
                      <a href="#">+92 000 000 000</a>
                    </h3>
                  </div>
                </div>
                {/* About Content Button End */}
                {/* About Footer Button Start */}
                <div className="about-footer-btn">
                  <a href="#" className="btn-default">
                    more about
                  </a>
                </div>
                {/* About Footer Button End */}
              </div>
              {/* About Footer Content End */}
            </div>
            {/* About Us Footer End */}
          </div>
          {/* About Us Content End */}
        </div>
      </div>
    </div>
  </div>
  {/* About Us Section End */}
</>


  )
}

export default AboutUsSection
