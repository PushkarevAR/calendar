import React from "react";
import "./App.scss";
import Calendar from "./components/Calendar";
// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { dateSlice } from "./store/reducers/DateSlice";

function App() {
  // const { date } = useAppSelector((state) => state.dateReducer);
  // const { incriment } = dateSlice.actions;
  // const dispatch = useAppDispatch();

  return (
    <div className="App">
      {/* <h1>{date.day}</h1>
      <button onClick={() => dispatch(incriment(1))}>BTN</button> */}
      <Calendar />
    </div>
  );
}

export default App;
