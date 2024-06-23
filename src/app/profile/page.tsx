import React from "react";
import Profile from "../components/Profile";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Profile",
  };
}

const page = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default page;
