import { FC } from "react";
import style from './DayCell.module.scss';

interface IDay {
  day: number;
}

const DayCell: FC<IDay> = ({ day }) => {
  const { dayCell } = style;

  return (
    <span className={dayCell}>{day}</span>
  )
}

export default DayCell;