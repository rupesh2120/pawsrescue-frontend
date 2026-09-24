import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./containers/Home/HomePage";
import { AnimalsFeed } from "./containers/AnimalsFeed";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ServicePage } from "./pages/ServicePage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/animals",
        element: <AnimalsFeed />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/vet-care",
            element: <ServicePage title="Vet Care" description="Access veterinary support and care resources for your pet." />,
          },
          {
            path: "/post-adoption",
            element: <ServicePage title="Post Adoption" description="Keep your adoption journey supported with Paws Rescue resources." />,
          },
        ],
      },
    ],
  },
]);
