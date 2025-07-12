
import Experiencecard_for_about from "./Experiencecard_for_about";

export const experience = [
  {
    title: "Analyst – Full Stack Developer",
    company: "Capgemini India Pvt Ltd",
    start: "June 2024",
    end: "Present",
    location: "Bengaluru, India",
    discription:
      "Leading backend migration from Spring Boot to Django across enterprise platforms, reducing tech debt and improving maintainability. Refactored monolithic Java microservices into modular, scalable Django REST APIs. Collaborating cross-functionally to redesign frontend interfaces using React, Redux, and TailwindCSS, improving user satisfaction scores by 25%.",
  },
  {
    title: "Graduate Engineer Trainee – DevOps & Monitoring",
    company: "Jio Platforms Limited",
    start: "Dec 2023",
    end: "May 2024",
    location: "Mumbai, India",
    discription:
      "Built a real-time DevOps monitoring dashboard that visualized system alerts by severity level. Designed backend logic to store and classify alerts efficiently using PostgreSQL and Django. Integrated Prometheus and Grafana for data visualization. Enabled 40% faster incident response through alert prioritization and visual cues.",
  },
  {
    title: "Full Stack Developer – Network Automation",
    company: "Auctopus Technologies",
    start: "Apr 2023",
    end: "Nov 2023",
    location: "Remote / India",
    discription:
      "Developed a full-stack network automation platform for managing infrastructure at scale. Engineered React + Redux UI for interactive visualizations. Built backend microservices with Django REST, handling authentication (JWT/OAuth), real-time sync, and network health checks. Reduced manual ops effort by 60% through smart automation.",
  },
];

const Experience_section = () => {
  return (
    <div
      className="lg:flex justify-between w-full items-start lg:mb-20 mb-16 lg:pt-36 pt-12 px-4"
      id="work"
    >
      <div className="lg:w-2/5 w-full mb-6">
        <h1 className="lg:text-8xl text-5xl font-bold text-black">
          My Experience
        </h1>
      </div>
      <div className="lg:w-3/5 w-full font-manrope text-black space-y-8">
        {experience.map((item, index) => (
          <Experiencecard_for_about key={index} job={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience_section;
