export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  behance?: string;
};

export const projects: Project[] = [
{
  title: "BasketIQ",
  description:
    `BasketIQ is a web application that connects and empowers amateur basketball players.
It offers AI-powered game analysis, performance tracking, local match updates, a social platform, and real-time chat to keep the community active and engaged.`,
  tags: ["React", "TypeScript", "AWS", "OpenAI API"],
  github: "https://github.com/SenluoChen/BaskeIQ-Website.git",
  behance: "https://www.behance.net/gallery/228725901/Basket-IQ",   // 新增 Behance 連結
},


  
  {
    title: "ReLivre",
    description:
      "ReLivre is a modern e-commerce platform for second-hand books. While it functions as a bookstore, its primary goal is to act as a potential MVP to explore how Large Language Models (LLMs) can enable advanced natural language search in e-commerce.",
    tags: ["React", "Redux", "Node", "PostgreSQL", "OpenAI API"],
    github: "https://github.com/SenluoChen/reLivre-Website.git",
    link: "https://master.d1c7tidcec1euy.amplifyapp.com/",
  },


{
  title: "SmartCoach ",
  description:
    "An app to help badminton enthusiasts train like professionals with interactive player tracking, personalized statistics, and real-time tactical advice powered by AI. Includes a community for motivation and feedback. ",
  tags: ["React Native", "OpenAI API", "AWS"],
  github: "https://github.com/SenluoChen/Badminton-strategy",
  behance: "https://www.behance.net/gallery/228677495/SmartCoach-AI-Powered-Badminton-Coaching-App",
},

  {
  title: "Boston Housing Predictor",
  description: "Multivariate Linear Regression model to predict Boston housing prices using Python & scikit-learn.",
  tags: ["Python", "Scikit-learn", "Regression", "ML"],
  github: "https://github.com/SenluoChen/Boston-housing-predictor",

  link: "https://boston-housing-predictor-lktjlnptmrg6cmyhd7x6vk.streamlit.app/",
},

];
