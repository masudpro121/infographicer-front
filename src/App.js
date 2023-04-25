import './App.css';
import { Button } from 'react-bootstrap';
import { createContext, useContext, useEffect, useState } from 'react';
import {createBrowserRouter, createHashRouter, Navigate, RouterProvider, useNavigate} from "react-router-dom";
import GeneratePdfViewer from './components/GeneratePdf/GeneratePdf';
import { Signin, Signup } from './components/Auth/Auth';
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';
import { validate } from './apis/server';
import { getCookie } from './utils/cookie';

// Router 



// App Started 
export const MyContext = createContext()
function App() {
  const [outputs, setOutputs] = useState([]);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextValue = {
    outputs, setOutputs,
    currentProjectPage, setCurrentProjectPage,
    isLoggedIn, setIsLoggedIn
  }


  const router = createHashRouter([
    { path: "/documentation", element: <GeneratePdfViewer/> },
    { path: "/signup", element: <Signup/> },
    { path: "/signin", element: <Signin/> },
    { path: "/projects", element: <Protected isLoggedIn={isLoggedIn}><Projects /></Protected> },
    { path: "/", element: <Protected isLoggedIn={isLoggedIn}><Home/></Protected> },
  ]);
  
  return (
    <div className="app">
        <MyContext.Provider value={contextValue} >
        <RouterProvider router={router} ></RouterProvider>
        </MyContext.Provider>
      {/* <RouterProvider router={router} >
        <MyContext.Provider value={contextValue} />
      </RouterProvider> */}
    </div>
  );
}

export default App;


function Protected(props){
  const {isLoggedIn, setIsLoggedIn} = useContext(MyContext)
  const navigate = useNavigate()

  
  if(!getCookie('user')){
    return <Navigate to="/signin"  replace/>;
  }else{
    return props.children
  }
}