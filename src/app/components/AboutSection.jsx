"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
  Backend: ["Node.js", "Express.js", "Prisma", "GraphQL", "Docker"],
  Databases: ["MongoDB", "Mongoose", "SQL", "PostgreSQL"],
  Tools: ["Firebase", "JWT Authentication", "Axios", "Redux", "AWS"],
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <section className="py-12 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          🚀 Skills That Set Me Apart
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="p-6 rounded-xl shadow bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600">{category}</h3>
              <ul className="mt-3 space-y-1 text-gray-700">
                {list.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Sc (Honor's) in Physics, M.Sc</li>
        <li>University of Rajshahi, Bangladesh</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js and React.js form programing hero</li>
        <li>wordpress from upwork</li>
        <li>Next.js and React.js form programing hero</li>
        <li>CCNA</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };




  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello! I’m Sultan, a dedicated Full-Stack Web Developer who loves building modern, user-friendly, and scalable web applications. From designing clean, responsive interfaces to developing powerful backend systems, I enjoy every step of turning ideas into reality.

            I work with a wide range of technologies including HTML, CSS, JavaScript, TypeScript, TailwindCSS, Firebase, JWT, Axios, React.js, Next.js, Node.js, Express.js, Prisma, Docker, AWS, GraphQL, Redux, MongoDB, Mongoose, SQL, PostgreSQL, and many more.

            Beyond just writing code, I focus on clean architecture, performance, and best practices to deliver solutions that not only work but also grow with your needs.

            When I’m not coding, I enjoy exploring new tools, learning emerging technologies, and refining my skills to stay ahead in the ever-evolving tech world.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
