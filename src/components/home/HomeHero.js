import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { TwoCol } from '../styledElements/Containers.styled';
import { MainHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import { Button } from '../styledElements/Buttons.styled';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import phone from '../../assets/home/desktop/image-hero-phone.png';
import pattern from '../../assets/home/desktop/bg-pattern-hero-home.svg';

const StyledHeader = styled.header`
  ${maxWidthLg}
  ${sectionSpacingSm}
  position: relative;
  overflow: hidden;
  border-radius: var(--mainRadius);
  background: url(${pattern}) center center/cover no-repeat, var(--peach);

  .info {
    padding: 0 5rem;
  }

  .pattern {
    position: absolute;
    top: 0;
    right: 0;
  }

  .phone {
    width: 60%;
    margin: 0 auto;
    transform: translate(10%, 20%) scale(1.6);
  }
`;

export default function HomeHero() {
  return (
    <StyledHeader>
      <TwoCol>
        <div className='info'>
          <MainHeading light>
            Award-winning custom designs and digital branding solutions
          </MainHeading>
          <Paragraph light>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </Paragraph>
          <Link href='/OurCompany' passHref>
            <Button primary>Learn More</Button>
          </Link>
        </div>
        <div>
          <div className='pattern'>
            <Image src={pattern} alt='' />
          </div>
          <div className='phone'>
            <Image placeholder='blur' src={phone} alt='smartphone' />
          </div>
        </div>
      </TwoCol>
    </StyledHeader>
  );
}
