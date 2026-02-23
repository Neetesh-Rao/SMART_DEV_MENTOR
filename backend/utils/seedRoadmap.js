
import Roadmap from "../models/Roadmap.js";



export const seedData = async () => {
  try {
   


    // Clear previous data
    const deleted = await Roadmap.deleteMany();
    console.log("Old roadmaps removed:", deleted.deletedCount);

    // Insert new roadmaps
    // const inserted = await Roadmap.insertMany([
    //   {
    //     goal: "Frontend Developer",
    //     skills: [
    //       { name: "HTML", level: "Beginner" },
    //       { name: "CSS", level: "Beginner" },
    //       { name: "JavaScript", level: "Intermediate" },
    //       { name: "React", level: "Advanced" },
    //     ],
    //   },
    //   {
    //     goal: "Backend Engineer",
    //     skills: [
    //       { name: "Node.js", level: "Beginner" },
    //       { name: "Express.js", level: "Intermediate" },
    //       { name: "MongoDB", level: "Intermediate" },
    //       { name: "System Design", level: "Advanced" },
    //     ],
    //   },
    //   {
    //     goal: "Data Scientist",
    //     skills: [
    //       { name: "Python", level: "Beginner" },
    //       { name: "Pandas", level: "Beginner" },
    //       { name: "Machine Learning", level: "Intermediate" },
    //       { name: "Deep Learning", level: "Advanced" },
    //     ],
    //   },
    //   {
    //     goal: "Full Stack Developer",
    //     skills: [
    //       { name: "HTML", level: "Beginner" },
    //       { name: "CSS", level: "Beginner" },
    //       { name: "JavaScript", level: "Intermediate" },
    //       { name: "React", level: "Intermediate" },
    //       { name: "Node.js", level: "Intermediate" },
    //       { name: "MongoDB", level: "Intermediate" },
    //     ],
    //   },
    // ]);

    const inserted = await Roadmap.insertMany([
  {
    goal: "Frontend Developer",
    skills: [
      { name: "HTML", level: "Beginner" },
      { name: "CSS", level: "Beginner" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Advanced" },
    ],
  },
  {
    goal: "Backend Engineer",
    skills: [
      { name: "Node.js", level: "Beginner" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "System Design", level: "Advanced" },
    ],
  },
  {
    goal: "Data Scientist",
    skills: [
      { name: "Python", level: "Beginner" },
      { name: "Pandas", level: "Beginner" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Deep Learning", level: "Advanced" },
    ],
  },
  {
    goal: "Full Stack Developer",
    skills: [
      { name: "HTML", level: "Beginner" },
      { name: "CSS", level: "Beginner" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
    ],
  },

  // ✅ NEW GOALS START HERE

  {
    goal: "DevOps Engineer",
    skills: [
      { name: "Linux", level: "Beginner" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "AWS", level: "Advanced" },
    ],
  },
  {
    goal: "Cyber Security Engineer",
    skills: [
      { name: "Networking", level: "Beginner" },
      { name: "Ethical Hacking", level: "Intermediate" },
      { name: "Penetration Testing", level: "Intermediate" },
      { name: "Cryptography", level: "Advanced" },
      { name: "Security Tools", level: "Advanced" },
    ],
  },
  {
    goal: "Cloud Engineer",
    skills: [
      { name: "AWS", level: "Beginner" },
      { name: "Azure", level: "Intermediate" },
      { name: "Google Cloud", level: "Intermediate" },
      { name: "Terraform", level: "Advanced" },
      { name: "Cloud Security", level: "Advanced" },
    ],
  },
  {
    goal: "AI Engineer",
    skills: [
      { name: "Python", level: "Beginner" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Deep Learning", level: "Advanced" },
      { name: "TensorFlow / PyTorch", level: "Advanced" },
    ],
  },
  {
    goal: "Mobile App Developer",
    skills: [
      { name: "JavaScript", level: "Beginner" },
      { name: "React Native", level: "Intermediate" },
      { name: "Flutter", level: "Intermediate" },
      { name: "App Deployment", level: "Advanced" },
    ],
  },
  {
    goal: "Blockchain Developer",
    skills: [
      { name: "Solidity", level: "Beginner" },
      { name: "Web3.js", level: "Intermediate" },
      { name: "Smart Contracts", level: "Advanced" },
      { name: "Cryptography", level: "Advanced" },
    ],
  },
]);

    console.log("Inserted roadmaps:", inserted.map(r => r.goal));
    // process.exit();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};


// seedData();