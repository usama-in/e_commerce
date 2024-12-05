import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Home from "./pages/Home";
import Root from "./Root";
import Bags from "./categories/Bags";
import Sneakers from './categories/Sneakers'
import Belt from './categories/Belt'
import Sunglasses from './categories/Sunglases'
import Contact from './pages/Contact'
import { fetchData } from "./store/fetchData";
import { bagActions } from "./store/bagSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
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
const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchData())
  },[])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
