import Head from 'next/head';
import LocationsSection from '../components/locations/LocationsSection';
import Cta from '../components/shared/Cta';

export default function Locations() {
  return (
    <>
      <Head>
        <title>Designo | Locations</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LocationsSection />
        <Cta />
      </main>
    </>
  );
}
