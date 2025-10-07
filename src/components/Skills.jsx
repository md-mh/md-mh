import React from "react";

export default function Skills() {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Shadcn",
      "JavaScript",
      "React.js",
      "Next.js",
      "i18next",
      "React Query",
      "Context API",
      "Yup",
      "Zod",
      "TypeScript",
      "NextAuth",
      "React Hook Form",
      "Redux-toolkit",
      "Tanstack Query",
    ],
    backend: [
      "Node.js",
      "Express",
      "Prisma",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "SQL",
      "WebSocket",
      "WordPress",
      "Firebase",
      "Nodemailer",
      "Swagger",
    ],
    tools: [
      "VS Code",
      "Cursor",
      "Figma",
      "Github",
      "Netlify",
      "Trello",
      "Jira",
      "Domain",
      "Hosting",
      "Cpanel",
      "Webuzo",
      "Xampp",
      "PhpMyAdmin",
      "VPS",
      "Illustrator",
      "Photoshop",
    ],
  };
  return (
    <section id="skills" className="pt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {Object.entries(skills).map(([k, list]) => (
            <div key={k} className="card p-4">
              <div className="font-medium capitalize">{k}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {list.map((s) => (
                  <span
                    className="text-sm px-2 py-1 bg-gray-100 rounded"
                    key={s}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
