import React from "react";
import About from "../features/about/About";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - About",
  };
}

const page = () => {
  return <About />;
};

export default page;
