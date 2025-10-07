import React from "react";

export default function Hero() {
  return (
    <section id="home" className="py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Md Mahedi Hassan
          </h1>
          <p className="mt-3 text-lg text-muted">
            Software Engineer — React, Next.js, Node.js
          </p>

          <div className="mt-6 flex gap-3">
            <a
              // href="mailto:mmahedi49@gmail.com"
              href="#contact"
              className="px-4 py-2 bg-slate-400 text-white rounded shadow-sm"
            >
              Email me
            </a>
            <a
              href="https://drive.google.com/file/d/10byv4u-59brdMudrKYczEPvJXaaKn49U/view"
              className="px-4 py-2 border-2 rounded"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="w-56 h-56 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
