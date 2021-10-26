import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { flexAlign } from '../../abstracts/Mixins';
import { MainHeading, SubHeading } from '../styledElements/Headings.styled';
import { BiChevronRight } from 'react-icons/bi';

const StyledArticle = styled.article`
  position: relative;
  cursor: pointer;

  &:hover,
  &:focus {
    .overlay {
      background: hsla(11, 72%, 66%, 0.8);
    }
  }

  .bg {
    position: relative;
    height: 25rem;
    width: 100%;

    &--full {
      height: 100%;
    }

    img {
      border-radius: var(--secondaryRadius);
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: var(--secondaryRadius);
    transition: var(--mainTransition);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .view {
    ${flexAlign}
    justify-content: center;
    gap: 0;
    margin-top: 2rem;
  }

  .icon {
    font-size: var(--md);
    color: var(--peach);
  }
`;

export default function ProjectLink({ bg, path, full, text }) {
  return (
    <Link href={path}>
      <StyledArticle>
        <div className={`bg ${full && 'bg--full'}`}>
          <Image placeholder='blur' src={bg} alt='' layout='fill' />
          <div className='overlay'></div>
        </div>
        <div className='content'>
          <MainHeading light uppercase>
            {text}
          </MainHeading>
          <div className='view'>
            <SubHeading link>View Projects</SubHeading>
            <BiChevronRight className='icon' />
          </div>
        </div>
      </StyledArticle>
    </Link>
  );
}
