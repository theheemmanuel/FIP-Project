import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Navigate replace to="/" />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
