import { IDate } from "./IDate";

export interface IEvent {
  id: number;
  title: string;
  description: string;
  type: string;
  date: IDate;
}
