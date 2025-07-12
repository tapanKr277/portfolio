import { Typewriter } from "react-simple-typewriter";

const categorizedSkills = {
  "Programming Languages": [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "SQL",
  ],
  "Frameworks & Libraries": [
    "Django",
    "Spring Boot",
    "React.js",
    "Redux",
    "Tailwind CSS",
    "Formik",
    "Yup",
    "Angular",
    "Django Channels",
    "Celery",
    "Beat",
    "Worker",
  ],
  Databases: ["PostgreSQL", "MySQL"],
  "DevOps & Tools": ["Docker", "Prometheus", "Grafana"],
  "Security & Auth": ["JWT", "OAuth"],
  "APIs & Integration": ["REST APIs"],
};

const AboutMe1 = () => {
  return (
    <div className="lg:flex justify-between mb-2 min-h-screen pt-28 px-4">
      {/* Left Heading */}
      <div className="lg:w-[900px] lg:text-8xl text-[42px] font-bold text-black">
        <Typewriter
          words={["About Me"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-[1800px] lg:px-3 font-manrope">
        <h1 className="lg:text-3xl text-xl text-black mb-4">
          I’m Tapan Kumar, a Software Engineer based in Bangalore.
        </h1>
        <p className="mb-10 text-lg text-gray-800">
          Full Stack Developer with hands-on experience in building scalable web applications and automation tools.
          Currently leading backend migration at Capgemini from Spring Boot to Django. Previously, I developed a
          real-time DevOps dashboard at Jio Platforms and built a network automation system at Auctopus Technologies.
          <br /><br />
          Skilled in Python, Java, and JavaScript with a strong foundation in DSA, backend architecture, and frontend engineering. Passionate about solving real-world problems through clean code and scalable systems.
        </p>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-semibold text-black mb-3">{category}</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="text-sm border border-black text-black px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe1;
