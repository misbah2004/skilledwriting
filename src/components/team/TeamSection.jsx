import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const universityCards = [
  {
    src: "/assets/images/imageone.jpg",
    title: "Kennesaw State University"
  },
  {
    src: "/assets/images/imagetwo.jpg",
    title: "Duke University"
  },
  {
    src: "/assets/images/imagethree.webp",
    title: "Central Michigan University"
  },
  {
    src: "/assets/images/victoriauni.webp",
    title: "Victoria University"
  },
  {
    src: "/assets/images/notheranuni.jpg",
    title: "Northern Illinois University"
  },
  {
    src: "/assets/images/californiauni.jpg",
    title: "University of California"
  },
  {
    src: "/assets/images/miamiuni.jpg",
    title: "Miami University"
  },
  {
    src: "/assets/images/oxforduni.jpg",
    title: "Oxford University"
  },
  {
    src: "/assets/images/chicagouni.jpg",
    title: "The University of Chicago"
  },
  {
    src: "/assets/images/georgia.webp",
    title: "University of Georgia"
  }
];


const options = {
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  dots: true,
  autoplayTimeout:0,
  autoplayTimeout: 2000, 
  smartSpeed: 800, 
  animateOut: 'linear',
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: false
    }
  }
};

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="container">
        <div className="section-title dark-section text-center">
          <h3>We Are The Most Trusted Tuition Hub In the World.</h3>
          <h2>
            Students with Our Hard Core Efforts Are Now Studying in World’s Top Universities.
          </h2>
          <h3>
            Skilled writing is recognized as the best place to learn and grow. Until now, we have guided countless students to build their careers. Hire us now and shape your career the way you want!
          </h3>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {universityCards?.map((member, index) => (
            <div className="team-item" key={index}>
              <div className="team-image">
                <a href="#">
                  <figure className="image-anime">
                    <img src={member.src} alt={member.title} />
                  </figure>
                </a>
                <div className="team-social-icon">
                </div>
              </div>
              <div className="team-content">
                <h3><a href="#">{member.title}</a></h3>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default OurTeam;
