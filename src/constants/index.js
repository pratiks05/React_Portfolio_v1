import project1 from "../assets/projects/project-1.png";
import project4 from "../assets/projects/project-4.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `A passionate Full Stack Web Developer from India, currently in my 3rd year at HIT,Kolkata. Exploring Backend Development with node.js and eager to contribute to the ever-evolving world of technology`;

export const ABOUT_TEXT = `I'm a Full Stack Developer with a strong foundation in C++, Python, and JavaScript, specializing in React.js and Tailwind CSS to build scalable web applications. Expanding into backend development with Flask, Node.js,Express.js and MongoDB, I thrive in collaborative environments. I've participated in 8 hackathons, securing top positions in 2—HackSpire-2024 (3rd) and Rebase<01> (1st). Passionate about learning, open-source contributions, and tech communities, I’m eager to collaborate on impactful projects!`

export const EXPERIENCES = [
//    {
//     year: "Oct 2024-Present",
//     role: "Outreach Lead",
//     company: "Google Developers Groups on Campus HITK",
//     description: `
// `,
//     technologies: ["", "React.js", "Tailwind", "Flask","SQLite"],
//   },
  {
    year: "July 2024-August 2024",
    role: "Software Engineering Fellow",
    company: "HeadStarterAI",
    description: `Working as a Front-end Developer in Track-B( Final project that takes a startup’s current backlog and builds it 
meeting business requirements.)
`,
    technologies: ["Javascript", "React.js", "Tailwind", "Flask","SQLite"],
  },
  
];

export const PROJECTS = [
  {
    title: "CodeXpert",
    image: project4,
    description:
      "Full-stack web app enabling educators to assign unique AI-generated coding problems, track student performance, and deliver personalized feedback through adaptive questioning and real-time analytics.",
    technologies: ["ReactJs","Tailwind CSS","JavaScript","Flask","SQLite","Recharts","Python","GoogleAuth"],
    link:"https://github.com/navya-555/CodeXpert.git",
  },
  {
    title: "IndustryXpert",
    image: project1,
    description:
      "Industry Xpert is an AI based cutting-edge web application aimed at revolutionizing safety protocols within industrial environments. I have developed the entire Front-end of this project for user friendly interface.Also I handled major Backend Portions(50-55%)",
    technologies: ["HTML", "CSS", "Bootstrap", "Flask", "SQLite","Javascript"],
    link:"https://www.youtube.com/watch?v=f3hBCqBDluc&ab_channel=PratikSingh",
  },
  // {
  //   title: "MediConnect",
  //   image: project2,
  //   description:
  //     "MediConnect provides comprehensive 24/7 healthcare services, allowing you to manage your health anytime, anywhere. This application supports early detection and proper medication, crucial for conditions like Parkinson's disease.",
  //   technologies: ["HTML", "CSS", "Tailwind", "Flask","Javascript","SQLite"],
  //   link:"https://www.youtube.com/watch?v=MaxXpJseFDE&ab_channel=PratikSingh",
  // },
  {
    title: "JobQuest",
    image: project3,
    description:
      "A full-stack job portal that streamlines the job search and hiring process, enabling seamless recruiter candidate interactions",
    technologies: ["ReactJs","Vite","Tailwind" ,"Shadcn" , "Supabase", "Clerk" ,"Zod" ],
    link:"https://job-quest-olive.vercel.app/",
  },
  
];

