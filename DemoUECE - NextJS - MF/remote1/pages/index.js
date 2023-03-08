import React from 'react';
import Head from 'next/head';

const Remote1 = props => (
  <div>
    <Head>
      <title>Remote1</title>
      <link rel="icon" href="/nextjs-ssr/remote1/public/favicon.ico" />
    </Head>
    <div>
      <h1>Remote 1 Page</h1>
      <h3 className="title">Hello from Remote 1 (NextJS) </h3>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  </div>
);
Remote1.getInitialProps = async () => {
  const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  console.log(swapi);
  console.log('swapi');
  return swapi;
};
export default Remote1;
