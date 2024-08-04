import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DirectoryCard from "../components/DirectoryCard";

function DirectoryPage() {
  const directoryList = useLoaderData();
  const [query, setQuery] = useState("");

  const directory = directoryList || [];

  // filtre recherche
  const filteredDirectory =
    query !== ""
      ? directory.filter(
          (el) =>
            el.title.toLowerCase().includes(query.toLowerCase()) ||
            el.composer.toLowerCase().includes(query.toLowerCase())
        )
      : directory;

  return (
    <main className="directory-page-container">
      <section className="directory-page-section">
        <input
          className="search-bar"
          type="text"
          placeholder=" Recherchez un morceau ou un compositeur"
          alt="barre de recherche"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          value={query}
        />
        <ul className="directory-content-list">
          {filteredDirectory.length > 0 ? (
            filteredDirectory.map((el) => (
              <DirectoryCard
                key={el.id}
                id={el.id}
                title={el.title}
                composer={el.composer}
                category={el.category}
                inst={el.instrumentation}
              />
            ))
          ) : (
            <li>
              Aucun morceau ou compositeur ne correspond à votre recherche.
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default DirectoryPage;
