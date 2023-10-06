import { IRules } from "hooks/useValidator/types";

export const createEventSchema: IRules = {
  title: {
    isRequired: true
  },
  date: {
    isRequired: true,
  }
}
