import styled from 'styled-components';
import Responsive from '../../abstracts/Responsive';
import { headingStyles } from '../../abstracts/Mixins';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 4.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};

  ${Responsive.md`
    font-size: 3.2rem;
  `}

  ${Responsive.xs`
    font-size: 2.8rem;
  `}
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  ${({ peach }) => peach && `color: var(--peach);`}

  ${Responsive.md`
    font-size: 3.2rem;
  `}
`;

export const SubHeading = styled.h4`
  ${headingStyles}
  font-size: 2rem;
  text-transform: uppercase;
  ${({ link }) => link && `color: var(--white);`}
  ${({ dark }) => dark && `color: var(--darkGray);`}
  ${({ peach }) => peach && `color: var(--peach);`}
`;
