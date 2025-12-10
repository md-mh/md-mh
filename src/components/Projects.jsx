import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Chatuapp - AI-powered Chat Application",
      desc: "An advanced AI-powered communication platform designed to streamline interactions and enhance user engagement. It offers real-time chat capabilities, tools for building and customizing chatbots, and integrated model-training features to fine-tune responses based on your specific needs. The platform also supports robust user-based access control to manage permissions securely. Additionally, it includes an embeddable chat widget that allows effortless integration with external websites and applications, enabling a seamless and scalable communication experience.",
      link: "https://chatuapp.com/",
      image: "/project/chatuapp.png",
    },
    {
      title: "Lead and Event Management System (UAPP LMS)",
      desc: "A robust lead and event management system that allows users to create custom forms using a dynamic form builder for capturing leads, managing and tracking event details, and planning events efficiently with advanced organizational tools and designs. It streamlines lead collection, event scheduling, and overall event execution for better productivity and engagement. The platform also offers analytics and reporting features to monitor lead performance and event success. After success, the lead user becomes a student at the Uapp portal",
      link: "https://lead.uapp.uk/",
      image: "/project/lead.png",
    },
    {
      title: "UAPP - Website and Portal",
      desc: "Developed the official UAPP website using Next.js, delivering a modern, responsive, and SEO-optimized platform. UAPP is a global SaaS university application management system connecting 180+ universities, 7,000+ students, and 650+ consultants. It features role-based access control, menu management, and modules for students, consultants, staff, providers, and admissions, offering real-time tracking, document verification, application management, a user-friendly interface, and a powerful admin dashboard for seamless platform management",
      link: "https://uapp.uk/",
      image: "/project/uapp.png",
    },
    {
      title: "HR Care - HR Management System",
      desc: "HR Care is a web-based Human Resource Management System that helps organizations manage daily HR operations such as attendance, leave requests, payroll, employee ID cards, and task assignments. It includes a comprehensive dashboard for managing HR operations, a user-friendly interface for employees and managers, and a powerful admin panel for managing the platform and its users. The platform also offers analytics and reporting features to monitor HR operations and employee performance.",
      link: "https://hr-care-management.netlify.app",
      image: "/project/hrcare.png",
    },
    {
      title: "Exhort Design - E-commerce Website",
      desc: "Exhort Design features a responsive, mobile-first design with fast loading and optimized performance. It includes a structured product catalog with categories, search and filtering tools, shopping cart and secure checkout, user account management, and an admin dashboard for managing products, orders, and users. The platform is SEO-friendly, scalable, and built for easy maintenance and future enhancements. There also have a contact form for customers to contact the company.",
      link: "https://exhortdesign.com/",
      image: "/project/exhort.png",
    },
    {
      title: "Umoja Microfinance - Digital Microfinance Solution",
      desc: "Umoja Microfinance is a fintech solution for managing microfinance operations digitally. It includes customer onboarding, loan tracking, payment management, and reporting modules to simplify financial operations for microfinance institutions. The platform is built with modern technologies and is designed to be user-friendly and efficient. It includes a comprehensive dashboard for managing microfinance operations, a user-friendly interface for customers and administrators, and a powerful admin panel for managing the platform and its users.",
      link: "https://mfug.umoja-international.com/Auth/Account/Login",
      image: "/project/umoja.png",
    },
  ];

  return (
    <section id="projects" className="pt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">Professional Projects</h2>
        <p className="text-gray-600">
          A selection of professional projects I've built or contributed to,
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
                <div className="w-full h-[250px] mb-3 rounded">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={`${p.title} preview image`}
                      className="w-full h-full mb-3 rounded object-cover bg-gray-100"
                    />
                  )}
                  {!p.image && (
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
                          "w-full h-full mb-3 rounded object-cover bg-gray-100";
                        e.target.parentNode.appendChild(img);
                      }}
                    ></iframe>
                  )}
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
