import React, { FC } from 'react';
import { IMonthDay, IWeekDay } from 'types/date';
import Navigation from './components/navigation/Navigation';
import Week from './components/week/Week';

import styles from './week-calendar.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';

interface IWeekCalendarProps {
  weekDays: IMonthDay[];
  weekDaysNames: IWeekDay[];
}

const WeekCalendar: FC<IWeekCalendarProps> = ({ weekDays, weekDaysNames }) => {
  const { events } = useTypedSelector(({ events }) => events);
  return (
    <>
      <div className={styles.calendar__week__header__container}>
        <Navigation
          weekDays={weekDays}
          weekDaysNames={weekDaysNames}
        />
      </div>
      <div className="calendar__body">
        <div className={styles.calendar__week__container}>
          <Week
            weekDays={weekDays}
            events={events}
          />
        </div>
      </div>
    </>
  );
}

export default WeekCalendar;
