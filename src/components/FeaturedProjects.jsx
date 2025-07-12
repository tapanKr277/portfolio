import React from "react";
import ProjectCard from "./ProjectCard";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    h1: "E-commerce",
    p: "A full-featured e-commerce platform with authentication, product management, cart, order placement, and payment integration. Built using React and Django.",
    year: "2024",
    role: "Full Stack Developer",
    livelink: "https://ecommerce-client-tapan.vercel.app/",
    gitlink: "https://github.com/tapanKr277/E-commerce",
    img: "./ecommerce_.png",
  },
  {
    h1: "DevSearch",
    p: "A platform for developers to showcase their portfolios, connect via messages, and search for talent. Built using Django and HTML templates.",
    year: "2023",
    role: "Backend + Template UI",
    livelink: "https://devsearch-1zbs.onrender.com/",
    gitlink: "https://github.com/tapanKr277/DevSearch",
    img: "./devsearch.png",
  },
  {
    h1: "Weather Broadcasting",
    p: `A Django-based weather forecast application powered by the OpenWeatherApp API. Users can search and save locations to view real-time weather, temperature, humidity, and more. Features include user authentication, personalized forecasts, and seamless API integration. Built with Django, Bootstrap, and AJAX.`,
    year: "2023",
    role: "Frontend Developer",
    livelink: "https://weather-forecasting-app-tk.vercel.app/",
    gitlink: "https://github.com/tapanKr277/WeatherBroadcasting",
    img: "./weather_broadcast.jpg",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="w-full pt-10 px-4" id="projects">
      <h1 className="text-black text-[42px] lg:text-7xl font-bold">
        <Typewriter
          words={["Featured Projects"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={500}
        />
      </h1>

      <p className="lg:text-lg text-base text-secondary font-manrope mb-6">
        Here are some selected projects that showcase my passion for full-stack
        development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
