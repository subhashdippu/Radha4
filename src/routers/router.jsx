import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import HomePage from "../components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
