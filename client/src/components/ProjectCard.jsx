import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectCard({ title, photo, id }) {
  return (
    <NavLink className="project-card" to={`/project/${id}`}>
      <img
        id="project-card-img"
        src={import.meta.env.VITE_API_URL + photo}
        alt="illustration de projet"
      />
      <h2 id="project-card-title">{title}</h2>
    </NavLink>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProjectCard;
