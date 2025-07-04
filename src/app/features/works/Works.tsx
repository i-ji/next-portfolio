"use client";

import Work from "./Work";
import { workList } from "@/list/workList";
import PageLayout from "../PageLayout";

const Works = () => {
  const subjects = [
    "#title",
    "#work1",
    "#work2",
    "#work3",
    "#work4",
    "#work5",
    "#work6",
    "#work7",
  ];

  const contentSlot = (
    <div className="md:flex md:flex-wrap md:justify-between">
      {workList.map((work) => {
        return (
          <Work
            key={work.id}
            id={work.id}
            img={work.img}
            url={work.url}
            title={work.title}
            skill={work.skill}
            desc={work.desc}
            gitHubUrl={work.gitHubUrl}
          />
        );
      })}
    </div>
  );

  return (
    <PageLayout title="Works" contentSlot={contentSlot} subjects={subjects} />
  );
};

export default Works;
