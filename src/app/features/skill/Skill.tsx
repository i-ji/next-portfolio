"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillList } from "@/list/skillList";
import PageLayout from "../PageLayout";

const Skill = () => {
  const subjects = ["#title", "#skill1", "#skill2", "#skill3"];

  const contentSlot = (
    <>
      {skillList.map((skill) => {
        return (
          <Card
            className="bg-white/95 shadow mb-6"
            id={skill.id}
            key={skill.id}
          >
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{skill.content}</p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );

  return (
    <PageLayout title="Skill" contentSlot={contentSlot} subjects={subjects} />
  );
};

export default Skill;
