import DayCell from "../components/DayCell";
import { IEvent } from "../models/IEvent";

export function fillCurMonth(
  curWeek: number,
  curMonth: number,
  curYear: number,
  events: IEvent[]
) {
  const firstDayOfMonth = new Date(curYear, curMonth, 1).getDay();
  const lastDateOfMonth = new Date(curYear, curMonth + 1, 0).getDate();
  const lastDateOfPrevMonth = new Date(curYear, curMonth, 0).getDate();
  const lastDayOfMonth = new Date(curYear, curMonth, lastDateOfMonth).getDay();
  const month = [];
  let index = 0;

  const isEvent = (day: number): string | boolean => {
    const curEvents = events.filter((event) => event.date.day === day);
    return curEvents.length > 0 ? curEvents[0].type : false;
  };

  for (
    let i = lastDateOfPrevMonth - firstDayOfMonth + 1;
    i <= lastDateOfPrevMonth;
    i++
  ) {
    month.push(
      <DayCell
        day={i}
        week={curWeek}
        month={curMonth}
        year={curYear}
        isActive={false}
        key={index}
        event={false}
      />
    );
    index++;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    month.push(
      <DayCell
        day={i}
        week={curWeek}
        month={curMonth}
        year={curYear}
        isActive={true}
        key={index}
        event={isEvent(i)}
      />
    );
    index++;
  }
  for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
    month.push(
      <DayCell
        day={i}
        week={curWeek}
        month={curMonth}
        year={curYear}
        isActive={false}
        key={index}
        event={false}
      />
    );
    index++;
  }
  return month;
}
