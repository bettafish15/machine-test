import React, { FC, MouseEvent } from "react";
import Event from "../event/Event";
import { useModal } from "hooks/useModal";

import styles from "./hour.module.scss";
import { IEvent } from "types/event";
import { useActions } from "hooks/useActions";
import { IMonthDay } from "types/date";
import { DateTime } from "luxon";

interface IHourProps {
  event: IEvent | "empty" | null;
  dayData: IMonthDay;
}

const Hour: FC<IHourProps> = ({ event, dayData }) => {
  const { openModalCreate } = useModal();
  const { deleteEvent, markAsCompleted } = useActions();

  const handleCreateEvent = (e: MouseEvent<HTMLDivElement>) => {
    openModalCreate({ selectedDate: DateTime.fromJSDate(dayData.date).toFormat('yyyy-MM-dd') });
  };

  return (
    <div className={styles.time__slot}>
      {event && event !== "empty" && (
        <Event
          id={event.id}
          title={event.title}
          status={event.completed ? "done" : "in-progress"}
          onDeleteEvent={deleteEvent}
          onMarkComplete={markAsCompleted}
        />
      )}
      {event === "empty" && (
        <div onClick={handleCreateEvent}>
          <Event title={"test"} status="empty" />
        </div>
      )}
    </div>
  );
};

export default Hour;
