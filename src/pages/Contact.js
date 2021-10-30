import Head from 'next/head';
import ContactHero from '../components/contact/ContactHero';
import LocationsCta from '../components/shared/LocationsCta';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Designo | Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <ContactHero />
        <LocationsCta />
      </main>
    </>
  );
}
