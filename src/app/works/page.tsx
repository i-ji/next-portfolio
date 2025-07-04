import React from "react";
import Works from "../features/works/Works";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Works",
  };
}

const page = () => {
  return <Works />;
};

export default page;
