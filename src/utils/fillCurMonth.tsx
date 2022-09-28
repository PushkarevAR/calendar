import DayCell from "../components/DayCell";

export function fillCurMonth(date: Date) {
  const curMonth = date.getMonth();
  const curYear = date.getFullYear();
  const firstDayOfMonth = new Date(curYear, curMonth, 1).getDay();
  const lastDateOfMonth = new Date(curYear, curMonth + 1, 0).getDate();
  const lastDateOfPrevMonth = new Date(curYear, curMonth, 0).getDate();
  const lastDayOfMonth = new Date(curYear, curMonth, lastDateOfMonth).getDay();
  const month = [];
  let index = 0;

  for (
    let i = lastDateOfPrevMonth - firstDayOfMonth + 1;
    i <= lastDateOfPrevMonth;
    i++
  ) {
    month.push(<DayCell day={i} isActive={false} key={index} />);
    index++;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    month.push(<DayCell day={i} isActive={true} key={index} />);
    index++;
  }
  for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
    month.push(<DayCell day={i} isActive={false} key={index} />);
    index++;
  }
  return month;
}