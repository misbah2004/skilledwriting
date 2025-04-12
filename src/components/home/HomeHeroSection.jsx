import React from 'react'
import { FaArrowCircleRight, FaPlay } from 'react-icons/fa'

const HomeHeroSection = ({service}) => {

  return (
    <>
  {/* Hero Section Start */}
  <div className="hero parallaxie">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          {/* Hero Content Start */}
          <div className="hero-content">
            {/* Section Title Start */}
            <div className="section-title dark-section">
              {/* <h3 className="wow fadeInUp">Welcome To Online skilled writing</h3> */}
              <h1
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                {service?.page_title || "Welcome To Online skilled writing"}
              </h1>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
              Looking for the ideal place to get academic Writing? Welcome to the Online Dissertation Writingers! Dissertations, essays, skilled, or we are here to assist you everywhere. If you are one of the anxious students and want to score the best grades in your exams, contact us now!
              </p>
            </div>
            {/* Section Title End */}
            {/* Hero Content Body Start */}
            <div
              className="hero-content-body wow fadeInUp"
              data-wow-delay="0.6s"
            >
              {/* Hero Button Start */}
              <div className="hero-btn">
                <a href="#" className="btn-default btn-highlighted">
                  GET IN TOUCH
                </a>
              </div>
              {/* Hero Button End */}
              {/* Video Play Button Start */}
              {/* <div className="video-play-button">
                <a
                  href="#"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <FaPlay/>
                </a>
                <h3>Play video</h3>
              </div> */}
              {/* Video Play Button End */}
            </div>
            {/* Hero Content Body End */}
          </div>
          {/* Hero Content End */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End */}



    </>
  )
}

export default HomeHeroSection
