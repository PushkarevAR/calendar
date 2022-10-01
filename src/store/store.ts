import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateReducer from "./reducers/DateSlice";
import eventsReducer from "./reducers/EventsSlice";

const rootReducer = combineReducers({
  dateReducer,
  eventsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
