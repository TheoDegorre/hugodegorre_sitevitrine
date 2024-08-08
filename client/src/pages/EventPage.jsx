import { useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import EventCard from "../components/EventCard";

function EventPage() {
  const eventdata = useLoaderData();

  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  // Calculer la date d'aujourd'hui
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Ignorer la partie temps

  // Convertir les dates de début en objets Date et extraire les dates futures
  const futureEvents = eventdata
    .map((event) => ({
      ...event,
      begin_date: new Date(event.begin_date),
      end_date: new Date(event.end_date),
    }))
    .filter((event) => event.begin_date >= today);

  // Extraire les dates futures dans un tableau
  const nextevenArray = futureEvents.map((event) => event.begin_date);

  // Trouver l'événement le plus proche
  let closestEvent = null;
  if (nextevenArray.length > 0) {
    // Calculer la différence de temps avec aujourd'hui
    const todayISO = today.toISOString();

    const closestDate = nextevenArray.reduce(
      (closest, currentDate) =>
        // Comparer les dates
        Math.abs(new Date(todayISO) - currentDate) <
        Math.abs(new Date(todayISO) - closest)
          ? currentDate
          : closest,
      nextevenArray[0]
    );

    // Trouver l'événement correspondant à la date la plus proche
    closestEvent = futureEvents.find(
      (event) => event.begin_date.getTime() === closestDate.getTime()
    );
  }
  // console.log("closestevent", closestEvent);
  const netBeginDate = formatDate(closestEvent.begin_date);
  return (
    <main className="event-page-container">
      <section className="event-date-container">
        {closestEvent ? (
          <div>
            <h1> Prochain évènement :</h1>
            <h2>{closestEvent.title}</h2>
            <h2>Le {netBeginDate}</h2>
          </div>
        ) : (
          "Aucun événement futur disponible."
        )}
      </section>
      <h1>Les évènements :</h1>
      <section className="event-list-container">
        <Suspense fallback={<Loading />}>
          {eventdata.map((el) => (
            <EventCard
              className="event-card"
              key={el.id}
              id={el.id}
              title={el.title}
              beginDate={el.begin_date}
              endDate={el.end_date}
              city={el.city}
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
