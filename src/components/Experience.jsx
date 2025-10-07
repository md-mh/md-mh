import React from "react";
const experiences = [
  {
    role: "Senior Software Engineer",
    company: "UAPP",
    date: "Mar 2023 — Present",
    details: [
      "Lead front-end engineering team at UAPP.",
      "Analyzed and optimized applications for scalability and performance.",
      "Ensured clean, maintainable, and testable code adhering to best practices.",
    ],
    projects: [
      "Built and scaled UAPP - a global university application management platform now supporting 180+ universities, 7,000+ students, and 650+ consultants.",
      "Developed UAPP LMS - a lead and event management system with a custom form builder, improving student engagement and consultant workflow efficiency.",
      "Designed and launched UAPP Chat App - an AI-powered communication tool for universities, enabling real-time support and interactions similar to ChatGPT.",
    ],
    liveProjects: [
      "UAPP",
      "UAPP-University Application System",
      "UAPP-LMS",
      "Chatuapp",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Chimbuk IT",
    date: "Jun 2022 — Feb 2023",
    details: [
      "Developed end-to-end web applications and prepared technical specifications.",
      "Improved and maintained core software systems for performance and reliability.",
    ],
    projects: [
      "Umoja Microfinance Ltd. - A complete digital microfinance solution.",
      "Edumama - A modern school management system with enhanced usability and scalability.",
    ],
    liveProjects: ["Umoja Microfinance (SMC) Limited"],
  },
  {
    role: "Web Developer",
    company: "Exhort Design",
    date: "Sep 2021 — May 2022",
    details: [
      "Developed and optimized an e-commerce website to improve user engagement.",
      "Enhanced performance and ensured smooth user experience through responsive design and optimized loading times.",
    ],
    projects: [
      "Exhort Design - A high-performing e-commerce platform with modern UI/UX improvements.",
    ],
    liveProjects: ["Exhort Design"],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="pt-20">
      <div className="container mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="grid md:grid-cols-1 gap-4">
          {experiences?.map((e) => (
            <div key={e.company} className="card p-4">
              <div className="font-semibold">
                {e.role} — {e.company}
              </div>
              <div className="text-sm text-gray-500">{e.date}</div>
              <p className="font-semibold mt-3">Responsibilities:</p>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                {e?.details?.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              {/* Projects */}
              <p className="font-semibold mt-3">Projects:</p>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                {e?.projects?.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              {/* Projects */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
