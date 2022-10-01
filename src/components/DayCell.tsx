import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IDate } from "../models/IDate";
import { dateSlice } from "../store/reducers/DateSlice";
import style from "./DayCell.module.scss";

const DayCell: FC<IDate> = ({ day, isActive, month, year }) => {
  const { dayCell, inactive, selected, pink, green } = style;
  const { setDay } = dateSlice.actions;
  const { date } = useAppSelector((state) => state.dateReducer);
  const { events } = useAppSelector((state) => state.eventsReducer);
  const dispatch = useAppDispatch();

  // const events = [
  //   {
  //     title: "B-Day",
  //     description: "Lexa B-day",
  //     type: "pink",
  //     date: {
  //       day: 1,
  //       week: 6,
  //       month: 9,
  //       year: 2022,
  //       isActive: true,
  //     },
  //   },
  //   {
  //     title: "B-Day",
  //     description: "Marina B-day",
  //     type: "green",
  //     date: {
  //       day: 11,
  //       week: 2,
  //       month: 9,
  //       year: 2022,
  //       isActive: true,
  //     },
  //   },
  //   {
  //     title: "B-Day",
  //     description: "Marina B-day",
  //     type: "green",
  //     date: {
  //       day: 18,
  //       week: 5,
  //       month: 10,
  //       year: 2022,
  //       isActive: true,
  //     },
  //   },
  // ];

  const curEvents = events.filter(
    (event) =>
      isActive &&
      event.date.year === year &&
      event.date.month === month &&
      event.date.day === day
  );

  const isEvent = curEvents.length > 0;
  const isSelected = day === date.day && isActive;
  const isPink = curEvents[0] && curEvents[0].type === "pink";

  let dayStyle = `${dayCell} ${!isActive ? inactive : ""} ${
    isSelected ? selected : ""
  } ${isEvent ? (isPink ? pink : green) : ""}`;

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
