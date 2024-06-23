import React from "react";
import Skill from "../components/Skill";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Skill",
  };
}

const page = () => {
  return (
    <div>
      <Skill />
    </div>
  );
};

export default page;
