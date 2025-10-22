import React from 'react';
import Slider from 'react-slick';
import './CustomerTestimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Akanksha Khanna',
    age: 27,
    city: 'Delhi',
    feedback: 'Delighted with my engagement ring! Fits perfectly and looks stunning.',
    image: '/customer1.webp',
  },
  {
    name: 'Diksha Singh',
    age: 29,
    city: 'Mumbai',
    feedback: 'BlueStone\'s service was amazing, and the delivery was super quick.',
    image: '/customer2.webp',
  },
  {
    name: 'Nutan Mishra',
    age: 33,
    city: 'Kolkata',
    feedback: 'I bought a Nazariya for my baby boy. Looks cute and feels safe.',
    image: '/customer3.webp',
  },
  {
    name: 'Divya Mishra',
    age: 26,
    city: 'Bangalore',
    feedback: 'My husband gifted me a necklace, and I haven’t taken it off since!',
    image: '/customer4.webp',
  },
];

function CustomerTestimonials() {
  const settings = {
  dots: false,
  infinite: true,
  speed: 20000,         // slower, smooth continuous scroll
  slidesToShow: 2,      // number of slides visible
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,     // continuous
  cssEase: 'linear',
  arrows: false,
  pauseOnHover: false,  // continuous even if hovered
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};


  return (
    <section className="testimonials-section" id='Reviews'>
      <h2 className="section-title">What Our Customers Say</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((t, index) => (
          <div className="testimonial-slide" key={index}>
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{t.feedback}"</p>
              <div className="testimonial-author">
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <div>
                  <span className="author-name">{t.name}</span>
                  <span className="author-details">{t.age}, {t.city}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CustomerTestimonials;
