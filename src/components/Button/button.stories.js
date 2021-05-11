import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import Button from './';

export default {
  title: 'Button',
  component: Button
}

// export const Reset = () => <Button reset type="reset" onClick={null} text="Reset" />
// export const Submit = () => <Button submit type="submit" onClick={null} text="Submit" />
// export const Search = () => <Button submit type="button" onClick={null} text="Search" />
// export const Save = () => <Button submit type="submit" onClick={null} text="Save" />
// export const Add = () => <Button button type="button" onClick={null} text="Save" />
// export const Load = () => <Button load type="button" onClick={null} text="Load more posters" />
// export const Magnifier = () => <Button magnifier type="button" onClick={null} text="&#x2315;" />

const Template = args => <Button {...args} />

export const Reset = Template.bind({});
Reset.args = {
  reset: true,
  type: "reset",
  onClick: null,
  text: "Reset"
}
export const Submit = Template.bind({});
Submit.args = {
  submit: true,
  type: "submit",
  onClick: null,
  text: "Submit"
}
export const Search = Template.bind({});
Search.args = {
  submit: true,
  type: "button",
  onClick: null,
  text: "Search"
}
export const Save = Template.bind({});
Save.args = {
  submit: true,
  type: "button",
  onClick: null,
  text: "Save"
}
export const Add = Template.bind({});
Add.args = {
  button: true,
  type: "button",
  onClick: null,
  text: "Add +"
}
export const Load = Template.bind({});
Load.args = {
  load: true,
  type: "button",
  onClick: null,
  text: "Load more posters"
}
export const Magnifier = Template.bind({});
Magnifier.args = {
  Magnifier: true,
  type: "button",
  onClick: null,
  text: "&#x2315;"
}