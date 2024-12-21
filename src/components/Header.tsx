import { Briefcase, Contact, House, Presentation } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-72 my-10 border p-3 rounded-xl border-slate-800">
      <div className="">
        <h1 className="text-zinc-200 text-base tracking-wide px-3 py-2 bg-slate-950 border rounded-lg border-slate-800 hover:bg-zinc-800 cursor-pointer">
          @abhissh
        </h1>
      </div>
      <ul className="flex justify-between gap-6 items-center">
        <li className="flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-800 cursor-pointer hover:bg-zinc-800">
          <span>
            <House size={20} />
          </span>{" "}
          Home
        </li>
        <li className="flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-800 cursor-pointer hover:bg-zinc-800">
          <span>
            <Presentation size={20} />
          </span>{" "}
          Projects
        </li>
        <li className="flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-800 cursor-pointer hover:bg-zinc-800">
          <span>
            <Briefcase size={20} />
          </span>{" "}
          Work
        </li>
        <li className="flex gap-2 items-center text-sm font-medium tracking-wide px-3 py-2 border rounded-lg border-slate-800 cursor-pointer hover:bg-zinc-800">
          <span>
            <Contact size={20} />
          </span>{" "}
          Contact
        </li>
      </ul>
    </div>
  );
}
