import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const project = [
    {
      id: 1,
      title: "BlogSphere",
      link: "https://github.com/abhissh11/BlogSphere",
      stack: [
        "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Flowbite",
      ],
      description:
        "BlogSphere is a platform where admins can share blogs and can manage their interactions.",
    },
    {
      id: 2,
      title: "PsycheMaster",
      link: "https://PsycheMaster.vercel.app/",
      stack: ["TypeScript, NextJS, MongoDB, Tailwind CSS, jwt"],
      description:
        "PsycheMaster is a platform for psychological counseling with a user-friendly interface.",
    },
    {
      id: 3,
      title: "RecruiTrack",
      link: "https://recruitrack.vercel.app",
      stack: ["TypeScript, NextJS, MongoDB, Tailwind CSS, magicUI"],
      description:
        "RecruiTrack helps recruiters manage applicant data efficiently.",
    },
    {
      id: 4,
      title: "OppNex",
      link: "https://opportunext.vercel.app",
      stack: ["JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS"],
      description:
        "OppNex is a job and opportunity tracking platform for teams and individuals.",
    },
    {
      id: 5,
      title: "FundBux",
      link: "https://github.com/abhissh11/fundbux",
      stack: [
        "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, RazorPay",
      ],
      description:
        "FundBux is a crowdfunding platform with integrated payment solutions.",
    },
  ];

  return (
    <div id="#projects" className=" min-h-screen">
      <h1 className="text-2xl font-bold pb-2 ">Projects</h1>
      <div className="mt-6 flex flex-col gap-8">
        {project.map((pj) => {
          const tech = pj.stack[0].split(", ");
          return (
            <div
              key={pj.id}
              className="border rounded-xl p-4 border-slate-700 hover:bg-slate-800 cursor-pointer transition-all duration-150 hover:-translate-y-0"
            >
              <Link href={pj.link} target="_blank">
                <div className="flex gap-2 items-start">
                  <h1 className="text-xl font-semibold">{pj.title}</h1>
                  <ExternalLink size={20} />
                </div>
                <p className="text-base text-slate-500">{pj.description}</p>
              </Link>
              <div className="flex flex-wrap gap-2 pt-2">
                {tech.map((st, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm font-thin rounded-full hover:bg-slate-700 border border-slate-700"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
