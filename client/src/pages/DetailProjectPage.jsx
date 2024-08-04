import { useLoaderData } from "react-router-dom";
import { AudioPlayer } from "react-audio-player-component";

function DetailProjectPage() {
  const projectId = useLoaderData();

  return (
    <main className="detail-project-container">
      <figure className="project-figure-container">
        <img
          id="project-img"
          src={import.meta.env.VITE_API_URL + projectId.url_photo}
          alt=""
        />
      </figure>
      <section className="project-section-container">
        <figcaption className="project-figcaption-container">
          <h1 id="project-title">{projectId.title}</h1>
          <p id="project-description">{projectId.description}</p>
        </figcaption>
        <article className="project-audiovisual-content">
          <AudioPlayer
            src={import.meta.env.VITE_API_URL + projectId.url_record}
            minimal={false}
            width={395}
            trackHeight={75}
            barWidth={2}
            gap={1}
            backgroundColor="#7791d8"
            barColor="#7791d8"
            barPlayedColor="black"
            skipDuration={2}
            seekBarColor="black"
            volumeControlColor="black"
          />
          <iframe
            width="500"
            height="280"
            src="https://www.youtube.com/embed/InlbcZ2yWxo?si=bGLjmFWkCqRs4uno"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </article>
      </section>
    </main>
  );
}

export default DetailProjectPage;
