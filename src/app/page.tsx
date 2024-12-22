import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { CircleCheckBig } from "lucide-react";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactComponent from "@/components/ContactComponent";
export default function Page() {
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
    <div
      id="home"
      className="relative mt-28 sm:mt-32 mx-8 sm:mx-12 flex flex-col md:flex-row gap-12 justify-center items-start"
    >
      {/* Fixed Section */}
      <div className="flex flex-col gap-8 md:sticky md:top-32">
        <div className="md:max-w-80 w-full flex flex-col gap-2 p-4 border border-slate-700 rounded-xl ">
          <h1 className="text-xl font-bold text-gray-200">Abhishek Kumar</h1>
          <p className="text-slate-500 text-base tracking-wide leading-6">
            👋 Hi, I'm Abhishek, a MERN Fullstack developer hailing from
            Kolkata, India. With a focus on user experience and performance
            optimization, I strive to create seamless digital experiences. Let's
            connect and create something remarkable!
            <Link href="mailto:abhishekkr.ssh@gmail.com" target="_blank">
              <span className="px-4 underline text-slate-400">Mail Me</span>
            </Link>
          </p>
        </div>
        <div className=" hidden sm:flex justify-between gap-2 px-4 py-2 border border-slate-700 rounded-xl">
          {connects.map((ct) => (
            <Link key={ct.name} href={ct.link} target="_blank">
              <button className="px-3 py-2 text-2xl font-bold border border-slate-800 rounded-lg hover:bg-slate-800 ">
                <Icon icon={ct.icon} />{" "}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Scrolling Section */}
      <div className="lg:max-w-[32rem] w-full flex flex-col">
        <div className="flex flex-col justify-center items-start gap-4 pb-6 border-b-2 border-slate-700">
          <h1 className="text-2xl font-bold">Hi There! 👋</h1>
          <p className="text-base font-semibold text-slate-500">
            transforming entropy into code & realities.
          </p>
        </div>
        {/* Universal Browser Scroll */}
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <button
              className="flex items-center max-h-11 gap-2 md:px-4 px-2 py-2 bg-gray-100
             hover:bg-gray-300 text-slate-950 text-lg font-medium border border-slate-700 rounded-lg"
            >
              <span>
                <CircleCheckBig size={20} />
              </span>{" "}
              Get in Touch
            </button>
            <div className="flex flex-col gap-1 items-center">
              <h1 className="text-lg font-normal">1+ year</h1>
              <p className="text-sm text-slate-600">Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-normal">Kolkata, India</h1>
              <p className="text-sm text-slate-600">Location</p>
            </div>
          </div>
          <Skills />
          <Projects />
          <Work />
          <ContactComponent />
        </div>
      </div>
    </div>
  );
}
