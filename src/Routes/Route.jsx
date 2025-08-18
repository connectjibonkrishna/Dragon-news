import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <h2>About</h2>,
      },
      {
        path: "/career",
        element: <h2>Career</h2>,
      },
      // {
      //     path:"",
      //     Component: Home,
      // },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication</h2>,
  },

  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error</h2>,
  },
]);

export default router;
