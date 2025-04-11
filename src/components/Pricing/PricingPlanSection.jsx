import React from 'react'

const PricingPlanSection = () => {
  return (
    <div>
      <>
  {/* Our Pricing Section Start */}
  <div className="our-pricing">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">pricing plan</h3>
            <h2
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Affordable cyber security <span>plans for every need</span>
            </h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          {/* Pricing Box Start */}
          <div className="pricing-item wow fadeInUp">
            {/* Pricing Header Start */}
            <div className="pricing-header">
              <h3>Basic plan</h3>
              <h2>
                <sup>$</sup>29<sub>/per month</sub>
              </h2>
              <p>Essential protection for digital safety.</p>
              <div className="icon-box">
                <img src="/assets/images/icon-pricing-1.svg" alt="" />
              </div>
            </div>
            {/* Pricing Header End */}
            {/* Pricing Body Start */}
            <div className="pricing-body">
              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>Anti-virus protection service</li>
                  <li>Reliable personal data protection</li>
                  <li>Advertisements blocking</li>
                  <li>1 device using</li>
                </ul>
              </div>
              {/* Pricing List End */}
              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <a href="#" className="btn-default">
                  get started
                </a>
              </div>
              {/* Pricing Button End */}
            </div>
            {/* Pricing Body End */}
          </div>
          {/* Pricing Box End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Pricing Box Start */}
          <div
            className="pricing-item highlighted-box wow fadeInUp"
            data-wow-delay="0.2s"
          >
            {/* Pricing Header Start */}
            <div className="pricing-header">
              <h3>Standard plan</h3>
              <h2>
                <sup>$</sup>39<sub>/per month</sub>
              </h2>
              <p>Essential protection for digital safety.</p>
              <div className="icon-box">
                <img src="/assets/images/icon-pricing-2.svg" alt="" />
              </div>
            </div>
            {/* Pricing Header End */}
            {/* Pricing Body Start */}
            <div className="pricing-body">
              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>Anti-virus protection service</li>
                  <li>Reliable personal data protection</li>
                  <li>Advertisements blocking</li>
                  <li>1 device using</li>
                </ul>
              </div>
              {/* Pricing List End */}
              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <a href="#" className="btn-default btn-highlighted">
                  get started
                </a>
              </div>
              {/* Pricing Button End */}
            </div>
            {/* Pricing Body End */}
          </div>
          {/* Pricing Box End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Pricing Box Start */}
          <div className="pricing-item wow fadeInUp" data-wow-delay="0.4s">
            {/* Pricing Header Start */}
            <div className="pricing-header">
              <h3>Premium plan</h3>
              <h2>
                <sup>$</sup>49<sub>/per month</sub>
              </h2>
              <p>Essential protection for digital safety.</p>
              <div className="icon-box">
                <img src="/assets/images/icon-pricing-3.svg" alt="" />
              </div>
            </div>
            {/* Pricing Header End */}
            {/* Pricing Body Start */}
            <div className="pricing-body">
              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>Anti-virus protection service</li>
                  <li>Reliable personal data protection</li>
                  <li>Advertisements blocking</li>
                  <li>1 device using</li>
                </ul>
              </div>
              {/* Pricing List End */}
              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <a href="#" className="btn-default">
                  get started
                </a>
              </div>
              {/* Pricing Button End */}
            </div>
            {/* Pricing Body End */}
          </div>
          {/* Pricing Box End */}
        </div>
        <div className="col-lg-12">
          {/* Pricing Benifit List Start */}
          <div
            className="pricing-benefit-list wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <ul>
              <li>
                <img src="/assets/images/icon-pricing-benefit-1.svg" alt="" />
                Get 30 day free trial
              </li>
              <li>
                <img src="/assets/images/icon-pricing-benefit-2.svg" alt="" />
                No any hidden fees pay
              </li>
              <li>
                <img src="/assets/images/icon-pricing-benefit-3.svg" alt="" />
                You can cancel anytime{" "}
              </li>
            </ul>
          </div>
          {/* Pricing Benifit List End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Pricing Section End */}
</>

    </div>
  )
}

export default PricingPlanSection
