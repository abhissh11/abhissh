import Link from "next/link";
import { Icon } from "@iconify/react";

import React from "react";

export default function ContactComponent() {
  const connects = [
    {
      link: "https://github.com/abhissh11",
      name: "Github",
      icon: "mdi:github",
    },
    {
      link: "https://www.linkedin.com/in/abhishekkr-dev/",
      name: "Linkedin",
      icon: "mdi:linkedin",
    },
    {
      link: "https://t.me/abhishek_dot",
      name: "telegram",
      icon: "uil:telegram",
    },
    { link: "https://x.com/abhissh_", name: "X", icon: "ri:twitter-x-fill" },
  ];
  return (
    <div id="contact" className="my-6">
      <h1 className="text-2xl font-bold pb-2 ">Contact</h1>
      <div className="flex gap-2 flex-col my-2 border rounded-xl border-slate-700">
        <div className="flex flex-col gap-1 items-start px-4 py-4">
          <p className="text-slate-500 text-base font-normal">
            Let's connect and create something remarkable!
          </p>
          <Link href="mailto:abhishekkr.ssh@gmail.com" target="_blank">
            <span className="text-slate-500 font-medium border-b border-slate-700 hover:text-slate-300">
              abhishekkr.ssh@gmail.com
            </span>
          </Link>
        </div>
        <div className="flex justify-start gap-6 border-t border-slate-700 p-4 ">
          {connects.map((ct) => (
            <Link href={ct.link} target="_blank">
              <button
                key={ct.name}
                className="px-3 py-2 text-2xl font-bold border border-slate-800 rounded-lg hover:bg-slate-800 "
              >
                <Icon icon={ct.icon} />{" "}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
