import SelectedDay from "./SelectedDay";
import style from './Event.module.scss';

const Event = () => {
  const { title, description, green, pink } = style;  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <section>
      <SelectedDay />
      <form action="" onSubmit={handleSubmit}>
        <h3>Add Event :</h3>
        <div>
          <input
            type="text"
            name="EventTitle"
            id=""
            placeholder="Event title..."
            className={title}
          />
          <input type="radio" name="Eventtype" id="" className={green}/>
          <input type="radio" name="Eventtype" id="" className={pink}/>
        </div>
        <input
          type="text"
          name="EventDescription"
          id=""
          placeholder="Event description..."
          className={description}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default Event;
