import React, { FC } from 'react';

import { CongratulationsPopupProps } from './models';

import {
  StyledCongratulationsPopupWrapper,
  StyledCloseIcon,
  StyledCongratulationsPopupText,
  StyledCongratulationsPopupTitle,
  StyledDoneIcon,
} from './style';

const CongratulationsPopup: FC<CongratulationsPopupProps> = ({
  hideCongratulations,
  setIsActiveBackdrop,
}) => {
  return (
    <StyledCongratulationsPopupWrapper>
      <StyledCloseIcon
        onClick={() => {
          hideCongratulations();
          setIsActiveBackdrop(false);
        }}
      />
      <StyledDoneIcon />
      <StyledCongratulationsPopupTitle>
        Congratulations!
      </StyledCongratulationsPopupTitle>
      <StyledCongratulationsPopupText>
        The movie has been added to database successfully!
      </StyledCongratulationsPopupText>
    </StyledCongratulationsPopupWrapper>
  );
};

export default CongratulationsPopup;
