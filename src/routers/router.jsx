import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import HomePage from "../components/HomePage";
import Portfolios from "../components/portfolios";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/portfolios",
        element: <Portfolios />,
      },
    ],
  },
]);

export default router;
