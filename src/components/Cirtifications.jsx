import { Typewriter } from "react-simple-typewriter";

const cirtificates = [
  {
    title: "Python (with Data Structures)",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/11f27fb76b94",
  },
  {
    title: "React",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/03248fbaa375",
  },
  {
    title: "Java",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/79a3b3a0ce5d",
  },
  {
    title: "JavaScript",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/cd2470e9715f",
  },
  {
    title: "Problem Solving",
    institiute: "Hackerrank",
    issuer: "Hackerrank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/1a0iPIgjzag48rEihJuGMK_NYF-RmUALG",
  },
];

const Cirtifications = () => {
  return (
    <>
      <div className="lg:flex justify-between lg:space-x-10 mb-40 min-h-screen pt-28 px-4" id="certification">
        {/* Typing Effect Heading */}
        <div className="lg:w-[900px] lg:text-8xl text-[42px] font-bold text-black">
          <Typewriter
            words={["My Certifications"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </div>

        {/* Certificates List */}
        <div className="lg:w-[1800px] lg:px-3 font-manrope lg:mr-20">
          <ul>
            {cirtificates.map((item, idx) => (
              <li key={idx} className="mb-6 pb-4 border-b border-gray-300">
                <h2 className="font-semibold text-black text-xl">
                  {item.title}
                </h2>
                <p className="text-gray-800">Institute: {item.institiute}</p>
                <div className="flex justify-between text-sm mt-1">
                  <p className="text-gray-600">
                    Issuer: {item.issuer} • {item.date}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    Verify
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="-mx-4 lg:-mx-28">
        <hr className="border-gray-300" />
      </div>
    </>
  );
};

export default Cirtifications;
