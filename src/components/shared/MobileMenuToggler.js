import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context/context';

const Toggler = styled.button`
  display: none;
  background: transparent;
  outline: 0;
  border: 0;
  z-index: 2000;

  ${Responsive.md`
    display: block;
  `}

  .icon {
    color: var(--darkGray);
    font-size: var(--sm);
  }
`;

const MobileMenuToggler = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobalContext();

  return (
    <Toggler onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      {!isMobileMenuOpen ? (
        <FaBars className='icon' />
      ) : (
        <FaTimes className='icon' />
      )}
    </Toggler>
  );
};

export default MobileMenuToggler;
