import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from "./MainLayOut";
import AboutSection from "./AboutSection";
import Projects from "./Projects";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>
  },
  {
    path: "/About",
    element:<AboutSection></AboutSection>
  },
  {
    path: "/Projects",
    element: <Projects></Projects>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
