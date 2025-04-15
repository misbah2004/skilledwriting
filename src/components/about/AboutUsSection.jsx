import React from 'react';

const AboutUsSection = ({ service }) => {
  const pageTitle = service?.page_title || 'Dissertation Help';
  const statistics = service?.statistics;
  const contentSections = service?.content_sections;

  return (
    <div className="our-security">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-security-content">
              <div className="section-title">
                {/* <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  <span>{pageTitle}</span>
                </h2> */}
              </div>

              {/* Statistics Section */}
              {statistics && (
                <div className="row mb-5">
                  {Object.entries(statistics).map(([key, value], index) => (
                    <div className="col-md-3 col-sm-6 mb-3" key={index}>
                      <div className="stat-box p-3 text-center border rounded shadow-sm h-100">
                        <h4 className="mb-1">{value}</h4>
                        <p className="mb-0">{key}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Content Sections */}
              <div className="security-content-box">
                {contentSections ? (
                  contentSections.map((section, idx) => (
                    <div
                      className="security-content-item wow fadeInUp mb-4"
                      data-wow-delay={`${0.3 + idx * 0.2}s`}
                      key={idx}
                    >
                      <h4>{section.title}</h4>

                      {Array.isArray(section.description) ? (
                        <ul className="ps-3">
                          {section.description.map((item, i) => (
                            <li className='mb-2 mt-2' key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{section.description}</p>
                      )}
                    </div>
                  ))
                ) : (
                  // fallback static content
                  <>
                    <div className="security-content-item wow fadeInUp mb-4">
                      <h4>Why Choose Skilled Writing for Your Dissertation?</h4>
                      <p>We help you with everything from topic selection to final editing...</p>
                    </div>
                    <div className="security-content-item wow fadeInUp mb-4">
                      <h4>Subjects We Cover</h4>
                      <p>Business, Nursing, Engineering, Law, and many more...</p>
                    </div>
                    <div className="security-content-item wow fadeInUp mb-4">
                      <h4>Let’s Help You Succeed</h4>
                      <p>We deliver academic excellence with top-rated expert support...</p>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
