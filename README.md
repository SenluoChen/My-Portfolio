# My Personal Portfolio

This repository contains the source code for my personal portfolio website.  
It is built with **React** and **TypeScript**, and deployed using **Vercel**.  
The website presents information about my background, selected projects, blog posts, and contact details.

---

## Demo

Live site: [https://portfolio-website-senlouchens-projects.vercel.app/](https://portfolio-website-senlouchens-projects.vercel.app/)

---

## Features

- Sticky navigation bar with smooth scroll between sections (About, Projects, Posts, Contact)  
- Responsive design for desktop and mobile  
- Modular React components for easy customization  
- Dedicated sections for profile, projects, blog posts, and contact information

---

## Tech Stack

- React 18  
- TypeScript  
- Create React App  
- CSS (modules and plain CSS)  
- Vercel (deployment)

---

## Getting Started

### Prerequisites

- Node.js (version 18.x or 22.x)  
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/SenluoChen/Portfolio-Website.git

# Enter the project directory
cd Portfolio-Website

# Install dependencies
npm install

# Start the development server
npm start

# Build the project for production
npm run build
```


### Project Structure

src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── PostCard.tsx
│   ├── PostModal.tsx
│   ├── Posts.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   └── Section.tsx
│
├── css/
│   ├── app.css
│   ├── hero.css
│   ├── navbar.css
│   └── section.css
│
├── data/
│   ├── posts.ts
│   └── projects.ts
│
├── App.tsx
└── index.tsx

public/
└── index.html

### Deployment

The project is deployed on Vercel.
Every push to the main branch triggers an automatic build and deployment.
To redeploy manually, use the Vercel dashboard → Deployments → Redeploy (with the option to clear cache if needed).

### Contributing & Contact

This is a personal portfolio project. Contributions are not expected, but feedback is welcome.
For questions, suggestions, or collaboration opportunities, please contact:

Email: ray191714@gmail.com

