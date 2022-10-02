import SelectedDay from "./SelectedDay";
import style from "./Event.module.scss";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IEvent } from "../models/IEvent";
import { eventsSlice } from "../store/reducers/EventsSlice";
import EventInfo from "./EventInfo";
import { fetchEvents } from "../store/reducers/ActionCreator";

const Event = () => {
  const { title, description, green, pink } = style;
  const { date: globalDate } = useAppSelector((state) => state.dateReducer);
  const { addEvent } = eventsSlice.actions;
  const { events } = useAppSelector((state) => state.eventsReducer);
  const dispatch = useAppDispatch();

  const id = events.length;

  useEffect(() => {
    console.log("useEffect worked!");
    dispatch(fetchEvents());
  }, []);

  const initialSate: IEvent = {
    id: 0,
    title: "",
    description: "",
    type: "",
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
    event.preventDefault();
    setNewEvent({ ...newEvent, id: id, date: globalDate });
  };

  // useEffect(() => {
  //   console.log("useEffect worked!");
  //   newEvent.date.isActive && dispatch(addEvent(newEvent)); // КОСТЫЛЬ АЛЯРМ
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [newEvent.id]); // idk why, but setStaet is async

  const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, title: event.target.value });
  };

  const handleDescriptionInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewEvent({ ...newEvent, description: event.target.value });
  };

  const handleEventTypeCahnge = () => {
    setNewEvent({
      ...newEvent,
      type: newEvent.type === "pink" ? "green" : "pink",
    });
  };

  return (
    <section>
      <SelectedDay />
      <EventInfo />
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
