import Head from 'next/head';
import OurCompanyHero from '../components/ourCompany/OurCompanyHero';
import Cta from '../components/shared/Cta';

export default function OurCompany() {
  return (
    <>
      <Head>
        <title>Designo | About Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <OurCompanyHero />
      <main>
        <Cta />
      </main>
    </>
  );
}
