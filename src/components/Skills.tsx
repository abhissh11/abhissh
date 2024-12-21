import React from "react";
import { Icon } from "@iconify/react";
import { IconifyIcon } from "./../../node_modules/@iconify/types/types.d";

export default function Skills() {
  const skill = [
    { id: 2, name: "C++", icon: "logos:c-plusplus" },
    { id: 3, name: "JavaScript", icon: "logos:javascript" },
    { id: 4, name: "TypeScript", icon: "logos:typescript-icon" },
    { id: 6, name: "Python", icon: "logos:python" },
    { id: 5, name: "HTML5", icon: "logos:html-5" },
    { id: 7, name: "ReactJS", icon: "logos:react" },
    { id: 8, name: "NextJS", icon: "skill-icons:nextjs-light" },
    { id: 9, name: "NodeJS", icon: "logos:nodejs-icon" },
    { id: 10, name: "ExpressJS", icon: "simple-icons:express" },
    { id: 111, name: "CSS", icon: "catppuccin:css" },
    { id: 11, name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { id: 12, name: "Bootstrap", icon: "logos:bootstrap" },
    { id: 13, name: "MongoDB", icon: "skill-icons:mongodb" },
    { id: 14, name: "Postgres", icon: "logos:postgresql" },
    { id: 15, name: "Firebase", icon: "devicon:firebase" },
    { id: 16, name: "Git", icon: "devicon:git" },
    { id: 17, name: "AWS", icon: "skill-icons:aws-dark" },
    { id: 18, name: "Docker", icon: "logos:docker-icon" },
  ];
  return (
    <div className="">
      <h1 className="text-2xl font-bold  pb-2 w-fit ">Skills</h1>
      <div className="my-4 flex gap-4 flex-wrap">
        {skill.map((sk) => (
          <div key={sk.id} className="">
            <button
              className="flex gap-2 items-center px-2 py-2 border border-slate-700 rounded-md
            hover:bg-slate-800
            "
            >
              <Icon icon={sk.icon} /> {sk.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
