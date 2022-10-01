import { IDate } from "./IDate";

export interface IEvent {
  title: string;
  description: string;
  type: string;
  date: IDate;
}
