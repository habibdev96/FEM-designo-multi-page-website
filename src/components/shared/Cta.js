import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { TwoCol } from '../styledElements/Containers.styled';
import { SectionHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import { Button } from '../styledElements/Buttons.styled';
import { maxWidthSm } from '../../abstracts/Mixins';
import pattern from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  margin: 0 2rem;
  transform: translateY(10rem);
`;

const Container = styled.div`
  ${maxWidthSm}
  position: relative;
  overflow: hidden;
  background-color: var(--peach);
  border-radius: var(--secondaryRadius);

  ${Responsive.md`
    text-align: center;

  `}

  ${Responsive.sm`
    .desc {
      display: none;
    }
  `}

  .pattern {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
  }

  .content {
    padding: 5rem 1rem 5rem 5rem;
    position: relative;
    z-index: 10;

    ${Responsive.md`
      padding: 5rem 5rem 0 5rem;
    `}
  }

  .btn {
    margin: 0 auto;

    ${Responsive.md`
      margin: 0 0 5rem 0;
    `}
  }
`;

export default function Cta() {
  return (
    <StyledSection>
      <Container>
        <div className='pattern'>
          <Image src={pattern} alt='' />
        </div>
        <TwoCol>
          <div className='content'>
            <SectionHeading light={+true}>
              Let’s talk about your project
            </SectionHeading>
            <Paragraph light={+true} className='desc'>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow. Get in touch
            </Paragraph>
          </div>
          <div className='btn'>
            <Link href='/Contact' passHref>
              <Button primary={+true}>Get in Touch</Button>
            </Link>
          </div>
        </TwoCol>
      </Container>
    </StyledSection>
  );
}
