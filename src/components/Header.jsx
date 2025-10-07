import React, { useEffect, useState } from "react";

export default function Header({ theme, setTheme }) {
  const [active, setActive] = useState("home");
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, threshold: 0.45 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // useEffect(() => {
  //   if (isDarkMode) document.documentElement.classList.add("theme-dark");
  //   else if (theme !== "dark")
  //     document.documentElement.classList.remove("theme-dark");
  // }, [isDarkMode, theme]);

  const handleNav = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">
            <a
              href="#home"
              className={`nav-link cursor-pointer`}
              onClick={() => handleNav("home")}
            >
              Md Mahedi Hassan
            </a>
          </div>
          {/* <div className="hidden md:flex items-center gap-2">
            <button className={`theme-pill ${theme==='minimal'?'bg-white':''}`} onClick={() => setTheme('minimal')}>Minimal</button>
            <button className={`theme-pill ${theme==='dark'?'bg-white':''}`} onClick={() => setTheme('dark')}>Dark</button>
            <button className={`theme-pill ${theme==='gradient'?'bg-white':''}`} onClick={() => setTheme('gradient')}>Gradient</button>
            <button className={`theme-pill ${theme==='card'?'bg-white':''}`} onClick={() => setTheme('card')}>Card</button>
          </div> */}
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#about"
            className={`nav-link cursor-pointer`}
            onClick={() => handleNav("about")}
          >
            About
          </a>
          <a
            href="#experience"
            className={`nav-link cursor-pointer`}
            onClick={() => handleNav("experience")}
          >
            Experience
          </a>

          <a
            href="#projects"
            className={`nav-link cursor-pointer`}
            onClick={() => handleNav("projects")}
          >
            Projects
          </a>

          <a
            href="#skills"
            className={`nav-link cursor-pointer`}
            onClick={() => handleNav("skills")}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`nav-link cursor-pointer `}
            onClick={() => handleNav("contact")}
          >
            Contact
          </a>
          {/* 
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-3 py-1 border rounded"
          >
            Toggle Dark
          </button> */}
        </nav>
      </div>
    </header>
  );
}
