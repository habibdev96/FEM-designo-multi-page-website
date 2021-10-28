import Head from 'next/head';
import OurCompanyHero from '../components/ourCompany/OurCompanyHero';
import OurCompanySection from '../components/ourCompany/OurCompanySection';
import Cta from '../components/shared/Cta';
import showcaseOne from '../assets/about/desktop/image-world-class-talent.jpg';
import showcaseTwo from '../assets/about/desktop/image-real-deal.jpg';

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
        <OurCompanySection
          showcase={showcaseOne}
          title='World-class talent'
          descriptionOne='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'
          descriptionTwo='Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
          invert={false}
        />

        <OurCompanySection
          showcase={showcaseTwo}
          title='The real deal'
          descriptionOne='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'
          descriptionTwo='We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
          invert={true}
        />
        <Cta />
      </main>
    </>
  );
}
