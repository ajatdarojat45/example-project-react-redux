import { createBrowserRouter, redirect } from "react-router-dom";
import User from "../pages/User";
import Post from "../pages/Post";
import App from "../App";
import Error from "../pages/Error";
import Detail from "../pages/Detail";
import Profile from "../components/Profile";
import History from "../components/History";
import ProtectedRoute from "../components/ProtectedRoute";
import Transaction from "../pages/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },

  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
  {
    path: "user/:userId",
    element: <Detail />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "history",
        element: <History />,
        children: [
          {
            path: "buy",
            element: <p>Beli nih</p>,
          },
        ],
      },
    ],
  },
  {
    path: "/post",
    element: <Post />,
  },
]);

export default router;
