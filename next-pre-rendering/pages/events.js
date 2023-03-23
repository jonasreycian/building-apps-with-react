import { useRouter } from "next/router";
import { useState } from "react";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const res = await fetch(`http://localhost:4000/events?category=sports`);
    const data = await res.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Click Sports Events</button>
      <h1>Event List</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} {event.category}
          </h2>
          <p>{event.description}</p>
        </div>
      ))}
    </>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const categoryStr = category ? `?category=${category}` : "";
  const res = await fetch(`http://localhost:4000/events${categoryStr}`);
  const data = await res.json();

  return {
    props: {
      eventList: data,
    },
  };
}
