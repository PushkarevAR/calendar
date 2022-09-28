import { FC } from "react";
import style from './DayCell.module.scss';

interface IDay {
  day: number;
  isActive: boolean;
}

const DayCell: FC<IDay> = ({ day, isActive }) => {
  const { dayCell, active } = style;
  const dayStyle = isActive ? dayCell : `${active} ${dayCell}`  

  return (
    <span className={dayStyle}>{day}</span>
  )
}

export default DayCell;