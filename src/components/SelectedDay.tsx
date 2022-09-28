import { useAppSelector } from "../hooks/redux";
import { getMonthByNumber, getWeekByNumber } from "../utils/getDate";
import style from './SelectedDay.module.scss';

const SelectedDay = () => {
  const {} = style;
  const { date } = useAppSelector((state) => state.dateReducer);

  return (
    <div>
      <h1>
        {getWeekByNumber(date.week)} {date.day}
      </h1>
      <p>{getMonthByNumber(date.month)} {date.year}</p>
    </div>
  );
};

export default SelectedDay;
