import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const TeamSection = () => {
  return (
    <>
  {/* Our Team Section Start */}
  <div className="our-team">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title dark-section">
            <h3 className="wow fadeInUp">Expert team</h3>
            <h2
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Our expert team member
            </h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          {/* Team Item Start */}
          <div className="team-item wow fadeInUp">
            {/* Team Image Start */}
            <div className="team-image">
              <a href="#" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/team-1.jpg" alt="" />
                </figure>
              </a>
              {/* Team Social Icon Start */}
              <div className="team-social-icon">
                <ul>
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
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Team Social Icon End */}
            </div>
            {/* Team Image End */}
            {/* Team Content Start */}
            <div className="team-content">
              <h3>
                <a href="#">michael johnson</a>
              </h3>
              <p>security officer</p>
            </div>
            {/* Team Content End */}
          </div>
          {/* Team Item End */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Team Item Start */}
          <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
            {/* Team Image Start */}
            <div className="team-image">
              <a href="#" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/team-2.jpg" alt="" />
                </figure>
              </a>
              {/* Team Social Icon Start */}
              <div className="team-social-icon">
                <ul>
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
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Team Social Icon End */}
            </div>
            {/* Team Image End */}
            {/* Team Content Start */}
            <div className="team-content">
              <h3>
                <a href="#">sophia carter</a>
              </h3>
              <p>cybersecurity analyst</p>
            </div>
            {/* Team Content End */}
          </div>
          {/* Team Item End */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Team Item Start */}
          <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
            {/* Team Image Start */}
            <div className="team-image">
              <a href="#" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/team-3.jpg" alt="" />
                </figure>
              </a>
              {/* Team Social Icon Start */}
              <div className="team-social-icon">
                <ul>
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
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Team Social Icon End */}
            </div>
            {/* Team Image End */}
            {/* Team Content Start */}
            <div className="team-content">
              <h3>
                <a href="#">michael brown</a>
              </h3>
              <p>incident response</p>
            </div>
            {/* Team Content End */}
          </div>
          {/* Team Item End */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Team Item Start */}
          <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
            {/* Team Image Start */}
            <div className="team-image">
              <a href="#" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/team-4.jpg" alt="" />
                </figure>
              </a>
              {/* Team Social Icon Start */}
              <div className="team-social-icon">
                <ul>
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
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Team Social Icon End */}
            </div>
            {/* Team Image End */}
            {/* Team Content Start */}
            <div className="team-content">
              <h3>
                <a href="#">isabella moore</a>
              </h3>
              <p>security awareness</p>
            </div>
            {/* Team Content End */}
          </div>
          {/* Team Item End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Team Section End */}
</>

  )
}

export default TeamSection
