import { Dot } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="my-8">
      <h1 className="flex justify-center items-center text-center text-slate-400 text-base">
        Developed with{" "}
        <span className="px-1 text-2xl font-semibold font-sans"> ♥ </span> by
        Abhishek{" "}
        <span className="font-bold">
          <Dot size={32} />
        </span>{" "}
        Deployed on Vercel.
      </h1>
    </div>
  );
}
