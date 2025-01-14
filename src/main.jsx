import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import Landing from "./pages/Landing.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import Album from "./pages/Album.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Playlist from "./pages/Playlist.jsx";
import Profile from "./pages/Profile.jsx";
import SearchPage from "./pages/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Landing />,
      },
      {
        path: "/home",
        element: (
          <AuthLayout>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/albums/:slug",
        element: <Album />,
      },
      {
        path: "/playlists/:slug",
        element: <Playlist />,
      },
      {
        path: "/profile/:slug",
        element: (
          <AuthLayout>
            <Profile />
          </AuthLayout>
        ),
      },
      {
        path: "/search",
        element: (
          <AuthLayout>
            <SearchPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
