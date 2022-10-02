import { IEvent } from "../../models/IEvent";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchEvents } from "./ActionCreator";

interface EventsState {
  events: IEvent[];
  isLoading: boolean;
  error: string;
}

const initialState: EventsState = {
  events: [
    {
      id: 0,
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
      id: 1,
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
  extraReducers: {
    [fetchEvents.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchEvents.fulfilled.type]: (state, action: PayloadAction<IEvent[]>) => {
      state.isLoading = false;
      state.error = "";
      state.events = action.payload;
    },
    [fetchEvents.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default eventsSlice.reducer;
