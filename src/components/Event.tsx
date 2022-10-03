import SelectedDay from "./SelectedDay";
import style from "./Event.module.scss";
import React, { useEffect, useState, FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { IEvent } from "../models/IEvent";
import EventInfo from "./EventInfo";
import { eventsAPI } from "../services/EventsService";
import { getEventsByDate } from "../utils/getEventsByDay";

interface EventProps {
  events: IEvent[];
}

const Event: FC<EventProps> = ({ events }) => {
  const { title, description, green, pink, wrapper } = style;
  const { date: globalDate } = useAppSelector((state) => state.dateReducer);
  const lastID = events[events.length - 1].id;
  const [createEvent] = eventsAPI.useCreateEventMutation();

  const initialSate: IEvent = {
    id: lastID,
    title: "",
    description: "",
    type: "green",
    date: {
      day: 1,
      week: 1,
      month: 1,
      year: 1,
      isActive: false,
    },
  };
  const [newEvent, setNewEvent] = useState(initialSate);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submit presed, current event: ", newEvent);

    event.preventDefault();
    setNewEvent({ ...newEvent, id: (newEvent.id += 1), date: globalDate });
  };

  const createEventAsync = async (event: IEvent) => await createEvent(event);

  useEffect(() => {
    console.log("useEffect worked!, curEvent: ", newEvent);
    newEvent.date.isActive && createEventAsync(newEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newEvent.id]);

  const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, title: event.target.value });
  };

  const handleDescriptionInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewEvent({ ...newEvent, description: event.target.value });
  };

  const handleEventTypeCahnge = () => {
    console.log("typing", newEvent.type);

    setNewEvent({
      ...newEvent,
      type: newEvent.type === "pink" ? "green" : "pink",
    });
  };

  const currEvents = getEventsByDate(events, globalDate);
  const isEvent = events.length > 0;

  return (
    <section>
      <SelectedDay />
      <div className={wrapper}>
        {isEvent &&
          currEvents.map((event) => <EventInfo key={event.id} event={event} />)}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Add Event :</h3>
        <div>
          <input
            value={newEvent.title}
            autoComplete="off"
            type="text"
            name="EventTitle"
            required
            placeholder="Event title..."
            className={title}
            onChange={handleTitleInput}
          />
          <input
            type="radio"
            name="Eventtype"
            id=""
            className={green}
            onChange={handleEventTypeCahnge}
            defaultChecked
          />
          <input
            type="radio"
            name="Eventtype"
            id=""
            className={pink}
            onChange={handleEventTypeCahnge}
          />
        </div>
        <input
          value={newEvent.description}
          autoComplete="off"
          type="text"
          name="EventDescription"
          required
          placeholder="Event description..."
          className={description}
          onChange={handleDescriptionInput}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default Event;
