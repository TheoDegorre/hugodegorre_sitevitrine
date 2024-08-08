import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function EventCard({ id, title, beginDate, endDate, city }) {
  // fonction de mise en forme de date
  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  const netBeginDate = formatDate(beginDate);
  const netEndDate = formatDate(endDate);

  return (
    <NavLink className="event-card" to={`/event/${id}`}>
      <h2 id="project-card-title">{title}</h2>
      <div className="event-card-detail">
        {netBeginDate === netEndDate ? (
          <h4 id="project-card-date">le {netBeginDate}</h4>
        ) : (
          <h4 id="project-card-date">
            Du {netBeginDate} au {netEndDate}
          </h4>
        )}
        <h4 id="project-card-title">{city}</h4>
      </div>
    </NavLink>
  );
}

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  beginDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default EventCard;
