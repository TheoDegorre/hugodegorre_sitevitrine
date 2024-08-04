import { useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectPage() {
  const projectAll = useLoaderData();

  return (
    <main className="project-page-container">
      <Suspense fallback={<Loading />}>
        {projectAll.map((el) => (
          <ProjectCard
            key={el.id}
            id={el.id}
            title={el.title}
            photo={el.url_photo}
            record={el.url_record}
            video={el.url_video}
            description={el.description}
          />
        ))}
      </Suspense>
    </main>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default ProjectPage;
