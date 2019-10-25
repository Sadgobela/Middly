import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import Header from 'components/header/Header';
import Footer from 'components/general/Footer';
import CustomerLanding from 'components/landings/customer/CustomerLanding';

export default function CustomerPage() {
  return (
    <Layout>
      <Head>
        <title>Middly - where ecommerce meet social network</title>
      </Head>
      <Header show={false} mobile={false} marketplace />
      <main>
        <CustomerLanding />
      </main>
      <Footer />
    </Layout>
  );
}
