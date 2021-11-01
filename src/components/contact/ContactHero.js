import styled from 'styled-components';
import Image from 'next/image';
import { MainHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import { TwoCol } from '../styledElements/Containers.styled';
import { sectionSpacingSm, maxWidthLg } from '../../abstracts/Mixins';
import ContactForm from './ContactForm';
import pattern from '../../assets/contact/desktop/bg-pattern-hero-desktop.svg';
import Responsive from '../../abstracts/Responsive';

const StyledHeader = styled.header`
  margin: 15rem 2rem 0 2rem;

  ${Responsive.md`
    margin: 15rem 0 0 0;
  `}
`;

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  position: relative;
  overflow: hidden;
  border-radius: var(--secondaryRadius);
  background-color: var(--peach);

  ${Responsive.md`
    border-radius: 0;
  `}

  .pattern {
    position: absolute;
    top: 0;
  }

  .info {
    padding: 5rem;

    ${Responsive.md`
      padding: 2rem;
    `}
  }
`;

export default function ContactHero() {
  return (
    <StyledHeader>
      <Container>
        <div className='pattern'>
          <Image src={pattern} alt='' />
        </div>
        <TwoCol>
          <div className='info'>
            <MainHeading light={+true}>Contact Us</MainHeading>
            <Paragraph light={+true}>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </Paragraph>
          </div>
          <ContactForm />
        </TwoCol>
      </Container>
    </StyledHeader>
  );
}
