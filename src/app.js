import React, {lazy, Suspense, useEffect, useState} from "react";
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
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";

// Chunking / Code Splitting / Dynamic Bundling / lazy loading / on-demand loading
/*load js file only when user goes to that page */
// *lazy () -> Lets you defer loading a component’s code until it is rendered for the first time.
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
//functional component
const Applayout = () => {
  const[userName, setUserName] = useState('');
  //authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {name: ""}
    setUserName(data.name);
  },[]);  

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet /> 
    </div>
    </UserContext.Provider>
    </Provider>
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
    {path: "/restaurants/:resId", element: <RestaurantMenu />}, //*dynamic path using :resId (declared in RestaurantMenu.js) 
    {path :"/cartPage", element: <CartPage/>},
  ],
  errorElement: <Error/>},
]);
//* rendering by using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
/* On render function, it'll 'replace' the content of html element with id 'root' with the
content which we've created using React (JavaScript) */

//this how we render react functional components
// root.render(<Applayout />);