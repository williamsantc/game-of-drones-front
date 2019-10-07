import React from 'react';
import Head from 'next/head';
import '../assets/scss/styles.scss';

const Layout: React.FC = ({ children }) => {

  return (
      <div>
        <Head>
          <title>Game of Drones</title>
          <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" />
          <link rel='icon' href='/static/favicon.ico' />
        </Head>
        <div className="container">
          {children}
        </div>
      </div>
  );
};

export default Layout;