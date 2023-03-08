import React from 'react';
import Head from 'next/head';

const Remote2 = props => (
  <div>
    <Head>
      <title>Remote2</title>
      <link rel="icon" href="/nextjs-ssr/remote2/public/favicon.ico" />
    </Head>
    <div>
      <h1>Remote 2 Page</h1>
      <h3 className="title">Hello from Remote 2 (NextJS) </h3>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  </div>
);
Remote2.getInitialProps = async () => {
  const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json());
  console.log(swapi);
  console.log('swapi');
  return swapi;
};
export default Remote2;
