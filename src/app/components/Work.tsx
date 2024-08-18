import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaGithub } from "react-icons/fa";

interface WorkType {
  img: string;
  url: string;
  title: string;
  skill: string;
  desc: string;
  gitHubUrl: string;
}

const Work = ({ img, url, title, skill, desc, gitHubUrl }: WorkType) => {
  return (
    <div className="w-full md:w-[49%] mb-2" id={img}>
      <Dialog>
        <div className="text-center">
          <DialogTrigger>
            <Image
              src={`/img/${img}.jpeg`}
              alt={title}
              width={360}
              height={360}
              className="w-full object-cover"
            />
          </DialogTrigger>
        </div>
        <DialogContent className="bg-white/95">
          <DialogHeader>
            <Link href={url} target="_blank">
              <Image
                src={`/img/${img}.jpeg`}
                alt={title}
                width={360}
                height={360}
                className="w-full object-cover"
              />
            </Link>
            <DialogTitle className="text-center text-2xl my-1">
              {title}
            </DialogTitle>
            <DialogDescription className="text-center font-thin">
              {skill}
            </DialogDescription>
          </DialogHeader>
          <p>{desc}</p>

          <Link href={gitHubUrl} target="_blank" className="text-3xl ml-auto">
            <FaGithub />
          </Link>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Work;
