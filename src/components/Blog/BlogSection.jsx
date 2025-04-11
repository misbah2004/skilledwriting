import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const BlogSection = () => {
  return (
    <>
  {/* our Blog Section Start */}
  <div className="our-blog">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">latest post</h3>
            <h2
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Our latest <span>insight blog</span>
            </h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          {/* Post Item Start */}
          <div className="post-item wow fadeInUp">
            {/* Post Featured Image Start*/}
            <div className="post-featured-image">
              <a href="#" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/post-1.jpg" alt="" />
                </figure>
              </a>
            </div>
            {/* Post Featured Image End */}
            {/* post Item Content Start */}
            <div className="post-item-content">
              {/* post Item Body Start */}
              <div className="post-item-body">
                <h2>
                  <a href="#">
                    The Linux Threat You Need to Know
                  </a>
                </h2>
              </div>
              {/* Post Item Body End*/}
              {/* Post Item Button Start*/}
              <div className="post-item-btn">
                <a href="#" className="post-btn">
                  <FaArrowRight/>
                </a>
              </div>
              {/* Post Item Button End*/}
            </div>
            {/* post Item Content End */}
          </div>
          {/* Post Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Post Item Start */}
          <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
            {/* Post Featured Image Start*/}
            <div className="post-featured-image">
              <a href="#" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/post-2.jpg" alt="" />
                </figure>
              </a>
            </div>
            {/* Post Featured Image End */}
            {/* post Item Content Start */}
            <div className="post-item-content">
              {/* post Item Body Start */}
              <div className="post-item-body">
                <h2>
                  <a href="#">
                    Closing Security Gaps with Innovation
                  </a>
                </h2>
              </div>
              {/* Post Item Body End*/}
              {/* Post Item Button Start*/}
              <div className="post-item-btn">
                <a href="#" className="post-btn">
                  <FaArrowRight/>
                </a>
              </div>
              {/* Post Item Button End*/}
            </div>
            {/* post Item Content End */}
          </div>
          {/* Post Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Post Item Start */}
          <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
            {/* Post Featured Image Start*/}
            <div className="post-featured-image">
              <a href="#" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/post-3.jpg" alt="" />
                </figure>
              </a>
            </div>
            {/* Post Featured Image End */}
            {/* post Item Content Start */}
            <div className="post-item-content">
              {/* post Item Body Start */}
              <div className="post-item-body">
                <h2>
                  <a href="#">
                    BianLian Focuses on Data Extortion
                  </a>
                </h2>
              </div>
              {/* Post Item Body End*/}
              {/* Post Item Button Start*/}
              <div className="post-item-btn">
                <a href="#" className="post-btn">
                 <FaArrowRight/>
                </a>
              </div>
              {/* Post Item Button End*/}
            </div>
            {/* post Item Content End */}
          </div>
          {/* Post Item End */}
        </div>
      </div>
    </div>
  </div>
  {/* our Blog Section End */}
</>

  )
}

export default BlogSection
