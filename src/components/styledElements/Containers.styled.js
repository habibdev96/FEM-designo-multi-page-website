import styled from 'styled-components';
import { maxWidthLg } from '../../abstracts/Mixins';

export const FlexBetween = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
`;

export const TwoCol = styled.div`
  ${maxWidthLg}
  display: grid;
  align-items: ${({ start }) => (start ? 'flex-start' : 'center')};
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ThreeCol = styled(TwoCol)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
