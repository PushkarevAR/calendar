import style from "./Calendar.module.scss";
import { fillCurMonth } from "../utils/fillCurMonth";
import { getCurDate } from "../utils/getCurDate";
import Arrows from "./Arrows";
import { useAppSelector } from "../hooks/redux";

const Calendar = () => {
  const { calendarSection, header, week, days } = style; // get styles
  const { date } = useAppSelector((state) => state.dateReducer);
  const month = fillCurMonth(date.month, date.year); //fill current month

  return (
    <section className={calendarSection}>
      <div className={header}>
        {getCurDate(date.month, date.year)}
        <Arrows/>
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
