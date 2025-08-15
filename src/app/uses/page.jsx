/*export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}
*/
"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Text from "../../components/Text/Text.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import UseCard from "../../components/UseCard/UseCard.jsx";
import UsesSection from "../../components/UsesSection/UsesSection.jsx";
import { useState } from "react";

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

const text = {
  heading: "Gadgets I use and other things I love and recommend",
  body: "This section contains the gadgets that I use and recommend based on my experience.",
};

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: '16” MacBook Air, M4 Max, 64GB RAM (2025)',
        description:
          'I use this for all of my development work. It’s fast, has a great display, and the battery lasts forever. Plus the M4 chip is incredibly powerful.',
      },
    ],
  },
  {
    groupName: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Entertainment',
    items: [
      {
        title: 'Vinyl Record Player',
        description:
          'I enjoy listening to vinyl records while working on my projects. The warm, rich sound helps me stay focused and sparks creativity as I code. It’s my favorite way to combine my love for technology with a bit of old-school charm.',
      },
      {
        title: 'Whimsical',
        description:
          'I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Notion',
        description:
          'I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Alfred',
        description:
          'I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
];

export default function Uses() {
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
            <div className="flex justify-center w-full padding-4">
                            <div className="text-left w-full max-w-2xl">
                              <Text heading={text.heading} body={text.body} />
                            </div>
                     </div>
                                <div className="flex justify-center w-full padding-4">
                                  <UsesSection items={items} />
                                  </div>
    <div className={"page"}>
                     <header>{/* placeholder */}</header>
                     <main>{/* placeholder */}</main>
                     <Footer links={links} />
                   </div>
</>  );
}
