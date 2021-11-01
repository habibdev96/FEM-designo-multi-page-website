import styled from 'styled-components';
import Image from 'next/image';
import { MainHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';

const StyledHeader = styled.header`
  margin: 15rem 2rem 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  overflow: hidden;
  position: relative;
  text-align: center;
  background-color: var(--peach);
  border-radius: var(--secondaryRadius);

  .pattern {
    position: absolute;
    width: 100%;
    top: 0%;
    left: 0%;
  }
`;

export default function ProjectHero({ title, description, pattern }) {
  return (
    <StyledHeader>
      <Container>
        <div className='pattern'>
          <Image src={pattern} alt='' />
        </div>
        <MainHeading light={+true}>{title}</MainHeading>
        <Paragraph light={+true}>{description}</Paragraph>
      </Container>
    </StyledHeader>
  );
}
