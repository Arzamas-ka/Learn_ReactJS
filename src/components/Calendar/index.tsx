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
        view="release"
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

  const isWeekday = (date) => {
    const day = date.getDay();

    return day !== 0 && day !== 6;
  };

  return (
    <CalendarWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        filterDate={isWeekday}
        placeholderText="Select date"
        showYearDropdown={true}
        customInput={<ExampleCustomInput />}
      />
    </CalendarWrapper>
  );
};

export default Calendar;