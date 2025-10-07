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
      desc: "A real-time, AI-driven chat platform designed for universities and consultants. Features GPT-like AI assistance, real-time messaging, and role-based communication to streamline student–university interactions.",
      link: "https://chatuapp.com/",
    },
    {
      title: "Lead and Event Management System (UAPP LMS)",
      desc: "A comprehensive system to manage leads, events, and student engagement for educational consultants. Includes a custom form builder, event tracking, analytics dashboard, and CRM-style workflow automation.",
      link: "https://lead.uapp.uk/",
    },
    {
      title: "UAPP - University Application System",
      desc: "A global SaaS platform for managing university applications, connecting 180+ universities, 7,000+ students, and 650+ consultants. Provides real-time tracking, document verification, and AI-based application matching.",
      link: "https://uapp.uk/",
    },
    {
      title: "Exhort Design - E-commerce Website",
      desc: "A modern, high-performance e-commerce website optimized for better conversions and SEO. Built with responsive design, smooth UI/UX, and dynamic product management to enhance the online shopping experience.",
      link: "https://exhortdesign.com/",
    },
    {
      title: "UAPP Portal - University & Consultant Dashboard",
      desc: "An advanced portal for universities and consultants to track applications, manage student profiles, and communicate efficiently. Includes analytics, report generation, and automated notifications for application updates.",
      link: "https://portal.uapp.uk/",
    },
    {
      title: "Umoja Microfinance - Digital Microfinance Solution",
      desc: "A fintech solution for managing microfinance operations digitally. Includes customer onboarding, loan tracking, payment management, and reporting modules to simplify financial operations for microfinance institutions.",
      link: "https://mfug.umoja-international.com/Auth/Account/Login",
      // link: "https://sobhisab.netlify.app/",
    },
    {
      title: "UAPP - University Application System",
      desc: "A global SaaS platform for managing university applications, connecting 180+ universities, 7,000+ students, and 650+ consultants. Provides real-time tracking, document verification, and AI-based application matching.",
      link: "https://hrcare.netlify.app/",
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
                    onError={(e) => {
                      // If iframe fails to load (e.g., X-Frame-Options), show a fallback message
                      const parent = e.target.parentNode;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex flex-col items-center justify-center h-full w-full bg-gray-100 rounded p-6 text-center">
                            <div class="text-lg font-semibold mb-2">Preview not available</div>
                            <div class="text-sm text-gray-500 mb-2">This site does not allow embedding.</div>
                            <a href="${p.link}" target="_blank" class="text-blue-600 underline">Open in new tab</a>
                          </div>
                        `;
                      }
                    }}
                    style={{ overflow: "hidden" }}
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
