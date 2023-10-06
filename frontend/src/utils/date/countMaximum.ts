import { IEvent } from "types/event";

export const countMaximum = (data: IEvent[]) =>
  data.reduce(
    (result, task) => {
      const date = task.date;
      result.counts[date] = (result.counts[date] || 0) + 1;
      if (result.counts[date] > result.maxCount) {
        result.maxDate = date;
        result.maxCount = result.counts[date];
      }
      return result;
    },
    { maxDate: null, maxCount: 0, counts: {} }
  ).maxCount;
;

export const countMaximumDebug = (data: IEvent[]) =>
  data.reduce(
    (result, task) => {
      const date = task.date;
      result.counts[date] = (result.counts[date] || 0) + 1;
      if (result.counts[date] > result.maxCount) {
        result.maxDate = date;
        result.maxCount = result.counts[date];
      }
      return result;
    },
    { maxDate: null, maxCount: 0, counts: {} }
  );
;
