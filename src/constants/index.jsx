import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  podman,
  c_lang,
  cpp,
  java,
  kubernetes,
  linux,
  postgresql,
  docker,
  avegen,
  chess_wiz,
  quickpick,
  todolo,
  auto_schedule,
  peoples_lens,
} from "../assets";

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
    title: "Linux Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgresql,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "podman",
    icon: podman,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c_lang,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Engineering Intern",
    company_name: "Avegen",
    icon: avegen,
    iconBg: "#383E56",
    date: "2 June 2023 - 30 June 2023",
    points: [
      "Created dummy translations for Strapi CMS using JavaScript and Strapi Entity Service API",
      "Created a bash script to semi-automate setup for a company repository",
      "Developed a solution to automate the CI/CD pipeline using Python, Jira and Jenkins",
    ],
  },
];

const projects = [
  {
    name: "Chess Wiz",
    description:
      "A multiplayer chess game where people can share their room codes and play chess together.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: chess_wiz,
    source_code_link: "https://github.com/NiharPhansalkar/chess-wiz",
  },
  {
    name: "QuickPick",
    description:
      "A MERN (MySQL) stack e-commerce website for buying your favorite groceries.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: quickpick,
    source_code_link: "https://github.com/NiharPhansalkar/quickpick",
  },
  {
    name: "Todolo",
    description:
      "A MERN stack todo application so that you never forget the small things that actually matter.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: todolo,
    source_code_link: "https://github.com/NiharPhansalkar/todolo",
  },
  {
    name: "Event Auto Schedule",
    description:
      "A MERN stack event scheduling application where the user (and their team) have to scan a QR code and they will get the timeslot for when they can participate in the event (based on queue of previous players).",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: auto_schedule,
    source_code_link:
      "https://github.com/NiharPhansalkar/techfest-auto-schedule",
  },
  {
    name: "People's Lens",
    description:
      "A best paper winning project created using HTML, CSS and JS where in cases of busy conferences, a user signed up for people's lens can identify individuals by scanning their faces and finding out if the person is of their domain in order to build professional connections faster.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: peoples_lens,
    source_code_link: "https://github.com/NiharPhansalkar/peoples-lens",
  },
];

export { services, technologies, experiences, projects };
