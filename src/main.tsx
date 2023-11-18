import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import UsersIndex from './pages/users/Index.tsx'
import './index.css'
import UsersShow from './pages/users/Show.tsx'
import MemoriesShow from './pages/memories/Show.tsx'
import Create from './pages/memories/Create.tsx'
import AuthContextProvider from './contexts/AuthContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersIndex />,
  },
  {
    path: '/users',
    element: <UsersIndex />,
  },
  {
    path: '/users/:id',
    element: <UsersShow />
  },
  {
    path: '/memories/:id',
    element: <MemoriesShow />
  },
  {
    path: '/memories/create',
    element: <Create />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
)
