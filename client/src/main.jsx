import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup"
import Results from "./pages/Results.jsx";
import Survey from "./pages/Survey.jsx";
import ErrorPage from "./pages/ErrorPage";


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
        path: "/Signup",
        element: <Signup />
      },
      {
        // path: "/Profile/:username"
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Results",
        element: <Results />,
      },
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
