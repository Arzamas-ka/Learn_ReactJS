import React from "react";

export const h1 = React.createElement("h1", null, "Hello World!");
export const span = React.createElement(
  "span",
  { className: "span" },
  "It's a React.CreateElement",
  React.createElement("hr", null, null)
);
