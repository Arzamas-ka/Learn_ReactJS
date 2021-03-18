import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
// types and styles
import { StyledCalendarWrapper, StyledCalendarIcon } from './style';
// components
import Input from 'components/Input';

const Calendar: FC = () => {
  const [startDate, setStartDate] = useState(null);

  const DatePickerCustomInput = forwardRef(
    ({ value, onClick }: any, ref: any) => (
      <>
        <Input
          label="Release Date"
          name="release"
          type="text"
          placeholder="Select date"
          onChange={(date) => setStartDate(date)}
          value={value}
          onClick={onClick}
          autoComplete="off"
        />
        <StyledCalendarIcon onClick={onClick} />
      </>
    ),
  );

  return (
    <StyledCalendarWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Select date"
        showYearDropdown={true}
        customInput={<DatePickerCustomInput />}
      />
    </StyledCalendarWrapper>
  );
};

export default Calendar;
