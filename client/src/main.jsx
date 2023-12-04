import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Results from './pages/Results.jsx';
import Survey from './pages/Survey.jsx';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/profile/:username',
        element: <Profile />
      }, {
        path: '/results',
        element: <Results />
      }, {
        path: '/survey',
        element: <Survey />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)