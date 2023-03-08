import React, {Fragment, Suspense} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const RemoteTitle = dynamic(() => import('remote1/title'), {suspense: true});

const Home = ({loaded}) => {
  return (
    <div>
      <Head>
        <title>Host</title>
        <link rel="icon" href="/nextjs-ssr/host/public/favicon.ico"/>
      </Head>
      <div>
        <Suspense>
          <RemoteTitle/>
        </Suspense>
      </div>
    </div>
  );
};
//
Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
