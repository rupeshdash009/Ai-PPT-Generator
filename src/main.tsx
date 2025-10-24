import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Workspace from "./workspace/Workspace.tsx";

import { UserDetailContext } from "../context/UserDetailContext.tsx";
import Outline from "./workspace/project/outline/outline.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/workspace",
    element: <Workspace />,
    children: [{ path: "project/:projectId/outline", element: <Outline/>}],
  },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
function Root() {
  const [userDeatil, setUserDeatail] = useState();
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <UserDetailContext.Provider value={{userDeatil, setUserDeatail}}>
        <RouterProvider router={router} />
      </UserDetailContext.Provider>
    </ClerkProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
