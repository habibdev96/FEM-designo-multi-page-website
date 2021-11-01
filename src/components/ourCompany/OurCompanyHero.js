import styled from 'styled-components';
import Image from 'next/image';
import { FlexBetween } from '../styledElements/Containers.styled';
import { MainHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import showcase from '../../assets/about/desktop/image-about-hero.jpg';
import pattern from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import Responsive from '../../abstracts/Responsive';

const StyledHeader = styled.header`
  margin: 15rem 2rem 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}

  .flexBetween {
    ${Responsive.md`
      flex-wrap: wrap;
    `}
  }

  .info {
    position: relative;
    overflow: hidden;
    padding: 5rem 10rem;
    background-color: var(--peach);
    border-radius: var(--secondaryRadius);

    ${Responsive.sm`
      padding: 5rem; 
      text-align: center;
    `}
  }

  .pattern {
    position: absolute;
  }

  .showcase {
    height: 100%;
    width: 100%;

    ${Responsive.md`
      margin: 0 auto;
      display: flex;
      justify-content: center;
    `}

    img {
      border-radius: var(--secondaryRadius);
    }
  }
`;

export default function OurCompanyHero() {
  return (
    <StyledHeader>
      <Container>
        <FlexBetween className='flexBetween'>
          <div className='info'>
            <div className='pattern'>
              <Image src={pattern} alt='' />
            </div>
            <MainHeading light>About Us</MainHeading>
            <Paragraph light>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </Paragraph>
          </div>
          <div className='showcase'>
            <Image src={showcase} alt='people at meeting' />
          </div>
        </FlexBetween>
      </Container>
    </StyledHeader>
  );
}
