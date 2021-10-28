import styled from 'styled-components';
import Image from 'next/image';
import { TwoCol } from '../styledElements/Containers.styled';
import { SectionHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';

const StyledSection = styled.section`
  ${sectionSpacingMd}
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  background-color: var(--lighterPeach);
  border-radius: var(--secondaryRadius);

  .info {
    padding-right: 10rem;

    &--inverted {
      padding-left: 10rem;
    }
  }

  .showcase {
    img {
      border-top-left-radius: var(--secondaryRadius);
      border-bottom-left-radius: var(--secondaryRadius);
    }

    &--inverted {
      display: flex;
      justify-content: flex-end;

      img {
        border-top-right-radius: var(--secondaryRadius);
        border-bottom-right-radius: var(--secondaryRadius);
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
          {!invert ? (
            <>
              <div className='showcase'>
                <Image src={showcase} alt={title} />
              </div>
              <div className='info'>
                <SectionHeading peach>{title}</SectionHeading>
                <Paragraph dark>{descriptionOne}</Paragraph>
                <Paragraph dark>{descriptionTwo}</Paragraph>
              </div>
            </>
          ) : (
            <>
              <div className='info--inverted'>
                <SectionHeading peach>{title}</SectionHeading>
                <Paragraph dark>{descriptionOne}</Paragraph>
                <Paragraph dark>{descriptionTwo}</Paragraph>
              </div>
              <div className='showcase--inverted'>
                <Image src={showcase} alt={title} />
              </div>
            </>
          )}
        </TwoCol>
      </Container>
    </StyledSection>
  );
}
