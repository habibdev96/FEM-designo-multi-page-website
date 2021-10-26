import styled, { css } from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  border-radius: var(--secondaryRadius);
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--white);
      color: var(--darkGray);

      &:hover,
      &:focus {
        background-color: var(--lightPeach);
        color: var(--white);
      }
    `}
`;