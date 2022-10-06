import "./App.scss";
import Calendar from "./components/Calendar";
import Event from "./components/Event";
import { eventsAPI } from "./services/EventsService";

function App() {
  const {
    data: events,
    isLoading,
    isError,
    isSuccess,
  } = eventsAPI.useFetchAllEventsQuery(5);

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {isError && <h2>Failed to fetch data from JSON server</h2>}
      {isSuccess && (
        <>
          <Event events={events} />
          <Calendar events={events} />
        </>
      )}
    </div>
  );
}

export default App;
