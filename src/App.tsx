import React from "react";
import "./App.scss";
import Calendar from "./components/Calendar";
import Event from "./components/Event";

function App() {
  return (
    <div className="App">
      <Calendar />
      <Event />
    </div>
  );
}

export default App;
