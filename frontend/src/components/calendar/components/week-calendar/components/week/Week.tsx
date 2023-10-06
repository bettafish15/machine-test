import React, { FC } from "react";
import Day from "../day/Day";
import { IMonthDay } from "types/date";

import styles from "./week.module.scss";
import { IEvent } from "types/event";
import { DateTime } from "luxon";
import { checkIsPast, countMaximum, countMaximumDebug } from "utils/date";

interface IWeekProps {
  weekDays: IMonthDay[];
  events: IEvent[];
}

const Week: FC<IWeekProps> = ({ weekDays, events }) => {
  return (
    <div className={styles.calendar__week}>
      {weekDays.map((day) => {
        const dayEvents: (IEvent | "empty" | null)[] = events?.filter(
          (event) => {
            return DateTime.fromFormat(event.date, "yyyy-MM-dd").hasSame(
              DateTime.fromJSDate(day.date),
              "day"
            );
          }
        );
        if(!checkIsPast(day.date)){
          dayEvents.push("empty");
        }
        console.log(countMaximumDebug(events))
        console.log(dayEvents.concat(
          new Array(Math.max(0, countMaximum(events) - dayEvents.length)).fill(null)));

        return (
          <Day
            key={day.dayNumber}
            dayData={day}
            dayEvents={dayEvents.concat(
              new Array(Math.max(0, countMaximum(events) - dayEvents.length + 1)).fill(null)
            )}
          />
        );
      })}
    </div>
  );
};

export default Week;
