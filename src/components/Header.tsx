"use client";
import { Briefcase, Contact, House, Presentation } from "lucide-react";
import React from "react";

export default function Header() {
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed  sm:pt-6 top-0 z-30 bg-slate-950 w-full flex justify-center items-center">
      <div className=" flex gap-2 justify-between items-center w-[55rem] border-b sm:border p-3 sm:rounded-xl border-slate-700">
        <div className="">
          <h1
            onClick={() => scrollToSection("home")}
            className="text-zinc-200 text-base tracking-wide max-w-24 px-2 py-2 bg-zinc-950 border rounded-lg border-slate-700 hover:bg-gray-800 cursor-pointer"
          >
            @abhissh
          </h1>
        </div>
        <ul className=" flex justify-between gap-3 sm:gap-6 items-center">
          <li
            onClick={() => scrollToSection("home")}
            className="text-slate-200 flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-700 cursor-pointer hover:bg-gray-800"
          >
            <span>
              <House size={20} />
            </span>{" "}
            <span className="hidden sm:block">Home</span>
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className="text-slate-200 flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-700 cursor-pointer hover:bg-gray-800"
          >
            <span>
              <Presentation size={20} />
            </span>{" "}
            <span className="hidden sm:block">Projects</span>
          </li>

          <li
            onClick={() => scrollToSection("work")}
            className="text-slate-200 flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-700 cursor-pointer hover:bg-gray-800"
          >
            <span>
              <Briefcase size={20} />
            </span>{" "}
            <span className="hidden sm:block">Work</span>
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="text-slate-200 flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-700 cursor-pointer hover:bg-gray-800"
          >
            <span>
              <Contact size={20} />
            </span>{" "}
            <span className="hidden sm:block">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
