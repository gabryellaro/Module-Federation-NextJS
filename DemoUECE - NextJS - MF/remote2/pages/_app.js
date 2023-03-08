import {Suspense} from "react";
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Suspense fallback={'loading'}>
      </Suspense>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
