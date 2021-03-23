// @media
const breakpoints = {
  sizeXXS: 380,
  sizeXS: 430,
  sizeS: 450,
  sizeM: 490,
  sizeL: 510,
  sizeXL: 600,
  sizeXXL: 880,
  sizeXXXL: 970,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media screen and (max-width: ${breakpoints[key]}px) { ${style} }`;
};

// colors
export const colors = {
  white: '#ffffff',
  black: '#000000',
  grey_light: '#555555',
  grey: '#424242',
  grey_dark: '#232323',
  coral: '#f65261',
  grey_native: '#808080',
};

export const colorsRgba = {
  rgba_grey_light: '85, 85, 85',
  rgba_grey_dark: '12, 13, 14',
  rgba_white: '255, 255, 255',
};

export const rgbaMap = (main, opacity) => {
  return `rgba(${main}, ${opacity})`;
};
