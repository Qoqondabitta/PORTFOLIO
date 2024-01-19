import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import sharp from "../assets/sharp.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import ielts from "../assets/ielts.png";
import sat from "../assets/additional/sat.png";
import hub from "../assets/additional/git.png";
import team from "../assets/leader.png";
import rest from "../assets/rest.webp";
import math from "../assets/math.png";
import body from "../assets/slider/sport.jpg";
import teacher from "../assets/tea.png";


import ant from "../assets/ant.png"
import drei from "../assets/drei.png"
import email from "../assets/email.png"
import fiber from "../assets/fiber.png"
import framer from "../assets/framer.png"
import map from "../assets/map.png"
import part from "../assets/part.png"
import scroll from "../assets/scroll.png";
import slick from "../assets/slick.png";
import spinner from "../assets/loader.avif";
import tilt from "../assets/tilt.png";
import typed from "../assets/library/typed.jpg";
import ui from "../assets/ui.png";
import vite from "../assets/vite.png";
import vertical from "../assets/vertical.png";
import tor from "../assets/tor.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend (Soon)",
    icon: backend,
  },
  {
    title: "Content Creator (Soon)",
    icon: creator,
  },
  {
    title: "IELTS Instructor",
    icon: ielts,
  },
  {
    title: "SAT Instructor",
    icon: sat,
  },
  {
    title: "Team Leader",
    icon: team,
  },
  {
    title: "Math Teacher",
    icon: math,
  },
  {
    title: "Workouter",
    icon: body,
  },
  {
    title: "Support Teacher",
    icon: teacher,
  },
];

const additional = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C#",
    icon: sharp,
  },
  {
    name: "GitHub",
    icon: hub,
  },
  {
    name: "Rest Full API",
    icon: rest,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git VCS",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const library = [
  {
    name: "react-maps",
    icon: map,
  },
  {
    name: "ant-design",
    icon: ant,
  },
  {
    name: "react-slick",
    icon: slick,
  },

  {
    name: "Material UI",
    icon: ui,
  },
  {
    name: "Vertical-Timeline-Element",
    icon: vertical,
  },
  {
    name: "react-scroll",
    icon: scroll,
  },
  {
    name: "react-particles",
    icon: part,
  },
  {
    name: "three-drei",
    icon: drei,
  },

  {
    name: "three-fiber",
    icon: fiber,
  },
  {
    name: "Email JS",
    icon: email,
  },
  {
    name: "framer-motion",
    icon: framer,
  },
  {
    name: "react-spinners",
    icon: spinner,
  },
  {
    name: "tilt",
    icon: tilt,
  },
  {
    name: "typed",
    icon: typed,
  },
  {
    name: "react-vite",
    icon: vite,
  },
  {
    name: "react-icons",
    icon: tor,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  additional,
  technologies,
  experiences,
  testimonials,
  projects,
  library
};
