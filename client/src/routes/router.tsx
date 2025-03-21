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
      <h1 className="text-3xl font-bold underline">Jangan pencet-pencet, males ngerjainnya</h1>
    ),
  },
]);
