import style from "./Calendar.module.scss";
import chevronRight from "../assets/chevron-right.svg";
import chevronLeft from "../assets/chevron-left.svg";
import { fillCurMonth } from "../utils/fillCurMonth";
import { getCurDate } from "../utils/getCurDate";

const Calendar = () => {
  const { calendarSection, header, arrows, arrow, week, days } = style; // get styles
  const date = new Date();
  const month = fillCurMonth(date); //fill current month

  return (
    <section className={calendarSection}>
      <div className={header}>
        {getCurDate(date)}
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
      <div className={days}>{month.map((cell) => cell)}</div>
    </section>
  );
};

export default Calendar;
