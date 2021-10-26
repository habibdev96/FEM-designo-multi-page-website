import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 4.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
`;

export const SubHeading = styled.h4`
  ${headingStyles}
  font-size: 2rem;
  text-transform: uppercase;
  ${({ link }) => link && `color: var(--white);`}
  ${({ dark }) => dark && `color: var(--darkGray);`}
`;
