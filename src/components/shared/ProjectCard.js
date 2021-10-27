import styled from 'styled-components';
import Image from 'next/image';
import { SubHeading } from '../styledElements/Headings.styled';
import { Paragraph } from '../styledElements/Paragraphs.styled';

const StyledArticle = styled.article`
  text-align: center;

  &:hover,
  &:focus {
    .content {
      background-color: var(--lightPeach);
    }

    .title {
      color: var(--white);
    }

    .desc {
      color: var(--white);
    }
  }

  .img {
    margin-bottom: -1rem;

    img {
      width: 75%;
      border-top-left-radius: var(--mainRadius);
      border-top-right-radius: var(--mainRadius);
    }
  }

  .content,
  .title,
  .desc {
    transition: var(--mainTransition);
  }

  .desc {
    padding: 1rem;
  }

  .content {
    padding: 2rem;
    background-color: var(--lighterPeach);
    border-bottom-left-radius: var(--mainRadius);
    border-bottom-right-radius: var(--mainRadius);
  }
`;

export default function ProjectCard({ image, title, description }) {
  return (
    <a href='#!'>
      <StyledArticle>
        <div className='img'>
          <Image src={image} alt={title} />
        </div>
        <div className='content'>
          <SubHeading peach className='title'>
            {title}
          </SubHeading>
          <Paragraph className='desc'>{description}</Paragraph>
        </div>
      </StyledArticle>
    </a>
  );
}
