import { IDate } from "../../models/IDate";
import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

interface DateState {
  date: IDate;
}

const currentDate = new Date();
console.log('Initial Date:', currentDate);

const initialState: DateState = {
  date: {
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    isActive: false,
  },
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    nextMonth(state) {
      if(state.date.month + 1 > 11) {
        state.date.year += 1;
        state.date.month = 0;
      } else state.date.month += 1;
    },
    prevMonth(state) {
      if(state.date.month - 1 < 0) {
        state.date.year -= 1;
        state.date.month = 11;
      } else state.date.month -= 1;
    },
  },
});

export default dateSlice.reducer;
