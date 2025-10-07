import React from "react";

export default function Projects() {
  // const projects = [
  //   {
  //     title: "Chatuapp - AI-powered chat application",
  //     desc: "AI-powered chat application",
  //     link: "https://chatuapp.com/",
  //   },
  //   {
  //     title: "Lead and Event Management System",
  //     desc: "Lead and Event Management System",
  //     link: "https://lead.uapp.uk/",
  //   },
  //   {
  //     title: "UAPP - University Application System",
  //     desc: "University application management platform (SaaS)",
  //     link: "https://uapp.uk/",
  //   },
  //   {
  //     title: "Exhort Design - E-commerce website development and optimization",
  //     desc: "E-commerce website development and optimization",
  //     link: "https://exhortdesign.com/",
  //   },
  //   {
  //     title: "UAPP - University application management platform (SaaS)",
  //     desc: "University application management platform (SaaS)",
  //     link: "https://portal.uapp.uk/",
  //   },
  //   {
  //     title: "Umoja Microfinance - Digital microfinance solution",
  //     desc: "Digital microfinance solution",
  //     link: "https://mfug.umoja-international.com/Auth/Account/Login",
  //   },
  // ];

  const projects = [
    {
      title: "Chatuapp - AI-powered Chat Application",
      desc: "A real-time, AI-driven chat platform designed for universities and students. Features GPT-like AI assistance, real-time messaging and custom bot create, training and sharing.",
      link: "https://chatuapp.com/",
    },
    {
      title: "Lead and Event Management System (UAPP LMS)",
      desc: "A comprehensive system to manage leads, events, and student engagement for educational consultants. Includes a custom form builder, event tracking and CRM-style workflow automation.",
      link: "https://lead.uapp.uk/",
    },
    {
      title: "UAPP - Website and Portal",
      desc: "A global SaaS platform for managing university applications, connecting 180+ universities, 7,000+ students, and 650+ consultants. Provides real-time tracking, document verification, and application management.",
      link: "https://uapp.uk/",
    },
    {
      title: "HR Care - HR Management System",
      desc: "HR Care is a web-based Human Resource Management System that helps organizations manage daily HR operations such as attendance, leave requests, payroll, employee ID cards, and task assignments.",
      link: "https://hr-care-management.netlify.app",
    },
    {
      title: "Exhort Design - E-commerce Website",
      desc: "A modern, high-performance e-commerce website optimized for better SEO. Built with responsive design, smooth UI/UX, and dynamic product management to enhance the online shopping experience.",
      link: "https://exhortdesign.com/",
    },
    {
      title: "Umoja Microfinance - Digital Microfinance Solution",
      desc: "A fintech solution for managing microfinance operations digitally. Includes customer onboarding, loan tracking, payment management, and reporting modules to simplify financial operations for microfinance institutions.",
      link: "https://mfug.umoja-international.com/Auth/Account/Login",
      // link: "https://sobhisab.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="pt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">Recent Projects</h2>
        <p className="text-gray-600">
          A selection of recent projects I've built or contributed to,
          showcasing experience with SaaS platforms, AI, e-commerce, and digital
          solutions.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6 h-full">
          {projects.map((p, idx) => (
            <a
              key={p.title}
              href={p.link}
              className="project-card card p-4 transform-gpu hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: `${idx * 80}ms` }}
              target="_blank"
            >
              {p.link && (
                <div className="w-full h-[400px] mb-3 rounded">
                  <iframe
                    title={`${p.title} preview`}
                    src={p.link}
                    className="w-full h-full mb-3 rounded"
                    loading="lazy"
                    style={{ overflow: "hidden" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      const img = document.createElement("img");
                      img.src = `https://www.google.com/s2/favicons?domain=${
                        new URL(p.link).hostname
                      }`;
                      img.alt = `${p.title} preview image`;
                      img.className =
                        "w-full h-full mb-3 rounded object-contain bg-gray-100";
                      e.target.parentNode.appendChild(img);
                    }}
                  ></iframe>
                </div>
              )}
              <div className="font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-gray-600">{p.desc}</div>
              <div className="mt-4 text-xs text-gray-500">View Project →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
