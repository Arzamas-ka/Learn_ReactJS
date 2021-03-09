const breakpoints = {
  xs: 370,
  s: 380,
  xm: 430,
  xxm: 450,
  m: 490,
  xl: 510,
  l: 600,
  xlg: 970,
  lg: 880,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media screen and (max-width: ${breakpoints[key]}px) { ${style} }`;
};

// export colors = {

// }
