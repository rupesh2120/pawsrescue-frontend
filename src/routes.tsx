import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./containers/Home/HomePage";
import { AnimalsFeed } from "./containers/AnimalsFeed";

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
    ],
  },
]);
