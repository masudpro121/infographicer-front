import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { createContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// Router 
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

// App Started 
export const MyContext = createContext()
function App() {
  const contextValue = {

  }
  return (
    <RouterProvider router={router} >
      <MyContext.Provider value={contextValue} />
    </RouterProvider>
  );
}

export default App;
