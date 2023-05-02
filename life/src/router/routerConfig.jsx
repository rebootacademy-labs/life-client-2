import { createBrowserRouter, redirect } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import App from "../App";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    loader: () => {
      if (localStorage.getItem("token")) {
        return null;
      } else {
        return redirect("/");
      }
    },
    children: [
      {
        path: "/home",
        element: <App />,

        children: [
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;
