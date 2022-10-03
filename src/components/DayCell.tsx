import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IDate } from "../models/IDate";
import { dateSlice } from "../store/reducers/DateSlice";
import style from "./DayCell.module.scss";

interface DayCellProps extends IDate {
  event: string | boolean;
}

const DayCell: FC<DayCellProps> = ({ day, isActive, month, year, event }) => {
  const { dayCell, inactive, selected, pink, green } = style;
  const { setDay } = dateSlice.actions;
  const { date } = useAppSelector((state) => state.dateReducer);
  const isEvent = event ? true : false;
  const isSelected = day === date.day && isActive;

  const dispatch = useAppDispatch();

  let dayStyle = `${dayCell} ${!isActive ? inactive : ""} ${
    isSelected ? selected : ""
  } ${isEvent ? (event === "pink" ? pink : green) : ""}`;

  const handleSelectDay = () => {
    isActive && dispatch(setDay(day));
  };

  return (
    <span className={dayStyle} onClick={handleSelectDay}>
      {day}
    </span>
  );
};

export default DayCell;
