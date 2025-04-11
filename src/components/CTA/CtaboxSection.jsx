import React from 'react'

const CtaboxSection = () => {
  return (
    <>
  {/* CTA Box Section Start */}
  <div className="cta-box-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* CTA Box Start */}
          <div className="cta-box">
            {/* CTA Box Content Start */}
            <div className="cta-box-content">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h2 className="wow fadeInUp" data-cursor="-opaque">
                  Protect business, cyber security solution today!
                </h2>
              </div>
              {/* Section Title End */}
              {/* CTA Contact Info Start */}
              <div className="cta-contact-info">
                {/* CTA Contact Item Start */}
                <div className="cta-contact-item">
                  <div className="icon-box">
                    <img src="images/icon-phone.svg" alt="" />
                  </div>
                  <div className="cta-contact-content">
                    <h3>Get contact now</h3>
                    <p>
                      <a href="#">+123 000 000</a>
                    </p>
                  </div>
                </div>
                {/* CTA Contact Item End */}
                {/* CTA Contact Item Start */}
                <div className="cta-contact-item">
                  <div className="icon-box">
                    <img src="images/icon-mail.svg" alt="" />
                  </div>
                  <div className="cta-contact-content">
                    <h3>Sent e-mail</h3>
                    <p>
                      <a href="#">
                        ABc@domainname.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* CTA Contact Item End */}
              </div>
              {/* CTA Contact Info End */}
            </div>
            {/* CTA Box Content End */}
            {/* CTA Box Image Start */}
            <div className="cta-box-image">
              <figure className="image-anime reveal">
                <img src="images/cta-box-image.jpg" alt="" />
              </figure>
            </div>
            {/* CTA Box Image End */}
          </div>
          {/* CTA Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* CTA Box Section End */}
</>


  )
}

export default CtaboxSection
