import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IEvent } from "../../models/IEvent";
// import { AppDispatch } from "../store";
// import { eventsSlice } from "./EventsSlice";

// export const fetchEvents = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(eventsSlice.actions.fetchEvents());
//     const response = await axios.get<IEvent[]>('http://localhost:5000/events');
//     dispatch(eventsSlice.actions.fetchEventsSuccess(response.data));
//   } catch (e) {
//     const message = e instanceof Error ? e.message : 'on load error with wron type -__-';
//     dispatch(eventsSlice.actions.fetchEventsError(message));
//   }
// }

export const fetchEvents = createAsyncThunk(
  "event/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IEvent[]>(
        "http://localhost:5000/events"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error on events load");
    }
  }
);
