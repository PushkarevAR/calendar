import { IEvent } from "../../models/IEvent";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventsState {
  events: IEvent[];
  isLoading: boolean;
  error: string;
}

const initialState: EventsState = {
  events: [
    {
      title: "B-Day",
      description: "Lexa B-day",
      type: "pink",
      date: {
        day: 12,
        week: 6,
        month: 9,
        year: 2022,
        isActive: true,
      },
    },
    {
      title: "B-Day",
      description: "Marina B-day a lot pf text here to see some issue",
      type: "green",
      date: {
        day: 18,
        week: 5,
        month: 10,
        year: 2022,
        isActive: true,
      },
    },
  ],
  isLoading: false,
  error: "",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<IEvent>) {      
      state.events.push(action.payload);
    },
  },
});

export default eventsSlice.reducer;
