import React from "react";
import Experience_section from "../components/Experience_section";
import { openPdfInNewTab } from "../components/Intro";
import Education from "../components/Education";

const tecstack = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "C++",
  "Django",
  "Spring Boot",
  "React.js",
  "Redux",
  "Tailwind CSS",
  "Formik",
  "Yup",
  "Angular",
  "Celery",
  "Beat",
  "Worker",
  "Django Channels",
  "Docker",
  "Prometheus",
  "Grafana",
  "JWT",
  "OAuth",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
];

const About = () => {
  return (
    <div className="lg:mx-28 px-4 text-black">
      {/* ABOUT SECTION */}
      <section className="lg:flex justify-between w-full items-center lg:mb-20 mb-20 lg:pt-36 pt-12">
        <div className="lg:w-2/5 w-full mb-2">
          <h1 className="lg:text-8xl text-6xl font-bold text-black">
            About me
          </h1>
        </div>
        <div className="lg:w-2/4 font-manrope">
          <h2 className="text-black lg:text-3xl text-2xl font-semibold">
            I’m Tapan Kumar, a Software Engineer based in Bangalore.
          </h2>
          <p className="text-gray-800 text-base mt-4">
            Full Stack Developer with hands-on experience in building scalable
            web applications and automation tools. Currently leading backend
            migration at Capgemini from Spring Boot to Django. Previously, I
            developed a real-time DevOps dashboard at Jio Platforms and built a
            network automation system at Auctopus Technologies.
            <br />
            Skilled in Python, Java, and JavaScript with a strong foundation in
            DSA, backend architecture, and frontend engineering. Passionate
            about solving real-world problems through clean code and scalable
            systems.
          </p>
          <div className="flex mt-12 flex-wrap items-center gap-4">
            {/* Resume */}
            <a
              onClick={openPdfInNewTab}
              className="cursor-pointer text-white bg-black lg:text-base text-sm font-bold font-manrope rounded-full px-6 py-2 flex items-center hover:bg-gray-800 transition-all duration-300"
            >
              <h1>DOWNLOAD RESUME</h1>
              <div className="ml-3 bg-white rounded-full w-2 h-2"></div>
            </a>

            {/* LinkedIn */}
            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/tapan-kumar-0447691b0/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z" />
                  <path d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z" />
                </svg>
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                LinkedIn
              </span>
            </div>

            {/* GitHub */}
            <div className="relative group">
              <a
                href="https://github.com/tapanKr277"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z"
                  />
                </svg>
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="lg:-mx-28 border-gray-300" />

      {/* TECH STACK SECTION */}
      <section className="lg:flex justify-between w-full items-center lg:mb-20 mb-20 lg:pt-36 pt-12">
        <div className="lg:w-2/5 w-full mb-2">
          <h1 className="lg:text-8xl text-6xl font-bold text-black">
            My Tech Stack
          </h1>
        </div>
        <div className="lg:w-2/4 font-manrope">
          <p className="text-gray-800 text-base mt-4">
            My stack spans backend development, frontend frameworks, database
            systems, and DevOps tooling. I work comfortably across the full
            stack—from writing REST APIs in Django or Spring Boot to designing
            clean UIs in React with Tailwind CSS, and handling deployments with
            Docker and monitoring tools like Prometheus and Grafana.
          </p>
          <div className="flex mt-12 w-full flex-wrap">
            {tecstack.map((item, idx) => (
              <div
                key={idx}
                className="text-black border-black border-[1px] rounded-full p-2 px-4 mx-2 my-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="lg:-mx-28 border-gray-300" />

      {/* EXPERIENCE SECTION */}
      <Experience_section />

      <Education />

      <hr className="lg:-mx-28 border-gray-300" />
    </div>
  );
};

export default About;
