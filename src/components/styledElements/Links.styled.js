import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const StyledLink = styled.a`
  ${textStyles}
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${({ mobile }) => (mobile ? '1.7rem' : '1.4rem')};
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
