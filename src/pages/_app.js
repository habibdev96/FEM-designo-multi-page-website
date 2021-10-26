import Head from 'next/head';
import Globals from '../abstracts/Globals';
import { AppProvider } from '../context/context';
import Navbar from '../components/shared/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>

      <AppProvider>
        <Globals />
        <Navbar />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
