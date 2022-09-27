import style from "./Calendar.module.scss";
import chevronRight from "../assets/chevron-right.svg";
import chevronLeft from "../assets/chevron-left.svg";
import DayCell from "./DayCell";

const getCurDate = (curDate: Date) => {
  const curMonth = curDate.getMonth();
  const curYear = curDate.getFullYear();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <h1>
      {month[curMonth]} {curYear}
    </h1>
  );
};

const getMonth = (curDate: Date): number[] => {
  const curMonth = curDate.getMonth();
  const curYear = curDate.getFullYear();
  const firstDayOfMonth = new Date(curYear, curMonth, 1).getDay();
  const lastDateOfMonth = new Date(curYear, curMonth + 1, 0).getDate();
  const lastDateOfPrevMonth = new Date(curYear, curMonth, 0).getDate();
  const lastDayOfMonth = new Date(curYear, curMonth, lastDateOfMonth).getDay();
  const month = [];
  
  for(let i = lastDateOfPrevMonth - firstDayOfMonth + 1; i <=  lastDateOfPrevMonth; i++) {
    month.push(i);
  }
  for(let i = 1; i <= lastDateOfMonth; i++) {
    month.push(i);
  }
  for (let i = 1; i <= (6 - lastDayOfMonth); i++) {
    month.push(i);
  }
  return month;
}

const Calendar = () => {
  const { calendarSection, header, arrows, arrow, week, days } = style;
  const curDate = new Date();
  const month = getMonth(curDate);
  
  return (
    <section className={calendarSection}>
      <div className={header}>
        {getCurDate(curDate)}
        <span className={arrows}>
          <img src={chevronLeft} alt="prev-month" className={arrow} />
          <img src={chevronRight} alt="next-month" className={arrow} />
        </span>
      </div>
      <div className={week}>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className={days}>
        {month.map((num) => (
          <DayCell day={num} />
        ))}
      </div>
    </section>
  );
};

export default Calendar;
