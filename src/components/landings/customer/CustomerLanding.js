import React from 'react';
// import Link from 'next/link';
import { NavLink } from 'react-router-dom';

import '../../../styles/comp-styles/landings/customer/CustomerLanding.scss';

export default function CustomerLanding() {
  return (
    <section className="CustomerLanding">
      <section className="CustomerLanding-hero">
        <div className="CustomerLanding-wrapper">
          <div className="CustomerLanding-heroTitle">Welcome to Middly</div>
          <div className="CustomerLanding-heroDesc">
            Discover a marketplace that benefits all
          </div>
        </div>
      </section>

      <section className="CustomerLanding-options">
        <div className="CustomerLanding-wrapper">
          <div className="CustomerLanding-optionsInner">
            <div className="CustomerLanding-optionsCol">
              <div className="CustomerLanding-optionsTtl">Buy</div>
              <div className="CustomerLanding-optionsDesc">
                A perfect place to buy trendy stuff from local brands. Share you
                purchase on the feed and earn coins.
                <b />
                Communication is the new luxury, and who cherish your chats more
                than local brands?
              </div>
            </div>
            <div className="CustomerLanding-optionsCol">
              <div className="CustomerLanding-optionsTtl">Sell</div>
              <div className="CustomerLanding-optionsDesc">
                Promote your products among millenial audience.
                <b />
                Use one-of-a-kind marketing tools.
                <b />
                Engage users socially: follow and chat with buyers, collaborate
                with influencers.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CustomerLanding-shop">
        <div className="CustomerLanding-wrapper">
          <div className="CustomerLanding-shopInner">
            <div className="CustomerLanding-shopContent">
              <div className="CustomerLanding-shopTitle">Shop Middly</div>
              <div className="CustomerLanding-shopSubTitle">
                <span>Earn coins</span>
                <img
                  src="/static/images/li-coins.png"
                  width="39"
                  height="35"
                  alt=""
                />
              </div>
              <div className="CustomerLanding-shopSubTitle">
                <span>and spend them on your next purchase</span>
                <img
                  src="/static/images/li-money.png"
                  width="35"
                  height="33"
                  alt=""
                />
              </div>
              <div className="CustomerLanding-shopText">
                What can be more exciting than spending money and getting
                bonuses?
              </div>
            </div>
            <div className="CustomerLanding-shopImage">
              <img
                src="/static/images/li-boots.jpg"
                className="img1"
                width="160"
                height="296"
                alt=""
              />
              <img
                src="/static/images/li-boots-card.jpg"
                className="img2"
                width="246"
                height="418"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="CustomerLanding-info">
        <div className="CustomerLanding-wrapper">
          <div className="CustomerLanding-infoInner">
            <div className="CustomerLanding-infoCol">
              <div className="CustomerLanding-infoTitle">Social feed</div>
              <div className="CustomerLanding-infoText">
                Share your best outfits on the feed, like what your friend wear,
                leave a public feedback. Brag on the bag you bought and earn
                coins for that!
              </div>
            </div>
            <div className="CustomerLanding-infoCol">
              <div className="CustomerLanding-infoTitle">Local brands</div>
              <div className="CustomerLanding-infoText">
                Discover brands, handcrafted with love and care. The people who
                cherish their reputation and who you probably have mutual
                friends with.
              </div>
            </div>
            <div className="CustomerLanding-infoCol">
              <div className="CustomerLanding-infoTitle">Style editorial</div>
              <div className="CustomerLanding-infoText">
                Our fashion team selects best pieces and gives you a shortcut
                way to your most trendiest outfit. Follow Middly trendsetters -
                influencers.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CustomerLanding-feedback">
        <div className="CustomerLanding-feedbackWrapper">
          <div className="CustomerLanding-feedbackInner">
            <div className="CustomerLanding-feedbackImg">
              <img
                src="/static/images/li-feedback-bg.png"
                className="img-bg"
                width="264"
                height="176"
                alt=""
              />
              <img
                src="/static/images/li-feedback.png"
                className="img-avatar"
                width="144"
                height="138"
                alt=""
              />
            </div>
            <div className="CustomerLanding-feedbackContent">
              <div className="CustomerLanding-feedbackText">
                Middly is the place I go to, when I need a rewamp for my
                outfits. I like discovering trends and the brands I follow, are
                Bahraini!
              </div>
              <div className="CustomerLanding-feedbackAuthor">
                Rashida Dayem, founder of Elmiraz
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CustomerLanding-features">
        <div className="CustomerLanding-wrapper">
          <div className="CustomerLanding-featuresInner">
            <div className="CustomerLanding-featuresCol">
              <div className="CustomerLanding-featuresThumb">
                <img
                  src="/static/images/li-delivery.png"
                  width="86"
                  height="55"
                  alt=""
                />
              </div>
              <div className="CustomerLanding-featuresTitle">
                Middle East delivery
              </div>
              <div className="CustomerLanding-featuresText">
                Delivery available in Bahrain, UAE, Kuwait, Qatar. Payment by
                cash is available when selecting delivery in that region.
              </div>
            </div>

            <div className="CustomerLanding-featuresCol">
              <div className="CustomerLanding-featuresThumb">
                <img
                  src="/static/images/li-secure.png"
                  width="61"
                  height="56"
                  alt=""
                />
              </div>
              <div className="CustomerLanding-featuresTitle">
                Secure payments
              </div>
              <div className="CustomerLanding-featuresText">
                Our SSL encryption keep your payment details safe regardless of
                your payment method choice.
              </div>
            </div>

            <div className="CustomerLanding-featuresCol">
              <div className="CustomerLanding-featuresThumb">
                <img
                  src="/static/images/li-secure.png"
                  width="61"
                  height="56"
                  alt=""
                />
              </div>
              <div className="CustomerLanding-featuresTitle">
                Secure payments
              </div>
              <div className="CustomerLanding-featuresText">
                Our SSL encryption keep your payment details safe regardless of
                your payment method choice.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CustomerLanding-sell">
        <div className="CustomerLanding-wrapper">
          <div className="CustomerLanding-sellInner">
            <div className="CustomerLanding-sellContent">
              <div className="CustomerLanding-sellTitle">Sell on Middly</div>
              <div className="CustomerLanding-sellSubTitle">
                Marketplace for your brand
              </div>
              <div className="CustomerLanding-sellText">
                A perfect platform for individual entrepreneurs or local brands
                to discover, gain and grow your audience.
              </div>
              <div className="CustomerLanding-sellLink">
                {/*<NavLink href="/landing/sellers">*/}
                {/*  <a href>Learn more</a>*/}
                {/*</NavLink>*/}
              </div>
            </div>
            <div className="CustomerLanding-sellImg">
              <img
                src="/static/images/li-feedcard.jpg"
                className="img-card"
                width="223"
                height="372"
                alt=""
              />
              <img
                src="/static/images/li-feedcard-bg.jpg"
                className="img-bg"
                width="457"
                height="305"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
