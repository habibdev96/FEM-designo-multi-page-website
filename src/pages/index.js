import Head from 'next/head';
import HomeHero from '../components/home/HomeHero';
import HomeProjectLinks from '../components/home/HomeProjectLinks';
import HomeFeatures from '../components/home/HomeFeatures';
import Cta from '../components/shared/Cta';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeHero />
      <main>
        <HomeProjectLinks />
        <HomeFeatures />
        <Cta />
      </main>
    </>
  );
}
