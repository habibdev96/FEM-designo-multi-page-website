import Head from 'next/head';
import HomeHero from '../components/home/HomeHero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomeHero />
    </>
  );
}