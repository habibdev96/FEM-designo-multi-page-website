import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FlexBetween } from '../styledElements/Containers.styled';
import { StyledLink } from '../styledElements/Links.styled';
import {
  sectionSpacingSm,
  flexAlign,
  headingStyles,
  textStyles,
} from '../../abstracts/Mixins';
import Tag from './Tag';
import logo from '../../assets/shared/desktop/logo-light.png';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context/context';

const StyledFooter = styled.footer`
  ${sectionSpacingSm}
  background-color: var(--black);

  .top {
    padding: 15rem 0 4rem 0;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);

    ${Responsive.md`
      flex-direction: column;
    `}
  }

  .logo {
    width: 20rem;
    cursor: pointer;
  }

  .links {
    ${flexAlign}

    ${Responsive.sm`
      flex-direction: column;
    `}
  }

  .bottom {
    padding-top: 4rem;

    ${Responsive.md`
      flex-direction: column;
    `}

    ${Responsive.sm`
      text-align: center;
    `}
  }

  .info {
    ${flexAlign}
    align-items: flex-start;

    ${Responsive.sm`
      align-items: center;
      flex-direction: column;
    `}
  }

  h5 {
    ${headingStyles}
    font-size: 1.5rem;
    margin: 1rem 0;
    color: var(--lightGray);
  }

  p {
    ${textStyles}
    font-size: 1.5rem;
    color: var(--lightGray);
  }

  .socials {
    ${flexAlign}
    gap: 2rem;
  }

  .social svg {
    color: var(--peach);
    font-size: var(--sm);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--lightPeach);
    }
  }
`;

export default function Footer() {
  const { links, socials } = useGlobalContext();

  return (
    <StyledFooter>
      <FlexBetween className='top'>
        <Link href='/'>
          <div className='logo'>
            <Image src={logo} alt='designo logo' />
          </div>
        </Link>
        <ul className='links'>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.path} passHref>
                <StyledLink light={+true}>{link.text}</StyledLink>
              </Link>
            </li>
          ))}
        </ul>
      </FlexBetween>
      <FlexBetween className='bottom'>
        <div className='info'>
          <div>
            <h5>Designo Central Office</h5>
            <p>3886 Willington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <h5>Contact Us (Central Office)</h5>
            <h5>P: +1 253-863-8967</h5>
            <h5>M: contact@designo.co</h5>
          </div>
        </div>
        <div className='socials'>
          {socials.map((social) => (
            <a href='#!' key={social.id} className='social'>
              {social.icon}
            </a>
          ))}
        </div>
      </FlexBetween>
      <Tag />
    </StyledFooter>
  );
}
