import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'react-moment';

import { Calendar as CalendarWrapper, CalendarIcon } from './style';

import Input from 'components/Input';

const Calendar: FC = () => {
  const [startDate, setStartDate] = useState(null);

  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <>
      <Input
        label="Release Date"
        name="release"
        type="text"
        placeholder="Select date"
        onChange={(date) => setStartDate(date)}
        value={value}
        onClick={onClick}
      />
      <CalendarIcon onClick={onClick} />
    </>
  ));

  return (
    <CalendarWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Select date"
        showYearDropdown={true}
        customInput={<ExampleCustomInput />}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
