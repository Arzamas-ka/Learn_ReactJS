import * as React from 'react';

import { StyledSpinner } from './style';
import SpinnerGif from '../../assets/images/spinner.gif';

import Spinner from './';

export default {
  title: 'Spinner',
  component: Spinner,
}

export const Loader = () => <StyledSpinner src={SpinnerGif} />;