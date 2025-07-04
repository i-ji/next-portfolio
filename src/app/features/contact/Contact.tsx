"use client";

import PageLayout from "../PageLayout";

const Works = () => {
  const subjects = ["#title", "#form"];

  const contentSlot = (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSepmJkcCwStl0FguOYEr3t2HGKmjGDg_il9uXQ9p8MaqLJNrg/viewform?embedded=true"
      className="w-full overflow-hidden pb-10 h-[850px]"
      id="form"
    >
      読み込んでいます…
    </iframe>
  );

  return (
    <PageLayout title="Contact" contentSlot={contentSlot} subjects={subjects} />
  );
};

export default Works;
