import { useAppSelector } from "../hooks/redux";
import { getMonthByNumber, getWeekByNumber } from "../utils/getDate";

const SelectedDay = () => {
  const { date } = useAppSelector((state) => state.dateReducer);

  return (
    <div>
      <h1>
        {getWeekByNumber(date.week)} {date.day}
      </h1>
      <p>
        {getMonthByNumber(date.month)} {date.year}
      </p>
    </div>
  );
};

export default SelectedDay;
