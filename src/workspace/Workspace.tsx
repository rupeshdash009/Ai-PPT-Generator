import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FirebaseDb } from "./../../config/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

function Workspace() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  },[user])

  const CreateNewUser = async() => {
    if (user) {
      const docRef = doc(
        FirebaseDb,
        "users",
        user?.primaryEmailAddress?.emailAddress??'');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        await setDoc(doc(FirebaseDb,"user", 
          user.primaryEmailAddress?.emailAddress??''),{
            fullName:user?.fullName,
            createdAt:new Date(),
            credits:2,

        })
        
      }
    }
  };

  if (!user) {
    return (
      <div>
        Please sign in to access the workshop,
        <Link to="/">
          <Button>sing in</Button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Outlet />
      <h2>Workspace</h2>
    </div>
  );
}

export default Workspace;
