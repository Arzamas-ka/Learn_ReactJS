import * as React from 'react';
import { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import { StyledCalendarWrapper, StyledCalendarIcon } from './style';

import Input from 'components/Input';

const Calendar: FC<any> = ({ onChange, value, type, onKeyDown }) => {
  const [startDate, setStartDate] = useState(null);

  const DatePickerCustomInput = forwardRef(({ onClick }: any, ref: any) => (
    <>
      <Input
        aria-label="release"
        label="Release Date"
        name="release"
        type={type}
        onChange={(date) => setStartDate(date)}
        value={value}
        onClick={onClick}
        autoComplete="off"
        onKeyDown={onKeyDown}
      />
      <StyledCalendarIcon onClick={onClick} />
    </>
  ));

  return (
    <StyledCalendarWrapper>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        placeholderText=""
        showYearDropdown={true}
        customInput={<DatePickerCustomInput />}
      />
    </StyledCalendarWrapper>
  );
};

export default Calendar;
