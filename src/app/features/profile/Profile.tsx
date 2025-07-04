"use client";

import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { profileList } from "@/list/profileList";
import PageLayout from "../PageLayout";

const About = () => {
  const subjects = ["#title", "#table", "#back"];

  const contentSlot = (
    <>
      <div className="pb-10">
        <Table id="table" className="bg-white/95 text-sm text-center">
          <TableBody>
            {profileList.map((profile) => {
              return (
                <TableRow key={profile.firstAnswer}>
                  <TableCell className="bg-gray-200 w-1/4">
                    {profile.firstQuestion}
                  </TableCell>
                  <TableCell className="w-1/4">{profile.firstAnswer}</TableCell>
                  <TableCell className="bg-gray-200 w-1/4">
                    {profile.lastQuestion}
                  </TableCell>
                  <TableCell className="w-1/4">{profile.lastAnswer}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="text-center pb-20 text-lg" id="back">
        <Link href={"/about"}>戻る</Link>
      </div>
    </>
  );

  return (
    <PageLayout title="Profile" contentSlot={contentSlot} subjects={subjects} />
  );
};

export default About;
