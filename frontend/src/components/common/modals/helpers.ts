import { IMapEventValues, IModalValues } from "./types";

export const getMapEventValues = ({
  title,
  date,
}: IMapEventValues): IModalValues => {
  return {
    title,
    date
  }
}
