import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './App.css';
import './App';

// Context

// Routing
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// Routes
import Root from './routes/root';
import Index from './routes';
import ErrorPage from './error-page';



// pages (includes)



// collections




const router=createBrowserRouter([  
  {
  path:"/",
    element:<Root />,
    errorElement:<ErrorPage />,
children:[
    {index:true,element: <Index />},
 
   

  ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <React.StrictMode>
 

    <RouterProvider router={router} />
 
   
  </React.StrictMode>


);

