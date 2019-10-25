import React from 'react';
// import Link from 'next/link';
import { Link } from 'react-router-dom';
import PricingPlans from './PricingPlans';
import '../../../styles/comp-styles/landings/sellers/SellersLanding.scss';

import {
  liBoots,
  liBootsCard,
  liCard,
  liChat,
  liChatBg,
  liFunnel,
  liFeedBack,
  liFeedBackBg,
  liFeedcard,
  liFeedcardBg,
  liPrice,
  liValue,
  liSocial,
} from '../../../static/images';

const SellersLanding = () => {
  return (
    <section className="SellersLanding">
      <section className="SellersLanding-hero">
        <div className="SellersLanding-wrapper">
          <div className="SellersLanding-heroInner">
            <div className="SellersLanding-heroContent">
              <h2>Let us bring your buyers to you</h2>
              <p>Middly - where ecommerce meet social network</p>
              {/*TODO Where should went a link?*/}
              <Link to="#">Start a shop</Link>
            </div>
            <div className="SellersLanding-heroImg">
              <img src={liFunnel} width="155" height="245" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="SellersLanding-info">
        <div className="SellersLanding-wrapper">
          <div className="SellersLanding-infoTitle">
            Middly is a perfect marketplace for a passionate entrepreneur like
            you
          </div>
          <div className="SellersLanding-infoInner">
            <div className="SellersLanding-infoCol">
              <div className="SellersLanding-infoName">
                Unique marketing solutions
              </div>
              <div className="SellersLanding-infoText">
                Create posts with instant Buy option. Next time your followers
                see a post - they can buy it right away!
              </div>
            </div>
            <div className="SellersLanding-infoCol">
              <div className="SellersLanding-infoName">
                Supporting local brands
              </div>
              <div className="SellersLanding-infoText">
                A new place to grow you business. You can start very small and
                develop an empire!
              </div>
            </div>
            <div className="SellersLanding-infoCol">
              <div className="SellersLanding-infoName">
                Millenial marketplace
              </div>
              <div className="SellersLanding-infoText">
                First Middle East millenial marketplace. Get a desirable
                audience for your brand.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CustomerLanding-sell">
        <div className="CustomerLanding-wrapper">
          <div className="CustomerLanding-sellTitle CustomerLanding-sellTitle--style2">
            Discover marketing opportunities with Middly social network
          </div>
          <div className="CustomerLanding-sellInner">
            <div className="CustomerLanding-sellContent">
              <div className="CustomerLanding-sellSubTitle">
                Sell right from the feed
              </div>
              <div className="CustomerLanding-sellText">
                Engage your buyers socially.
                <br />
                <br />
                Create customized posts to promote your products.
                <br />
                <br />
                Grow a loyal customers base.
              </div>
              <div className="CustomerLanding-sellLink">
                <Link to="/landing/sellers">Start a shop</Link>
              </div>
            </div>
            <div className="CustomerLanding-sellImg">
              <img
                src={liFeedcard}
                className="img-card"
                width="223"
                height="372"
                alt=""
              />
              <img
                src={liFeedcardBg}
                className="img-bg"
                width="457"
                height="305"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="SellersLanding-features">
        <div className="SellersLanding-wrapper">
          <div className="SellersLanding-featuresInner">
            <div className="SellersLanding-featuresCol">
              <div className="SellersLanding-featuresThumb">
                <img src={liValue} width="62" height="63" alt="" />
              </div>
              <div className="SellersLanding-featuresName">Great value</div>
              <div className="SellersLanding-featuresTxt">
                Give your listings a boost
              </div>
            </div>
            <div className="SellersLanding-featuresCol">
              <div className="SellersLanding-featuresThumb">
                <img src={liPrice} width="63" height="63" alt="" />
              </div>
              <div className="SellersLanding-featuresName">
                Reasonable prices
              </div>
              <div className="SellersLanding-featuresTxt">
                Choose the best pricing plan, suitable for your brand
              </div>
            </div>
            <div className="SellersLanding-featuresCol">
              <div className="SellersLanding-featuresThumb">
                <img src={liSocial} width="64" height="60" alt="" />
              </div>
              <div className="SellersLanding-featuresName">Social aspect</div>
              <div className="SellersLanding-featuresTxt">
                Create content promoting your products and share it with
                community
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="SellersLanding-promotion">
        <div className="SellersLanding-wrapper">
          <div className="SellersLanding-promotionTtl">
            Enjoy innovative product promotion
          </div>
          <div className="SellersLanding-promotionInner">
            <div className="SellersLanding-promotionCol">
              <img
                src={liCard}
                className="card"
                width="375"
                height="636"
                alt=""
              />
              <img
                src={liFeedBackBg}
                className="card-bg"
                width="463"
                height="309"
                alt=""
              />
            </div>
            <div className="SellersLanding-promotionCol SellersLanding-promotionCol--2">
              <img
                src={liBoots}
                className="card2-bg"
                width="160"
                height="296"
                alt=""
              />
              <img
                src={liBootsCard}
                className="card2"
                width="246"
                height="418"
                alt=""
              />
            </div>
          </div>

          <div className="CustomerLanding-sellInner">
            <div className="CustomerLanding-sellContent">
              <div className="CustomerLanding-sellTitle">
                Chat with the clients
              </div>
              <div className="CustomerLanding-sellText">
                Personal messaging shows great retention rate.
                <br />
                <br />
                You can build a great relationship with the client.
              </div>
            </div>
            <div className="CustomerLanding-sellImg">
              <img
                src={liChat}
                className="img-card"
                width="235"
                height="245"
                alt=""
              />
              <img
                src={liChatBg}
                className="img-bg"
                width="504"
                height="337"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="CustomerLanding-feedback">
        <div className="CustomerLanding-feedbackWrapper">
          <div className="CustomerLanding-feedbackTitle">
            Chosen by best brands in ME
          </div>
          <div className="CustomerLanding-feedbackInner">
            <div className="CustomerLanding-feedbackImg">
              <img
                src={liFeedBackBg}
                className="img-bg"
                width="264"
                height="176"
                alt=""
              />
              <img
                src={liFeedBack}
                className="img-avatar"
                width="144"
                height="138"
                alt=""
              />
            </div>
            <div className="CustomerLanding-feedbackContent">
              <div className="CustomerLanding-feedbackText">
                I love how Middly allows me to connect with my buyers and stay
                in touch. I can promote my products not only in traditional
                ecommerce way, but also with posts, which is simply amazing!
              </div>
              <div className="CustomerLanding-feedbackAuthor">
                Rashida Dayem, founder of Elmiraz
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="SellersLanding-pricing">
        <div className="SellersLanding-wrapper">
          <div className="SellersLanding-pricingTitle">Pricing plans</div>
          <div className="SellersLanding-pricingSubtitle">
            Try Middly free for 30 days.
          </div>
          <div className="SellersLanding-pricingSubtitle">
            Start your free trial now.
          </div>
          <div className="SellersLanding-pricingInfo">
            No credit card required. No obligation. No risk
          </div>

          <div className="SellersLanding-pricingInner">
            <PricingPlans />
          </div>
        </div>
      </section>

      <section className="SellersLanding-faq">
        <div className="SellersLanding-wrapper">
          <div className="SellersLanding-faqTitle">
            Frequently asked questions
          </div>
          <div className="SellersLanding-faqInner">
            <div className="SellersLanding-faqCol">
              <div className="SellersLanding-faqName">
                What does it cost to run a shop on Middly?
              </div>
              <div className="SellersLanding-faqTxt">
                We try to keep our prices as low as possible, while maintaining
                excellent service.
                <b />
                You can find the description of each plan in Pricing plans
              </div>
            </div>
            <div className="SellersLanding-faqCol">
              <div className="SellersLanding-faqName">How do I get paid?</div>
              <div className="SellersLanding-faqTxt">
                Middly makes your payments smooth and simple - you will receive
                weekly payments to your connected bank account. Also you get a
                report of your monthly transactions.
              </div>
            </div>
            <div className="SellersLanding-faqCol">
              <div className="SellersLanding-faqName">
                How can I start a shop?
              </div>
              <div className="SellersLanding-faqTxt">
                Its easy to set up a shop on Middly. Create an Middly account
                (if you don’t already have one), set your shop location and
                currency, choose a shop name, create a listing, set a payment
                method (how you want to be paid), and finally set a billing
                method (how you want to pay your Middly fees).
              </div>
            </div>
            <div className="SellersLanding-faqCol">
              <div className="SellersLanding-faqName">
                How does Middly protects its sellers?
              </div>
              <div className="SellersLanding-faqTxt">
                When you are selling on Middly, whenever a customer makes an
                order, our anti-fraud system secures the payment you receive
                from customer.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="SellersLanding-start">
        <div className="SellersLanding-startWrapper">
          <div className="SellersLanding-startTitle">
            Start selling on Middly today!
          </div>
          <div className="SellersLanding-startSubTitle">
            No better time to start than now
          </div>
          <div className="SellersLanding-startLink">
            <Link to="#">Start a shop</Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SellersLanding;
