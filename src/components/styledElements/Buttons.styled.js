import styled, { css } from 'styled-components';

export const Button = styled.a`
  position: relative;
  z-index: 10;
  display: inline-block;
  cursor: pointer;
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

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--peach);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: var(--lightPeach);
        color: var(--white);
      }
    `}
`;

export const FormButton = styled.input`
  position: relative;
  z-index: 10;
  display: inline-block;
  cursor: pointer;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  width: 50%;
  text-transform: uppercase;
  margin-top: 2rem;
  border-radius: var(--secondaryRadius);
  transition: var(--mainTransition);
  background-color: var(--white);
  color: var(--darkGray);

  &:hover,
  &:focus {
    background-color: var(--lightPeach);
    color: var(--white);
  }
`;
