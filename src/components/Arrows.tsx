import chevronRight from "../assets/chevron-right.svg";
import chevronLeft from "../assets/chevron-left.svg";
import styles from "./Arrows.module.scss";
import { dateSlice } from "../store/reducers/DateSlice";
import { useAppDispatch } from "../hooks/redux";

const Arrows = () => {
  const { arrows, arrow } = styles;
  const { nextMonth, prevMonth } = dateSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <span className={arrows}>
      <button onClick={() => dispatch(prevMonth())}>
        <img src={chevronLeft} alt="prev-month" className={arrow} />
      </button>
      <button onClick={() => dispatch(nextMonth())}>
        <img src={chevronRight} alt="next-month" className={arrow} />
      </button>
    </span>
  );
};

export default Arrows;
