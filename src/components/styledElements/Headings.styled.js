import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 4.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};
`;
