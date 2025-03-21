import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: (
      <h1 className="text-3xl font-bold underline">Males kerjain ini dev!</h1>
    ),
  },
]);
