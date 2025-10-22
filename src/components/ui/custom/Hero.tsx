import React from "react";
import { Button } from "../button";
import { useUser, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { HeroVideoDialog } from "../hero-video-dialog";

function Hero() {
  const { user } = useUser();

  return (
    <div
      className="relative flex flex-col items-center justify-center px-6 py-20  min-h-[90vh] text-center
                 bg-linear-to-br from-[#f5f7fa] via-[#e6ecff] to-[#dfe9f3] text-gray-900 overflow-hidden"
    >
      {/* ✨ Soft glowing pastel blobs */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>

      {/* 🌈 Title */}
      <h2 className="relative z-10 font-bold text-5xl md:text-6xl font-logo tracking-wide">
        From Idea to{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Presentation
        </span>{" "}
        in One Click ⚡
      </h2>

      {/* 💬 Subtitle */}
      <p className="relative z-10 mt-6 text-xl text-gray-600 max-w-2xl">
        Generate sleek, editable PPT decks in minutes. Let AI design, format, and
        visualize — so you can focus on ideas that matter.
      </p>

      {/* 🚀 Buttons */}
      <div className="relative z-10 mt-10">
        {!user ? (
          <SignInButton mode="modal">
            <Button
              size="lg"
              className="bg-linear-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90"
            >
              Get Started
            </Button>
          </SignInButton>
        ) : (
          <Link to="/workspace">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90"
            >
              Go to Workspace
            </Button>
          </Link>
        )}
      </div>

      {/* 🎥 Video Section */}
      <div className="relative z-10 max-w-3xl mt-16">
        <h2 className="my-4 text-gray-700">Watch how to create AI PPT</h2>
        <HeroVideoDialog
          className="block"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}

export default Hero;
