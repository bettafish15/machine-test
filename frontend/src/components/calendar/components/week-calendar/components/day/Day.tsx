import React, { FC } from 'react';
import Hour from '../hour/Hour';
import { IMonthDay } from 'types/date';

import styles from './day.module.scss';
import { IEvent } from 'types/event';

interface IDayProps {
  dayData: IMonthDay;
  dayEvents: (IEvent | 'empty' | null)[];
}

const Day: FC<IDayProps> = ({
  dayData,
  dayEvents
}) => {
  return (
    <div
      className={styles.day}
      data-day={dayData.dayNumber}
    >
      {dayEvents.map((hour, index) => {
        if(hour !== 'empty' && hour !== null && hour?.id){
          return (
            <Hour
              dayData={dayData}
              key={`${dayData.dayNumber}-${hour?.id ?? `empty-${index}`}`}
              event={hour}
            />
          );
        }else if(hour === 'empty') {
          return (
            <Hour
              dayData={dayData}
              key={`${dayData.dayNumber}-${`empty`}`}
              event={hour}
            />
          )
        } else if(hour === null) {
          return (
            <Hour
              dayData={dayData}
              key={`${dayData.dayNumber}-${hour?.id ?? `empty-${index}`}`}
              event={hour}
            />
          );
        }
      })}
    </div>
  );
};

export default Day;
