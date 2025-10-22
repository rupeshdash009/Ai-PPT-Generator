import React from "react";
import { Button } from "../button";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Header() {
  const { user } = useUser();

  return (
    <header
      className="relative flex items-center justify-between px-10 py-4 
                 backdrop-blur-xl bg-white/60 border-b border-white/30 
                 shadow-lg text-gray-900 sticky top-0 z-50 overflow-hidden"
    >
      {/* ✨ Soft glowing AI blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>

      {/* 🌈 Gradient Text Logo */}
      <h1
        className="relative z-10 text-3xl font-extrabold font-logo tracking-wide 
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Neura<span className="text-gray-800">Slide</span>
      </h1>

      {/* 👤 User / Auth Buttons */}
      <div className="relative z-10 flex items-center gap-5">
        {!user ? (
          <SignInButton mode="modal">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90">
              Get Started
            </Button>
          </SignInButton>
        ) : (
          <>
            <UserButton />
            <Link to="/workspace">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90">
                Go To Workspace
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
