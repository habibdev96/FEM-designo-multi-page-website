import styled from 'styled-components';
import Responsive from '../../abstracts/Responsive';
import { textStyles } from '../../abstracts/Mixins';

export const Paragraph = styled.p`
  ${textStyles}
  font-size: 1.6rem;
  padding: 2rem 0;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};

  ${Responsive.md`
    font-size: 1.5rem;
  `}
`;
