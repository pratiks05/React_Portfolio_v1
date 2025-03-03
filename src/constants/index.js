import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `A passionate Front-end Web Developer from India, currently in my 3rd year at HIT,Kolkata. Exploring Backend Development with JavaScript and eager to contribute to the ever-evolving world of technology`;

export const ABOUT_TEXT = `I'm a Front-end Developer with a strong foundation in C++, Python, and JavaScript, specializing in React.js and Tailwind CSS to build scalable web applications. Expanding into backend development with Flask, Node.js, and MongoDB, I thrive in collaborative environments. I've participated in 8 hackathons, securing top positions in 2—HackSpire-2024 (3rd) and Rebase<01> (1st). Passionate about learning, open-source contributions, and tech communities, I’m eager to collaborate on impactful projects!`

export const EXPERIENCES = [
  {
    year: "July 2024-August 2024",
    role: "Software Engineering Fellow",
    company: "HeadStarterAI",
    description: `Working as a Front-end Developer in Track-B( Final project that takes a startup’s current backlog and builds it 
meeting business requirements.)
`,
    technologies: ["Javascript", "React.js", "Tailwind", "Flask","SQLite"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "IndustryXpert",
    image: project1,
    description:
      "Industry Xpert is an AI based cutting-edge web application aimed at revolutionizing safety protocols within industrial environments. I have developed the entire Front-end of this project for user friendly interface.Also I handled major Backend Portions(50-55%)",
    technologies: ["HTML", "CSS", "Bootstrap", "Flask", "SQLite","Javascript"],
    link:"https://www.youtube.com/watch?v=f3hBCqBDluc&ab_channel=PratikSingh",
  },
  {
    title: "MediConnect",
    image: project2,
    description:
      "MediConnect provides comprehensive 24/7 healthcare services, allowing you to manage your health anytime, anywhere. This application supports early detection and proper medication, crucial for conditions like Parkinson's disease.",
    technologies: ["HTML", "CSS", "Tailwind", "Flask","Javascript","SQLite"],
    link:"https://www.youtube.com/watch?v=MaxXpJseFDE&ab_channel=PratikSingh",
  },
  {
    title: "JobQuest",
    image: project3,
    description:
      "A full-stack job portal that streamlines the job search and hiring process, enabling seamless recruiter candidate interactions",
    technologies: ["ReactJs","Vite","Tailwind" ,"Shadcn" , "Supabase", "Clerk" ,"Zod" ],
    link:"https://job-quest-olive.vercel.app/",
  },
];

