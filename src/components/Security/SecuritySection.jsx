import React from 'react'

const SecuritySection = () => {
  return (
    <>
  {/* Our Security Section Start */}
  <div className="our-security">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {/* Our Security Content Start */}
          <div className="our-security-content">
            {/* Section Title Start */}
            <div className="section-title">
              {/* <h3 className="wow fadeInUp">Our security</h3> */}
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Book Your Personal Experts Now!
              </h2>
            </div>
            {/* Section Title End */}
            {/* Security Content Box Start */}
            <div className="security-content-box">
              {/* Security Content Item Start */}
              <div
                className="security-content-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3>Send us your message and hire your Experts within a few minutes! Place your order and get 25% off today!</h3>
                {/* <p>
                  Real-Time Threat Monitoring continuously analyzes network
                  traffic, user behavior, and system activity to detect and
                  respond to potential potentials security threats threats as
                  they occur.
                </p> */}
              </div>
              <div className="about-footer-btn">
                  <a href="#" className="btn-default">
                    Book Now
                  </a>
                </div>
              {/* Security Content Item End */}
              {/* Security Content Item Start */}
              <div
                className="security-content-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                {/* <h3>compliance and risk management:</h3> */}
                {/* <p>
                  compliance &amp; risk management continuously analyzes network
                  traffic, user behavior, and system activity to detect and
                  respond to potential potentials security threats threats as
                  they occur.
                </p> */}
              </div>
              {/* Security Content Item End */}
            </div>
            {/* Security Content Box End */}
          </div>
          {/* Our Security Content End */}
        </div>
        <div className="col-lg-6">
          {/* Our Security Image Content Start */}
          <div className="our-security-image-content">
            {/* Security Image Start */}
            <div className="security-image order-lg-1 order-2">
              <figure className="image-anime ">
                <img src="/assets/images/bookyourapointmint.png" alt="" />
              </figure>
            </div>
            {/* Security Image End */}
            {/* Security Content Item Start */}

            {/* Security List Item End */}
          </div>
          {/* Security List End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Security Section End */}
</>


  )
}

export default SecuritySection
