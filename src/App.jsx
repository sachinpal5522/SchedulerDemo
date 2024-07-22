import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Calender, Summery, HomeLayout, Error, Welcome } from "./pages";

import { Loader as CalenderLoader } from "./pages/Calender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "calender",
        element: <Calender />,
        loader: CalenderLoader,
      },
      {
        index: true,
        path: "summery",
        element: <Summery />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
