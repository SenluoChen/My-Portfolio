export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "BasketIQ",
    description:
      "AI-assisted basketball community: analysis, tracking, chat. Built with React, TS, MUI, AWS.",
    tags: ["React", "TypeScript", "MUI", "AWS"],
    github: "https://github.com/your/basketiq",
    link: "https://basketiq.example.com",
  },
  {
    title: "ReLivre",
    description:
      "Second-hand book marketplace with semantic search and real-time chat.",
    tags: ["React", "Redux", "Node", "PostgreSQL"],
    github: "https://github.com/your/relivre",
  },

  {
  title: "Boston Housing Predictor",
  description: "Multivariate Linear Regression model to predict Boston housing prices using Python & scikit-learn.",
  tags: ["Python", "Scikit-learn", "Regression", "ML"],
  github: "https://github.com/SenluoChen/Boston-housing-predictor",
  // 如果有 Web demo，例如 Streamlit app，可加 link:
  link: "https://boston-housing-predictor-lktjlnptmrg6cmyhd7x6vk.streamlit.app/",
},

{
  title: "SmartCoach – AI-Powered Badminton Match Analysis App",
  description:
    "An app to help badminton enthusiasts train like professionals with interactive player tracking, personalized statistics, and real-time tactical advice powered by AI. Includes a community for motivation and feedback. MVP under development, with first test release planned for October 2025.",
  tags: ["React Native", "AI", "Sports Tech", "Community"],
  github: "https://github.com/SenluoChen/Badminton-strategy",
  link: "",
},

];
