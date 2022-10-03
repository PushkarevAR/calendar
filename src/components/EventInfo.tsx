import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { eventsAPI } from "../services/EventsService";
import style from "./EventInfo.module.scss";

interface EventInfoProps {
  event: IEvent;
}

const EventInfo: FC<EventInfoProps> = ({ event }) => {
  const { wrapper, pink, green } = style;

  const [deleteEvent] = eventsAPI.useDeleteEventMutation();

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(event);
    await deleteEvent(event);
  };

  return (
    <div className={wrapper}>
      <h4>{event.title}</h4>
      <button onClick={handleDelete}>delete</button>
      {event.description && (
        <p className={event.type === "pink" ? pink : green}>
          {event.description}
        </p>
      )}
    </div>
  );
};

export default EventInfo;
