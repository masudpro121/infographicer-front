import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { createContext } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';

// Router 
const router = createBrowserRouter([
  { path: "/", element: <Home/> },
]);

// App Started 
export const MyContext = createContext()
function App() {
  const contextValue = {

  }
  return (
    <div className="app">
      <RouterProvider router={router} >
      <MyContext.Provider value={contextValue} />
    </RouterProvider>
    </div>
  );
}

export default App;
