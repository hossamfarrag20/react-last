import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./MyComponantes/About/About";
// import Portfolio from "./MyComponantes/Portfolio/Portfolio";
import Contact from "./MyComponantes/Contact/Contact";
import Navbar from "./MyComponantes/NaveBar/Navbar";
import Footer from "./MyComponantes/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./MyComponantes/Layout/Layout";
import Display from "./MyComponantes/displayimages/Display";
import Home from "./MyComponantes/Home/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "react-last/", element: <Home /> },
      { path: "react-last/home", element: <Home /> },
      { path: "react-last/about", element: <About /> },
      { path: "react-last/contact", element: <Contact /> },
      { path: "react-last/portfolio", element: <Display /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
