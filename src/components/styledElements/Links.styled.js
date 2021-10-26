import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const StyledLink = styled.a`
  ${textStyles}
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
