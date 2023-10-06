import React, { FC } from "react";
import { UilCheckCircle, UilTrashAlt } from "@iconscout/react-unicons";

import styles from "./event.module.scss";
import { AsyncThunk } from "@reduxjs/toolkit";

interface IEventProps {
  id?: string;
  title: string;
  status: "empty" | "done" | "in-progress";
  onDeleteEvent?: AsyncThunk<{ eventId: string; }, string, unknown>
  onMarkComplete?: AsyncThunk<{ eventId: string; }, string, unknown>
}

const Event: FC<IEventProps> = ({ title, status, onDeleteEvent, onMarkComplete, id }) => {
  const render = (status: IEventProps["status"]) => {
    switch (status) {
      case "done":
        return (
          <div className={styles["event-success"]}>
            <div className={styles["event-success__title"]}>{title}</div>
          </div>
        );
      case "empty":
        return (
          <div className={styles["event-empty"]}>
            <div className={styles["event-empty__title"]}>Add Item</div>
          </div>
        );
      case "in-progress":
        return (
          <div className={styles["event-in-progress"]}>
            <div className={styles["event-in-progress__title"]}>
              <UilCheckCircle color="green" width="24px" height="24px" style={{ flexShrink: 0 }} onClick={() => onMarkComplete(id) }/>
              {title}
              <UilTrashAlt color="red" width="24px" height="24px" style={{ flexShrink: 0 }} onClick={() => onDeleteEvent(id) }/>
            </div>
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return render(status);
};

export default Event;
