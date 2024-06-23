import React from "react";
import About from "../components/About";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - About",
  };
}

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
