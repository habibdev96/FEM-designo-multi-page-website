import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FlexBetween } from '../styledElements/Containers.styled';
import { StyledLink } from '../styledElements/Links.styled';
import {
  maxWidthLg,
  sectionSpacingSm,
  flexAlign,
} from '../../abstracts/Mixins';
import logo from '../../assets/shared/desktop/logo-dark.png';
import { useGlobalContext } from '../../context/context';

const StyledNav = styled.nav`
  ${maxWidthLg}
  ${sectionSpacingSm}

  .logo {
    width: 20rem;
    cursor: pointer;
  }

  .links {
    ${flexAlign}
  }
`;

export default function Navbar() {
  const { links } = useGlobalContext();

  return (
    <StyledNav>
      <FlexBetween>
        <Link href='/'>
          <div className='logo'>
            <Image src={logo} alt='designo logo' />
          </div>
        </Link>
        <ul className='links'>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.path} passHref>
                <StyledLink>{link.text}</StyledLink>
              </Link>
            </li>
          ))}
        </ul>
      </FlexBetween>
    </StyledNav>
  );
}
