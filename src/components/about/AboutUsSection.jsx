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
