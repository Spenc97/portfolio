"use client";
import Navbar from "../components/Navbar/Navbar.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import ArticleCard from "../components/ArticleCard/ArticleCard.jsx";
import WorkWidget from "../components/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "../components/SkillsWidget/SkillsWidget.jsx";
import SignupWidget from "../components/SignupWidget/SignupWidget.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { useState } from "react";
//import "./globals.css";

/**export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};**/

const articles = [
  {
    date: "July 28, 2023",
    title: "Nike Retail Associate",
    content:
      "The Nike Retail Associate is responsible for delivering a premium consumer experience by providing expert advice and guidance on Nike products and services. This role involves engaging with customers, understanding their needs, and offering tailored solutions to enhance their shopping experience.",
    link: "https://www.nike.com/retail-associate",
  },
  {
    date: "August 15, 2023",
    title: "BMW",
    content:
      "BMW is a German multinational company that produces luxury vehicles and motorcycles. The company is known for its performance-oriented cars and has a strong presence in motorsports.",
    link: "https://www.bmw.com/",
  },
];

const skills = [
  { name: "HTML", proficiency: 60, icon: "html5.png" },
  { name: "CSS", proficiency: 50, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
];

const links = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

const darkClassTest = "dark:bg-gray-900 dark:text-white";

export default function Home() {
  // Only for the dropdown component
  const handlePreview = () => {
    console.log("Preview");
  };
  const handleEdit = () => {
    console.log("Edit");
  };
  const handleClone = () => {
    console.log("Clone");
  };
  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <>
      <div className="relative w-full my-8" style={{ minHeight: 40 }}>
        <div className="flex justify-center">
          <Navbar
            options={[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/uses", label: "Uses" },
            ]}
          />
        </div>
        <div className="absolute" style={{ left: "88%", top: "50%", transform: "translateY(-50%)" }}>
          <ThemeSwitcher />
        </div>
      </div>

      {/* <div>
        <Dropdown onPreview={handlePreview} onEdit={handleEdit} onClone={handleClone} onDelete={handleDelete} />
      </div> */}

      <div className={`flex flex-col md:flex-row gap-8 justify-center`}>
        <ProjectCard
          name={"Spencer Madrid"}
          logo={"/ensign.png"}
          content={
            "I have collaborated on several group projects during my college courses, gaining experience in teamwork and project development. Most recently, I worked with a team of four to design and build a website for a school as part of my portfolio. This project involved planning, coding, and refining the site to meet both functional and visual goals. Through this experience, I strengthened my skills in communication, problem-solving, and web development."
          }
          link={"https://www.ensign.edu/"}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-5xl mx-auto my-8">
        <div className={"articles flex-1 mx-auto"}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-5 mx-auto">
          <SignupWidget
            title={"Stay up to date"}
            content={"Get notified when I publish something new, and unsubscribe at any time."}
          />
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "/slack.png",
                organization: "Nike",
                jobTitle: "Sales Associate",
                startYear: 2023,
                endYear: 2024,
              },
              {
                logo: "/spotify.png",
                organization: "BMW",
                jobTitle: "Parts Sales Associate",
                startYear: 2023,
                endYear: 2024,
              },
              {
                logo: "/audible.png",
                organization: "BYU-Pathway",
                jobTitle: "Student Advisor",
                startYear: 2022,
                endYear: 2023,
              },
              {
                logo: "/microsoft.png",
                organization: "Microsoft",
                jobTitle: "Software Engineer",
                startYear: 2010,
                endYear: 2011,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
            skills={skills}
          />
        </div>
      </div>
      <div className={"page"}>
        <header>{/* placeholder */}</header>
        <main>{/* placeholder */}</main>
        <Footer links={links} />
      </div>
    </>
  );
}
