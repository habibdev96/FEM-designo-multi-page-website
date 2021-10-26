import styled from 'styled-components';
import Image from 'next/image';
import { SubHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';
import pattern from '../../assets/home/desktop/bg-pattern-hero-home.svg';

const StyledArticle = styled.article`
  text-align: center;
  position: relative;

  .pattern {
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
  }

  .icon {
    margin-bottom: 2rem;
  }
`;

export default function HomeFeature({ icon, title, description }) {
  return (
    <StyledArticle>
      <div className='pattern'>
        <Image src={pattern} alt='' />
      </div>
      <div className='icon'>
        <Image src={icon} alt={title} />
      </div>
      <SubHeading dark>{title}</SubHeading>
      <Paragraph>{description}</Paragraph>
    </StyledArticle>
  );
}
