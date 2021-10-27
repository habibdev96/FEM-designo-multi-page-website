import Head from 'next/head';
import ProjectHero from '../components/shared/ProjectHero';
import Cta from '../components/shared/Cta';
import appDesignBg from '../assets/app-design/desktop/bg-pattern-intro-app.svg';

export default function AppDesign() {
  return (
    <>
      <Head>
        <title>Designo | App Design</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectHero
        title='App Design'
        description='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        pattern={appDesignBg}
      />
      <main>
        <Cta />
      </main>
    </>
  );
}
