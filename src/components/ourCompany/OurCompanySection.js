import styled from 'styled-components';
import Image from 'next/image';
import { TwoCol } from '../styledElements/Containers.styled';
import { SectionHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  ${sectionSpacingMd}
  margin: 0 2rem;

  ${Responsive.sm`
    margin: 0; 
  `}
`;

const Container = styled.div`
  ${maxWidthLg}

  .info,
  .info--inverted {
    background-color: var(--lighterPeach);
    border-radius: var(--secondaryRadius);
    padding: 5rem;

    ${Responsive.md`
      order: -1;
    `}

    ${Responsive.sm`
      padding: 5rem 2rem;
    `}
  }

  .showcase {
    ${Responsive.md`
      display: flex;
      justify-content: center;
    `}

    img {
      border-radius: var(--secondaryRadius);
    }

    &--inverted {
      display: flex;
      justify-content: flex-end;

      ${Responsive.md`
        display: flex;
        justify-content: center;
      `}

      img {
        border-radius: var(--secondaryRadius);
      }
    }
  }
`;

export default function OurCompanySection({
  showcase,
  title,
  descriptionOne,
  descriptionTwo,
  invert,
}) {
  return (
    <StyledSection>
      <Container>
        <TwoCol>
          {!invert && (
            <div className='showcase'>
              <Image src={showcase} alt={title} />
            </div>
          )}
          <div className={`${!invert ? 'info' : 'info--inverted'}`}>
            <SectionHeading peach>{title}</SectionHeading>
            <Paragraph dark>{descriptionOne}</Paragraph>
            <Paragraph dark>{descriptionTwo}</Paragraph>
          </div>
          {invert && (
            <div className='showcase--inverted'>
              <Image src={showcase} alt={title} />
            </div>
          )}
        </TwoCol>
      </Container>
    </StyledSection>
  );
}
