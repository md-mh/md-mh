import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("card"); // minimal, dark, gradient, card
  const rootRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes then add selected
    root.classList.remove("theme-dark", "theme-gradient", "theme-card");
    if (theme === "dark") root.classList.add("theme-dark");
    if (theme === "gradient")
      root.classList.add("theme-gradient", "bg-theme-gradient");
    if (theme === "card") root.classList.add("theme-card");
    // minimal => default vars
  }, [theme]);

  //  github-token: ${{ secrets.GITHUB_TOKEN }}
  //  NETLIFY_AUTH_TOKEN: nfp_kEoxCJQkm8mtQ1zpFgW5UXXHbhee3KHB1574
  //  NETLIFY_SITE_ID: d4692f94-9979-459c-9c6d-4faa2a41ded9

  return (
    <div ref={rootRef} className="min-h-screen flex flex-col">
      <Header theme={theme} setTheme={setTheme} />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
