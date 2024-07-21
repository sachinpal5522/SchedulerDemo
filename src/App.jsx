import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Calender, Summery, HomeLayout, Error, Welcome } from "./pages";

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
