import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import image2 from "../assets/projects/image2.png";

export const HERO_CONTENT = `Hi! I'm Layalie AbuOleim, a junior honors Computer Engineering student at the University of South Florida. I believe true innovation comes from blending technical expertise with creativity, teamwork, and community involvement.

As a natural leader, I’ve served as captain of volleyball teams since I was 10, building resilience, collaboration, and the ability to uplift those around me. This drive to support others extends beyond the court, fueling my dedication to service and nonprofit work. For over seven years, I’ve actively contributed to 200 Muslim Women Who Care, a nonprofit supporting meaningful local causes in Tampa Bay. I also volunteer weekly to feed the homeless, finding fulfillment in giving back to my community and addressing real-world challenges.

Professionally, I’ve had the honor of interning at NASA’s Kennedy Space Center, where I applied my technical skills in cutting-edge environments. The experience not only strengthened my problem-solving abilities but also highlighted the importance of staying coachable and open to feedback, allowing me to continuously adapt and grow. It reinforced my commitment to balancing curiosity with discipline in tackling complex challenges.

With a passion for hands-on projects and a proactive approach to learning, I combine technical expertise, leadership, and service to create lasting positive impacts in both my work and my community.
`;

export const ABOUT_TEXT = `I’m proficient in Python, C, C++, SQL, JavaScript, Verilog, RISC-V. I also speak English and Arabic.

My technical interests span the realms of front-end and back-end development, game design, web development, and contributing to open-source projects. At the University of South Florida, I’ve found my favorite classes to be Data Structures and Computer Logic and Design (+ the lab). I’m fascinated by the structure and foundational building blocks of code— it's the blueprint that transforms ideas into masterpieces, equipping you with the tools to create innovative solutions. To me, Data Structures is the crucible where logic and creativity intertwine.

Hardware holds just as much allure. Whether I’m building circuits, designing logic gates, or exploring the verdant labyrinth of embedded systems, there’s a thrill in bringing concepts to life through tangible results. It’s this blend of theory and hands-on practice that fuels my passion for computer engineering.

I chose this field to dive deep into the intricate relationship between hardware and software- to transcend surface-level understanding and reimagine what technology can achieve when these domains are intertwined.

 `;

export const EXPERIENCES = [
  {
    year: "May 2024- August 2024",
    role: "Launch Control Systems Computer Hardware Engineering Intern",
    company: "National Aeronautics and Space Administration (NASA)",
    description: `Designed a detailed network architecture map for the Test Bed, enabling seamless communication across 18 critical hardware components and boosting overall system efficiency. 
Standardized, documented, and organized configurations for 18 switches in the Test Bed, including IP addresses, VLANs, and SSH capabilities, ensuring uniformity and reliability.
Earned 5 professional certifications in computer networking, demonstrating expertise in industry standards.
Replaced 7 damaged switches and uploaded their previous configurations via CLI, restoring Test Bed functionality.
Redesigned the network distribution switch layout entirely for Firing Rooms 1 and 2, developing an efficient wiring and network layout for 2 racks, improving performance and enabling seamless switching between networks.
Authored 2 comprehensive documents detailing the redesign process, a foundational step for implementation and directly utilized by the team to guide execution.
Configured and installed my own physical firewall in the Firing Room Rack, implementing security zones, policies, and filters, and demoed the configuration to the Chief Officer of Launch Control Systems, who offered me a return letter.
`,
    technologies: ["Linux/Unix", "CLI","Adobe"],
  },
  {
    year: "Summer 2020,2021,2022,2023",
    role: "Administrative Tech Assistant",
    company: "Victory Oil Management",
    description: `Created a website in order to digitize and track 500+ files including investment plans, insurance contracts, rent statements, contracts, and lease papers on computer systems, organizing them in their respective manner. 
    Created an efficient workspace through project management and organizational skills.
`,
    technologies: ["HTML", "Javascript", "React","Tailwind CSS", "Vite"],
  },
];

export const PROJECTS = [
  {
    title: "React Portfolio Website",
    image: project1,
    description:
      "Built a personal portfolio website using React.js and leveraging Tailwind CSS and animated it with Framer Motion, achieving seamless mobile-to-desktop transitions and reduced page load times by 40% through optimized component rendering. Showcases myself, projects, and experience.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
     title: "Interactive T-Rex Game",
     image: image2,
     description:
       "Designed and implemented a 2D endless runner game using p5.js and associated libraries (p5.play.js, p5.sound.js, and p5.dom.js), showcasing expertise in JavaScript and game development. Programmed dynamic game mechanics, including sprite animations, collision detection, score tracking, and state management (play/pause/end), used object-oriented design principles. Implemented features such as random obstacle generation, scalable cloud spawning, and restart functionality for enhanced replayability.",
     technologies: ["JavaScript", "Game Development", "p5.js", "Animation", "Debugging", "Performance Optimization", "Frontend Development"],
     link:"https://interactive-t-rex-game.vercel.app/",
   },
  {
    title: "Huffman Code Generator",
    image: project2,
    description:
      "A data compression system using Huffman coding algorithm, implementing custom binary trees for efficient character encoding– achieved 60% file size reduction through Huffman compression.",
    technologies: ["C++","Binary Trees", "Priority Queues", "Algorithm Optimization"," Object-Oriented Programming"],
  },
  {
    title: "Dijkstras Algorithm",
    image: project3,
    description:
      "Led a 3 person team and developed a Graph ADT using Dijkstra's Algorithm, to compute optimal pathfinding between vertices in weighted graphs, reducing route time by 75% compared to brute force approaches and achieving O(n log n) time complexity.",
    technologies: ["C++","Adjacency Matrix/Lists", "Algorithm Design", "Team Software Development"],
  },
  {
    title: "Notation Converter",
    image: project4,
    description:
      "Handles 1000+ expressions/second with 100% accuracy rate across Infix, Prefix, and Postfix conversions. Also built a Deque from scratch using doubly linked lists to handle expression parsing and conversion.",
    technologies: ["C++","Deque, Linked Lists", "Algorithm Design", "Object-Oriented Programming", "Expression Parsing"],
  },
];

export const CONTACT = {
  address: "Tampa, Florida ",
  phoneNo: "+1 (813) 468-8293 ",
  email: "layalie.abuoleim@gmail.com",
};
