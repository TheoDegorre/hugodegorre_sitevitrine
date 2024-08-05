import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import ErrorPage from "./pages/ErrorPage";
import WelcomePage from "./pages/WelcomePage";
import BiographyPage from "./pages/BiographyPage";
import ProjectPage from "./pages/ProjectPage";
import DetailProjectPage from "./pages/DetailProjectPage";
import EventPage from "./pages/EventPage";
import DetailEventPage from "./pages/DetailEventPage";
import DirectoryPage from "./pages/DirectoryPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
      {
        path: "/biography",
        element: <BiographyPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/project/`),
      },
      {
        path: "/project/:id",
        element: <DetailProjectPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/api/project/${params.id}`),
      },
      {
        path: "/event",
        element: <EventPage />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/event/`),
      },
      {
        path: "/event/:id",
        element: <DetailEventPage />,
      },
      {
        path: "/directory",
        element: <DirectoryPage />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/directory/`),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
