import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import Results from "./pages/Results.jsx";
import Survey from "./pages/Survey.jsx";
import ErrorPage from "./pages/ErrorPage";

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Profile/:username",
        element: <Profile />,
      },
      // {
      //   path: "/Results",
      //   element: <Results />,
      // },
      {
        path: "/Survey",
        element: <Survey />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
