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

// export colors = {

// }
