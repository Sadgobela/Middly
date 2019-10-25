import React from 'react';
// import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import CustomerLanding from '../../components/landings/customer/CustomerLanding';
import SellersLanding from '../../components/landings/sellers/SellersLanding';
// import Header from '../../components/header/Header';
import Footer from '../../components/general/Footer';
import gql from 'graphql-tag';
import QueryProvider from '../../containers/QueryProvider/QueryProvider';

const FOOTER_QUERY = gql`
  query {
    getCountries {
      CountryName
    }
  }
`;

const LandingPage = ({ seller = true, customer }) => {
  return (
    <Layout>
      {/*<Head>*/}
      <title>Middly - where ecommerce meet social network</title>
      {/*</Head>*/}
      {/*<Header show={false} mobile={false} marketplace />*/}
      <main>
        {seller && <SellersLanding />}
        {customer && <CustomerLanding />}
      </main>
      <QueryProvider query={FOOTER_QUERY}>
        <Footer />
      </QueryProvider>
    </Layout>
  );
};

export default LandingPage;
