import React from "react";
import Works from "../components/Works";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Works",
  };
}

const page = () => {
  return (
    <div>
      <Works />
    </div>
  );
};

export default page;
