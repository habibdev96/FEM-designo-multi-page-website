import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const Paragraph = styled.p`
  ${textStyles}
  font-size: 1.6rem;
  padding: 2rem 0;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--darkGray)')};
`;
