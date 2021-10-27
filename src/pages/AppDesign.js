import Head from 'next/head';
import ProjectHero from '../components/shared/ProjectHero';
import ProjectCards from '../components/shared/ProjectCards';
import ProjectLinks from '../components/shared/ProjectLinks';
import ProjectLink from '../components/shared/ProjectLink';
import Cta from '../components/shared/Cta';
import appDesignBg from '../assets/app-design/desktop/bg-pattern-intro-app.svg';
import webDesignBg from '../assets/home/desktop/image-web-design-small.jpg';
import graphicDesignBg from '../assets/home/desktop/image-graphic-design.jpg';

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
        <ProjectCards projectType='appDesign' />
        <ProjectLinks>
          <ProjectLink
            path='/WebDesign'
            full={false}
            bg={webDesignBg}
            text='Web Design'
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
