import Head from 'next/head';
import ProjectHero from '../components/shared/ProjectHero';
import ProjectCards from '../components/shared/ProjectCards';
import ProjectLinks from '../components/shared/ProjectLinks';
import ProjectLink from '../components/shared/ProjectLink';
import Cta from '../components/shared/Cta';
import graphicDesignBg from '../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import webDesignBg from '../assets/home/desktop/image-web-design-small.jpg';
import appDesignBg from '../assets/home/desktop/image-app-design.jpg';

export default function GraphicDesign() {
  return (
    <>
      <Head>
        <title>Designo | Graphic Design</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectHero
        title='Graphic Design'
        description='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        pattern={graphicDesignBg}
      />
      <main>
        <ProjectCards projectType='graphicDesign' />
        <ProjectLinks>
          <ProjectLink
            path='/AppDesign'
            full={false}
            bg={appDesignBg}
            text='App Design'
          />
          <ProjectLink
            path='/WebDesign'
            full={false}
            bg={webDesignBg}
            text='Web Design'
          />
        </ProjectLinks>
        <Cta />
      </main>
    </>
  );
}
