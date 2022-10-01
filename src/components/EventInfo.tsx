import { useAppSelector } from "../hooks/redux";
import style from "./EventInfo.module.scss";

const EventInfo = () => {
  const { wrapper, pink, green } = style;
  const { date } = useAppSelector((state) => state.dateReducer);
  const { events } = useAppSelector((state) => state.eventsReducer);

  const curEvents = events.filter(
    (event) =>
      date.isActive &&
      event.date.year === date.year &&
      event.date.month === date.month &&
      event.date.day === date.day
  );

  const isEvent = curEvents.length > 0;

  return (
    <div className={wrapper}>
      {isEvent &&
        curEvents.map((event, index) => {
          return (
            <div key={index}>
              <h4>{event.title}</h4>
              {event.description && <p className={event.type === 'pink' ? pink : green}>{event.description}</p>}
            </div>
          );
        })}
    </div>
  );
};

export default EventInfo;
