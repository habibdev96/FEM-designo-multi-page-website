import Head from 'next/head';
import ProjectHero from '../components/shared/ProjectHero';
import GraphicDesignProjects from '../components/graphicDesign/GraphicDesignProjects';
import Cta from '../components/shared/Cta';
import graphicDesignBg from '../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';

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
        <GraphicDesignProjects />
        <Cta />
      </main>
    </>
  );
}
