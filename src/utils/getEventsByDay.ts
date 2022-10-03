import { IDate } from "../models/IDate";
import { IEvent } from "../models/IEvent";

export const getEventsByDate = (events: IEvent[], date: IDate): IEvent[] => {
  return events.filter(
    (event) =>
      event.date.year === date.year &&
      event.date.month === date.month &&
      event.date.day === date.day
  );
};
