import { IDate } from "../../models/IDate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
  date: IDate;
}

const currentDate = new Date();

const initialState: DateState = {
  date: {
    day: currentDate.getDate(),
    week: currentDate.getDay(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    isActive: true,
  },
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    nextMonth(state) {
      if (state.date.month + 1 > 11) {
        state.date.year += 1;
        state.date.month = 0;
      } else state.date.month += 1;
      state.date.day = 1;
      state.date.week = new Date(
        state.date.year,
        state.date.month,
        state.date.day
      ).getDay();
    },
    prevMonth(state) {
      if (state.date.month - 1 < 0) {
        state.date.year -= 1;
        state.date.month = 11;
      } else state.date.month -= 1;
      state.date.day = 1;
      state.date.week = new Date(
        state.date.year,
        state.date.month,
        state.date.day
      ).getDay();
    },
    setDay(state, action: PayloadAction<number>) {
      state.date.day = action.payload;
      state.date.week = new Date(
        state.date.year,
        state.date.month,
        state.date.day
      ).getDay();
    },
  },
});

export default dateSlice.reducer;
