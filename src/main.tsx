import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'
import Workspace from './workspace/Workspace.tsx'
import Project from './workspace/project/project.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: '/workspace', element: <Workspace/>,
    children:[
      {path:"project/:projectId", element: <Project/>}
    ]
  }
  
])
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
       <RouterProvider router={router}/>
      </ClerkProvider>
    
  </StrictMode>,
)
