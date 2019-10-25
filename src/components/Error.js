import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from './Layout/Layout';
import Header from '../components/header/Header';
import Footer from '../components/general/Footer';
import Subscription from '../components/general/Subscription';
import 'comp-styles/general/MobileCta.scss';

export default class Error extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    statusCode: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    title: 'Oops. Something was wrong.',
    message: 'Please try again later.',
    statusCode: 'Unknown',
  };

  render() {
    const { title, message, statusCode } = this.props;

    return (
      <Layout>
        <Head>
          <title>Error {statusCode}</title>
        </Head>
        <Header show={false} mobile={false} page="Marketplace" />
        <main>
          <section className="ItemsSection ItemsSection--featured">
            <div className="ItemsSection-wrapper">
              <div
                className="ItemsSection-heading"
                style={styles.itemsSectionHeading}
              >
                <div className="ItemsSection-colTitle">
                  <h3 className="ItemsSection-title">{title}</h3>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: message }}
                className="ItemsSection-content"
                style={styles.itemsSectionContent}
              />
            </div>
          </section>
          <Subscription />
        </main>
        <Footer />
      </Layout>
    );
  }
}

const styles = {
  itemsSectionHeading: {
    borderBottom: 0,
    textAlign: 'center',
    paddingTop: 60,
  },
  itemsSectionContent: {
    textAlign: 'center',
    maxWidth: 500,
    paddingBottom: 130,
    margin: 'auto',
  },
};
