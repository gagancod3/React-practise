import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header.js"; //works same way as line below
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Chunking / Code Splitting / Dynamic Bundling / lazy loading / on-demand loading
/*load js file only when user goes to that page */
// *lazy () -> Lets you defer loading a component’s code until it is rendered for the first time.
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));


//functional component
const Applayout = () => {
  // console.log(<Body />); 
  return (
    <div className="app">
      <Header />
      <Outlet /> 
    </div>
  );
};
// Outlet is used to render children of the component it's used in, here it's 'Applayout'
/* children component will replace the outlet (line:18) as per the path */
const appRouter = createBrowserRouter([
  { path: "/", element: <Applayout />,
  children: [
    {path: "/", element: <Body />},
    { path: "/about", element: <Suspense fallback={<h2>loading...</h2>} ><About /></Suspense> },
    // { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    //*<Suspense> - lets you display a fallback until its children have finished loading
    { path: "/grocery", element: <Suspense fallback={<h2>loading...</h2>} ><Grocery /></Suspense> },
    {path: "/restaurants/:resId", element: <RestaurantMenu />} //*dynamic path using :resId (declared in RestaurantMenu.js) 
  ],
  errorElement: <Error/>},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//this how we render react functional components
// root.render(<Applayout />);