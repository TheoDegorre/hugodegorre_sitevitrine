import PropTypes from "prop-types";

function DirectoryCard({ title, composer, category, inst }) {
  return (
    <main className="directory-card-container">
      <h2 id="project-card-composer">{composer}</h2>
      <section className="directory-card-content">
        <h3 id="project-card-title">{title}</h3>
        <hgroup className="directory-card-detail">
          <p id="directory-category">{category}</p>
          <p id="directory-instrumentation">{inst}</p>
        </hgroup>
      </section>
    </main>
  );
}

DirectoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  composer: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  inst: PropTypes.string.isRequired,
};

export default DirectoryCard;
