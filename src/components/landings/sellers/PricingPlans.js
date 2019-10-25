import React from 'react';
// import Link from 'next/link';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import '../../../styles/comp-styles/landings/sellers/PricingPlans.scss';

export default function PricingPlans() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    variableWidth: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    arrows: false,
    centerMode: false,
    initialSlide: 1,
    centerPadding: '0',
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="PricingPlans">
      <Slider {...settings}>
        <div style={{ width: 305 }}>
          <section className="PricingCard">
            <div className="PricingCard-title">Enterprise</div>
            <div className="PricingCard-price">
              <span className="ent">Special offer</span>
            </div>
            <div className="PricingCard-priceInfo">
              Please get in touch for special offer
            </div>
            <div className="PricingCard-info">
              <div className="PricingCard-infoItem">Unlimited Products</div>
              <div className="PricingCard-infoItem">
                100 promoted posts / month
              </div>
              <div className="PricingCard-infoItem">100 deals</div>
            </div>
            <div className="PricingCard-link">
              {/*<NavLink href>*/}
              {/*  <a href>Get in touch</a>*/}
              {/*</NavLink>*/}
            </div>
          </section>
        </div>

        <div style={{ width: 305 }}>
          <section className="PricingCard PricingCard--featured">
            <div className="PricingCard-save">Save 30%</div>
            <div className="PricingCard-title">Business</div>
            <div className="PricingCard-price">
              <span>$19</span>
              <span className="type">/m</span>
            </div>
            <div className="PricingCard-priceInfo">Billed as $228 per year</div>
            <div className="PricingCard-info">
              <div className="PricingCard-infoItem">Unlimited Products</div>
              <div className="PricingCard-infoItem">
                <b>30</b>
                promoted posts / month
              </div>
              <div className="PricingCard-infoItem">
                <b>10</b>
                deals
              </div>
              <div className="PricingCard-infoItem">
                <b>10</b>
                featured products
              </div>
            </div>
            <div className="PricingCard-link">
              {/*<NavLink href>*/}
              {/*  <a href>Start free trial</a>*/}
              {/*</NavLink>*/}
            </div>
          </section>
        </div>

        <div style={{ width: 305 }}>
          <section className="PricingCard">
            <div className="PricingCard-title">Individual</div>
            <div className="PricingCard-price">
              <span>$7</span>
              <span className="type">/m</span>
            </div>
            <div className="PricingCard-priceInfo">Billed as $84 per year</div>
            <div className="PricingCard-info">
              <div className="PricingCard-infoItem">10 Products</div>
              <div className="PricingCard-infoItem">
                <b>15</b>
                promoted posts / month
              </div>
              <div className="PricingCard-infoItem">Commision</div>
            </div>
            <div className="PricingCard-link">
              {/*<NavLink href>*/}
              {/*  <a href>Start free trial</a>*/}
              {/*</NavLink>*/}
            </div>
          </section>
        </div>
      </Slider>
    </section>
  );
}
