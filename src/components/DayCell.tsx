import { FC } from "react";
import { IDate } from "../models/IDate";
import style from './DayCell.module.scss';

const DayCell: FC<IDate> = ({ day, isActive, month, year }) => {
  const { dayCell, active } = style;
  const dayStyle = isActive ? dayCell : `${active} ${dayCell}`  

  return (
    <span className={dayStyle}>{day}</span>
  )
}

export default DayCell;