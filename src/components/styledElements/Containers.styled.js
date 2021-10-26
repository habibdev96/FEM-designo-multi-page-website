import styled from 'styled-components';

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
`;

export const TwoCol = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
`;
