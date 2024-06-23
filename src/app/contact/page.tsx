import React from "react";
import Contact from "../components/Contact";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Contact",
  };
}

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
