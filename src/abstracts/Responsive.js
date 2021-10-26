import { css } from 'styled-components';

const breakpoints = {
  xxs: '350px',
  xs: '500px',
  sm: '715px',
  md: '800px',
  lg: '950px',
  xl: '1100px',
  xxl: '1300px',
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
