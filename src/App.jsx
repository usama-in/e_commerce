import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Root from "./Root";
import Bags from "./categories/Bags";
import Sneakers from './categories/Sneakers'
import Belt from './categories/Belt'
import Sunglasses from './categories/Sunglases'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/bags", element: <Bags /> },
      { path: "category/sneakers", element: <Sneakers /> },
      { path: "category/Belt", element: <Belt /> },
      { path: "category/Sunglasses", element: <Sunglasses /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
