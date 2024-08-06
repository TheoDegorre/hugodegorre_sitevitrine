import { useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import EventCard from "../components/EventCard";

function EventPage() {
  const eventdata = useLoaderData();

  return (
    <main>
      <section className="event-date-container">
        <h1>Prochain évènement :</h1>
      </section>
      <section className="event-list-container">
        <Suspense fallback={<Loading />}>
          {eventdata.map((el) => (
            <EventCard
              key={el.id}
              id={el.id}
              title={el.title}
              beginDate={el.begin_date}
              endDate={el.end_date}
              city={el.url_video}
              description={el.description}
            />
          ))}
        </Suspense>
      </section>
    </main>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default EventPage;
