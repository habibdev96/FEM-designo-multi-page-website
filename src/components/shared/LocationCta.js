import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { SubHeading } from '../styledElements/Headings.styled';
import { Button } from '../styledElements/Buttons.styled';
import pattern from '../../assets/home/desktop/bg-pattern-hero-home.svg';

const StyledArticle = styled.article`
  position: relative;
  text-align: center;

  .pattern {
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
  }

  .title {
    margin: 2rem 0 4rem 0;
  }
`;

export default function LocationCta({ icon, title }) {
  return (
    <StyledArticle>
      <div className='pattern'>
        <Image src={pattern} alt='' />
      </div>
      <div className='icon'>
        <Image src={icon} alt={title} />
      </div>
      <SubHeading className='title'>{title}</SubHeading>
      <Link href='/Locations' passHref>
        <Button secondary={+true}>See Location</Button>
      </Link>
    </StyledArticle>
  );
}
