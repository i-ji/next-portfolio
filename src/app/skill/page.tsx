import React from "react";
import Skill from "../features/skill/Skill";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Skill",
  };
}

const page = () => {
  return <Skill />;
};

export default page;
