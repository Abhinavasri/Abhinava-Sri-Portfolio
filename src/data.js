const data = {
  name: "Abhinava Sri Chamanchula",
  title: "Full Stack Developer",
  tagline: "Computer Science Graduate from Kakatiya University with hands-on experience in Full Stack Development through internships at Inventive Bay Technologies Pvt Ltd, as well as real-time projects.",
  email: "chamanchulaabhinavasri@gmail.com",
  phone: "+91 8309665363",
  linkedin: "https://www.linkedin.com/in/abhinava-sri-chamanchula-1a48b625b/",
  github: "https://github.com/Abhinavasri",
  portfolio: "http://datascienceportfol.io/abhinavasri",
  thopMember: "https://thop-verse.com/team/abhinava-sri-chamanchula/",
  resume: "../public/Abhinava.pdf",
  about: "A Passionate Full Stack Developer with hands-on experience through internships and real-time projects. Skilled in creating dynamic, responsive web applications using React.js, Node.js, Express.js, and MongoDB. Eager to leverage my expertise in frontend, backend, and Java technologies to build innovative, scalable solutions and contribute to high-impact projects in collaborative environments.",
  // skills: {
  //   frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "MUI"],
  //   backend: ["Node.js", "Express.js", "Java", "Django", "Python"],
  //   databases: ["MongoDB", "MySQL"],
  //   tools: ["Git", "Figma", "Postman", "VS Code"],
  // },
  training: {
    title: "Java Full Stack Trainee",
    company: "Codegnan IT Solutions",
    duration: "July 2025 - Present",
    desc: "Undergoing Java Full Stack Development training at Codegnan IT Solutions, covering Core Java, OOP, exception handling, and SQL for backend data management. Building a strong foundation in Java programming and relational database concepts to develop efficient and scalable applications.",
  },
  experience: [
    {
      role: "MERN Stack Developer Intern",
      org: "Inventive Bay Technologies Pvt Ltd",
      period: "Mar 2024 - Aug 2025",
      desc: " I gained hands-on experience with full stack development, including HTML, CSS, JavaScript, TypeScript, React.js, Node.js, Next.js, Express, and MongoDB. Working on real time applications. Acquired proficiency in design tools such as Figma. Building scalable web applications and implementing responsive designs using React and MUI. Designing schemas, routes, middleware, controllers for APIs, and testing with Postman and MongoDB.",
    },
    {
      role: "Part Time Administrative Assistant",
      org: "Full Circle Realty CO",
      period: "Oct 2022 - Nov 2024",
      desc: "  Managed social media accounts and creating content. Updated property features on the Full Circle Realty CO website and handled email communications. Assisted with property management and managing the company’s website.",
    },
    {
      role: "AI Tool Intern",
      org: "Zen Technologies Pvt Ltd",
      period: "May 2023 - Jun 2023",
      desc: "Actively participated in the development of applications, including automation of Zen Interview, a Chatbot, and an inventory management app using Microsoft Power Apps. Contributed to the Virtual Website Framework using Canvas.",
    },
  ],
  projects: [
  {
    name: "Organic Medico",
    tech: "MERN Stack",
    // link: "https://organicmedico.com",
    github: "https://github.com/Abhinavasri/Organic-Medico",
    image: "../organic.jpg",
    desc: "I developed a Demo website focused on holistic wellness. Promoted natural healing, education, sustainability, and a holistic approach to health. Working on Frontend and Backend Technology for implementation part.",
    technologies: ["HTML", "CSS", "Java Script","React.js", "Material UI"],
  },
  {
    name: "Student Management System",
    tech: "Django + MySQL",
    // link: "https://github.com/Abhinavasri/Student-Management-py",
    github: "https://github.com/Abhinavasri/Student-Management-py",
    image: "../student-management.png",
    desc: "Built a Student Management System using Django, MySQL, and HTML/CSS to manage student registrations, courses, and enrollments. Added search, forms, and an admin panel to make academic tasks easier and faster.",
    technologies: ["Python", "Django", "MySQL"],
  },
],
  extracurricular: [
    "UCEKU Placement Coordinator — Coordinated with the TPO and students for smooth recruitment communication. Ensured accurate and timely dissemination of placement updates.",
    "Thop Verse Leadership — Led the rebranding of 'Thop Ecell' to 'Thop Verse,' overseeing, domain migration, hosting management, and data integrity.",
    "Event Organizer — Workshop Coordinator Nera Conference (March 2023),  Planned and hosted an educational event focused on marriage life and decision-making.",
  ],
  coursework: ["Java", "Python", "HTML", "CSS", "JavaScript", "Data Structures", "Database Management"],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    school: "University College Of Engineering, Kakatiya University",
    period: "Dec 2021 - Apr 2025",
    cgpa: "7.8",
  },
};


export default data;

export const skills = [
  { name: "Java", logo: "../java.png" },
  { name: "Eclipse", logo: "../eclipse.png" },
  { name: "HTML", logo: "../html.png" },
  { name: "CSS", logo: "../css.png" },
  { name: "JavaScript", logo: "../javascript.png" },
  { name: "TypeScript", logo: "../ts.png" },
  { name: "React.js", logo: "../react.png" },
  { name: "Node.js", logo: "../node.png" },
  { name: "Express.js", logo: "../expressjs.png" },
  { name: "MongoDB", logo: "../mongodb.png" },
  { name: "MySQL", logo: "../mysql.png" },
  { name: "Figma", logo: "../figma.png" },
  { name: "Python", logo: "../python.jpeg" },
  { name: "GitHub", logo: "../github.png" },
  { name: "VS Code", logo: "../vscode.jpeg" },
  { name: "WordPress", logo: "../wordpress.png" },
  { name: "Canva", logo: "../canva.jpg" },
  { name: "Microsoft Power Apps", logo: "../mpa.png" },
  { name: "Draw.io", logo: "../drawio.png" },
];

export const hackathon = [
  {
    name: "Codegnan IT Solutions Hackathon",
    occasion: "7th Anniversary Celebration",
    project: "E-commerce Website",
    tech: ["React.js", "Material UI", "JavaScript", "CSS"],
    description:
      "Built an e-commerce platform with features like cart listings, product descriptions, checkout functionality, search bar, and dynamic price range filtering. Learned to optimize UI/UX and improve React component structuring.",
    achievement: "Received a participation certificate",
    experience:
      "It was a great learning experience where I enhanced my skills in React, state management, and front-end design.",
    certificate: "/hackathon.jpeg", // <-- Place your certificate in public folder if available
  },
];
