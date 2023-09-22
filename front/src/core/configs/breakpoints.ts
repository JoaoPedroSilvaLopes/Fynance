import { generateMedia } from 'styled-media-query';

export const breakpoints = {
  mobile: 768,
  tablet: 992,
  desktop: 1200,
};

export const mediaQuery = generateMedia({
  desktop: `${breakpoints.desktop}px`,
  tablet: `${breakpoints.tablet}px`,
  mobile: `${breakpoints.mobile}px`,
});
