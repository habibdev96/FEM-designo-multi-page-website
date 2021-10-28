import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 4.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  ${({ peach }) => peach && `color: var(--peach);`}
`;

export const SubHeading = styled.h4`
  ${headingStyles}
  font-size: 2rem;
  text-transform: uppercase;
  ${({ link }) => link && `color: var(--white);`}
  ${({ dark }) => dark && `color: var(--darkGray);`}
  ${({ peach }) => peach && `color: var(--peach);`}
`;
