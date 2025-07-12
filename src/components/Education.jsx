import { Typewriter } from "react-simple-typewriter";

export const Education = () => {
  return (
    <div
      className="lg:flex justify-between mb-2 h-[80vh] pt-28 px-4"
      id="education"
    >
      {/* Left Heading */}
      <div className="lg:w-[900px] lg:text-8xl text-[42px] font-bold text-black">
        <Typewriter
          words={["Education"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-[1800px] lg:px-3 font-manrope mt-6 lg:mt-0">
        <div className="mb-10 pb-4 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-black">
            B.Tech in Information Technology
          </h2>
          <p className="text-black mt-1">
            Maulana Abul Kalam Azad University of Technology, West Bengal
          </p>
          <div className="text-black text-sm mt-1">2020 – 2023 • CGPA: 9.2</div>
          <p className="text-black text-base mt-3">
            Completed my bachelor's degree in Information Technology from
            MAKAUT, West Bengal. Core subjects included Data Structures,
            Algorithms, Software Engineering, and Database Systems. Built a
            solid foundation in both theoretical and practical aspects of
            software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
