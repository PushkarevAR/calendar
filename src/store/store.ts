import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { eventsAPI } from "../services/EventsService";
import dateReducer from "./reducers/DateSlice";

const rootReducer = combineReducers({
  dateReducer,
  [eventsAPI.reducerPath]: eventsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(eventsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
