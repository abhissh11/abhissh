import { CalendarFold } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Work() {
  const exp = [
    {
      id: 1,
      title: "Synergy Labs",
      img: "/images/synlabs.jpeg",
      role: "Frontend Development Intern",
      duration: "July, 2024 - Oct, 2024",
      description:
        "I worked closely collaborating with the design team to translate UI/UX designs into responsive and high-performance user interfaces using Next.js and React, ensuring seamless functionality and visual appeal.",
    },
    {
      id: 2,
      title: "Freelance Work",
      img: "/images/lancer.jpeg",
      role: "MERN WebApp Development",
      duration: "Nov, 2024 - Dec, 2024",
      description:
        "Worked for PsycheMaster to develop their webapp focussed to client for concurrent counseling slot booking; worked with Memoweries to develop backend servers / restAPIs for their partner and clients.  ",
    },
    {
      id: 3,
      title: "NSEC",
      img: "/images/nsec-logo.png",
      role: "Student",
      duration: "Nov, 2024 - June, 2025",
      description:
        "Pursuing B.tech in Computer Science and Business System from Netaji Subhash Engineering College , Kolkata.",
    },
  ];
  return (
    <div id="#work" className="my-6">
      <h1 className="text-2xl font-bold pb-2 ">Work</h1>
      <div className="mt-4 flex flex-col gap-2 border border-slate-700 px-2 pt-4 rounded-xl">
        {exp.map((exp) => (
          <div className="mx-4 sm:mx-6 py-2 gap-2 cursor-pointer pb-4 transition-all duration-150 border-b border-slate-700">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex gap-2 items-center">
                <Image
                  src={exp.img}
                  alt={exp.title}
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <h1 className="text-lg font-bold text-slate-200">
                  {exp.title}
                </h1>
              </div>
              <button className="flex items-center text-sm gap-1 px-2 sm:px-3 py-2 border border-slate-700 rounded-xl">
                <span>
                  {" "}
                  <CalendarFold size={20} />{" "}
                </span>
                {exp.duration}
              </button>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <h2 className="text-slate-400">{exp.role}</h2>
              <p className="text-slate-500 text-base font-normal">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
