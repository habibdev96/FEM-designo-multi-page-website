import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenuToggler from '../shared/MobileMenuToggler';
import { FlexBetween } from '../styledElements/Containers.styled';
import { StyledLink } from '../styledElements/Links.styled';
import { flexAlign } from '../../abstracts/Mixins';
import logo from '../../assets/shared/desktop/logo-dark.png';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context/context';

const StyledNav = styled.nav`
  padding: 3rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3000;
  background-color: var(--white);

  .logo {
    width: 20rem;
    cursor: pointer;

    ${Responsive.md`
      width: 15rem;
    `}
  }

  .links {
    ${flexAlign}

    ${Responsive.md`
      display: none;
    `}
  }
`;

export default function Navbar() {
  const { links, setIsMobileMenuOpen } = useGlobalContext();

  return (
    <StyledNav>
      <FlexBetween>
        <Link href='/'>
          <div className='logo' onClick={() => setIsMobileMenuOpen(false)}>
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
        <MobileMenuToggler />
      </FlexBetween>
    </StyledNav>
  );
}
