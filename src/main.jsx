import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Introduction from './pages/Introduction'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Analysis from './pages/Analysis.jsx'
import Reference from './pages/Reference.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>
  },
  {
    path: "/introduction",
    element: <Introduction />,
    errorElement: <div>Error</div>
  },
  {
    path: "/analysis",
    element: <Analysis />,
    errorElement: <div>Error</div>
  },
  {
    path: "/reference",
    element: <Reference />,
    errorElement: <div>Error</div>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
