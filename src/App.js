import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantManu from "./components/RestaurantManu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Chunking
// Code Splitting
// Dynamic Bundling 
// Lazy Loading
// On Demand Loading
// Dynamic import
// this is a way distributing our application in smaller chuks with the help of lazy loading it makes out app much mcuh faster

const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))

const AppLayout = () => {

  
  const [userName,setUserName] = useState()
  
  // Authentication

  useEffect(()=>{

    // Make API call and send username and password

    const data = {
      name:"Akshay Saini"
    }
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>

    <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
    <div>
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
  return (  
    <div>
      <UserContext.Provider value={{loggedInUser : userName}}>
      <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
  );
  return (
    <>
    {/* out side default value */}
    <UserContext.Provider value={{loggedInUser : userName}}>
      {/* here akshay saini */}
    <div>
    <UserContext.Provider value={{loggedInUser : "Elon Musk"}}>
      {/* here Elon ,musk  */}
      <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> },
      { path: "/restaurants/:resId", element: <RestaurantManu/> },
      { path: "/cart", element: <Cart/> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
