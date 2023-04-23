import './App.css';
import { Button } from 'react-bootstrap';
import { createContext, useState } from 'react';
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import GeneratePdfViewer from './components/GeneratePdf/GeneratePdf';
import { Signin, Signup } from './components/Auth/Auth';
import Projects from './pages/Projects/Projects';

// Router 
const router = createHashRouter([
  { path: "/documentation", element: <GeneratePdfViewer/> },
  { path: "/signup", element: <Signup/> },
  { path: "/signin", element: <Signin/> },
  { path: "/projects", element: <Projects/> },
  { path: "/", element: <Home/> },
  { path: "*", element: <Home/> },
]);

// App Started 
export const MyContext = createContext()
function App() {
  const [outputs, setOutputs] = useState([]);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const contextValue = {
    outputs, setOutputs,
    currentProjectPage, setCurrentProjectPage
  }
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
