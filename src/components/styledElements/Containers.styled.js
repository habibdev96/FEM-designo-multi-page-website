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
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
`;

export const ThreeCol = styled(TwoCol)`
  grid-template-columns: repeat(3, 1fr);
`;
