import Head from 'next/head';
import ProjectHero from '../components/shared/ProjectHero';
import ProjectCards from '../components/shared/ProjectCards';
import ProjectLinks from '../components/shared/ProjectLinks';
import ProjectLink from '../components/shared/ProjectLink';
import Cta from '../components/shared/Cta';
import webDesignBg from '../assets/web-design/desktop/bg-pattern-intro-web.svg';
import appDesignBg from '../assets/home/desktop/image-app-design.jpg';
import graphicDesignBg from '../assets/home/desktop/image-graphic-design.jpg';

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
        <ProjectLinks>
          <ProjectLink
            path='/AppDesign'
            full={false}
            bg={appDesignBg}
            text='App Design'
          />
          <ProjectLink
            path='/GraphicDesign'
            full={false}
            bg={graphicDesignBg}
            text='Graphic Design'
          />
        </ProjectLinks>
        <Cta />
      </main>
    </>
  );
}
