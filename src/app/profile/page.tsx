import React from "react";
import Profile from "../features/profile/Profile";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Profile",
  };
}

const page = () => {
  return <Profile />;
};

export default page;
