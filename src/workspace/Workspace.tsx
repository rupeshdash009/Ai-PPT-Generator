import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useContext, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FirebaseDb } from "./../../config/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserDetailContext } from "../../context/UserDetailContext";
import Header from "@/components/ui/custom/Header";
import PromptBox from "@/components/ui/custom/PromptBox";
import MyProject from "@/components/ui/custom/MyProject";

function Workspace() {
  const { user } = useUser();
  const { userDeatil, setUserDeatail } = useContext(UserDetailContext);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  }, [user]);

  const CreateNewUser = async () => {
    if (user) {
      const docRef = doc(
        FirebaseDb,
        "users",
        user?.primaryEmailAddress?.emailAddress ?? ""
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserDeatail(docSnap.data());
      } else {
        const data = {
          fullName: user?.fullName,
          createdAt: new Date(),
          credits: 2,
        };
        await setDoc(
          doc(FirebaseDb, "users", user.primaryEmailAddress?.emailAddress ?? ""),
          data
        );
        setUserDeatail(data);
      }
    }
  };

  if (!user) {
    return (
      <div>
        Please sign in to access the workspace,
        <Link to="/">
          <Button>Sign in</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header always visible */}
      <Header />

      {/* Page content below header */}
      <div className="flex-1 p-6">
        {location.pathname === "/workspace" ? (
          <>
            <PromptBox />
            <MyProject />
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Workspace;
