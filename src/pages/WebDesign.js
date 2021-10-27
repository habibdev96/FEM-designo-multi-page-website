import Head from 'next/head';
import ProjectHero from '../components/shared/ProjectHero';
import ProjectCards from '../components/shared/ProjectCards';
import Cta from '../components/shared/Cta';
import webDesignBg from '../assets/web-design/desktop/bg-pattern-intro-web.svg';

export default function WebDesign() {
  return (
    <>
      <Head>
        <title>Designo | Web Design</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectHero
        title='Web Design'
        description='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        pattern={webDesignBg}
      />
      <main>
        <ProjectCards projectType='webDesign' />
        <Cta />
      </main>
    </>
  );
}
