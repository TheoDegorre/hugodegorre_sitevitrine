import { NavLink } from "react-router-dom";

function ProjectCard() {
  return (
    <nav className="navbar-container">
      <section className="logo-group">
        <NavLink
          className="logo-nav-link"
          to="/"
          aria-label="lien vers page d'acceuil"
        >
          {/* <img
            id="logo"
            src={`${import.meta.env.VITE_API_URL}/assets/logo/logo_accordeon1.png`}
            alt="logo accordeon"
          /> */}
          <h1 id="logo_typo">Hugo Degorre</h1>
        </NavLink>
      </section>
      <section className="nav-group">
        <NavLink
          className="nav-link"
          to="/biography"
          aria-label="lien vers page Biographie"
        >
          Biographie
        </NavLink>

        <NavLink
          className="nav-link"
          to="/project"
          aria-label="lien vers page projets"
        >
          Projets
        </NavLink>

        <NavLink
          className="nav-link"
          to="/event"
          aria-label="lien vers page évènements"
        >
          Evènements
        </NavLink>

        <NavLink
          className="nav-link"
          to="/directory"
          aria-label="lien vers page répertoire"
        >
          Repertoire
        </NavLink>

        <NavLink
          className="nav-link"
          to="/contact"
          aria-label="lien vers page contact"
        >
          Contact
        </NavLink>

        <NavLink
          className="nav-link"
          to="/admin"
          aria-label="lien vers page admin"
        >
          Admin
        </NavLink>
      </section>
    </nav>
  );
}

export default ProjectCard;
