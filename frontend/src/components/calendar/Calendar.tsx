import React, { FC } from 'react';
import { useCalendar } from 'hooks/useCalendar';
import WeekCalendar from './components/week-calendar/WeekCalendar';
import Header from 'components/common/header/Header';

import './calendar.scss';

interface ICalendarProps {
}

const Calendar: FC<ICalendarProps> = () => {
  const { state, functions } = useCalendar({ selectedDate: new Date() });

  return (
    <>
      <Header
        onClickArrow={functions.onClickArrow}
        displayedDate={state.displayedDate}
      />
      <section className="calendar">
        <WeekCalendar
          weekDays={state.weekDays}
          weekDaysNames={state.weekDaysNames}
        />
      </section>
    </>
  );
}

export default Calendar;
