import './App.css';
import { Button } from 'react-bootstrap';
import { createContext, useState } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import GeneratePdfViewer from './components/GeneratePdf/GeneratePdf';
import { Signin, Signup } from './components/Auth/Auth';

// Router 
const router = createBrowserRouter([
  { path: "/documentation", element: <GeneratePdfViewer/> },
  { path: "/signup", element: <Signup/> },
  { path: "/signin", element: <Signin/> },
  { path: "/", element: <Home/> },
]);

// App Started 
export const MyContext = createContext()
function App() {
  const [outputs, setOutputs] = useState([]);
  const contextValue = {
    outputs, setOutputs
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
