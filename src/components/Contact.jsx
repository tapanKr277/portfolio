import { useState } from "react";
import { openPdfInNewTab } from "./Intro";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const [recipient, setRecipient] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(subject);
    const messageEncoded = encodeURIComponent(message);
    const mailtoUrl = `mailto:tapankr277@gmail.com?subject=${subjectEncoded}&body=${messageEncoded}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="w-full min-h-screen text-black pt-14 px-4" id="contact">
      <div className="wrapper lg:flex w-full">
        {/* Left Section */}
        <div className="links lg:w-2/4 px-2">
          <h1 className="lg:text-7xl text-5xl font-bold text-black">
            <Typewriter
              words={["Let’s connect"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <h3 className="font-manrope text-lg text-gray-800 mt-4">
            Say hello at{" "}
            <span
              className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
              onClick={handleSendEmail}
            >
              tapankr277@gmail.com
            </span>
          </h3>

          <h3 className="font-manrope text-lg text-gray-800 mt-2">
            For more info, here’s my{" "}
            <span
              className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
              onClick={openPdfInNewTab}
            >
              resume
            </span>
          </h3>

          {/* Social Icons with Tooltip and Animation */}
          {/* Social Icons (Styled like Intro.jsx) */}
          <div className="flex gap-4 mt-10 flex-wrap">
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
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
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

            {/* LeetCode */}
            {/* LeetCode */}
            <div className="relative group">
              <a
                href="https://leetcode.com/u/tapankr277/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 50 50"
                  width="20"
                  height="20"
                >
                  <path d="M34.3 9.3a1.9 1.9 0 0 0-2.7 0l-11 11a1.9 1.9 0 0 0 0 2.7l11 11a1.9 1.9 0 1 0 2.7-2.7L24.4 25l9.9-9.9a1.9 1.9 0 0 0 0-2.7z" />
                  <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 42C14.1 44 6 35.9 6 25S14.1 6 25 6s19 8.1 19 19-8.1 19-19 19z" />
                </svg>
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                LeetCode
              </span>
            </div>

            {/* Instagram */}
            {/* Instagram */}
            <div className="relative group">
              <a
                href="https://www.instagram.com/_yadav_g_7/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 448 512"
                  width="20"
                  height="20"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186c-39.3 0-71.1-31.8-71.1-71.1s31.8-71.1 71.1-71.1 71.1 31.8 71.1 71.1-31.8 71.1-71.1 71.1zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.1-35.3-9.4-66.7-34.1-91.4S371.3 0 336 0H112C76.7 0 45.3 9.4 20.6 34.1S0 76.7 0 112v224c.1 35.3 9.4 66.7 34.1 91.4S76.7 448 112 448h224c35.3-.1 66.7-9.4 91.4-34.1S448 371.3 448 336V112zM398.8 398.8c-19.7 19.7-45.9 30.6-73.2 30.7H122.4c-27.3-.1-53.5-11-73.2-30.7S18.5 352.9 18.4 325.6V122.4c.1-27.3 11-53.5 30.7-73.2S95.1 18.5 122.4 18.4H325.6c27.3.1 53.5 11 73.2 30.7s30.6 45.9 30.7 73.2v203.2c-.1 27.3-11 53.5-30.7 73.2z" />
                </svg>
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                Instagram
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form
          onSubmit={handleSendEmail}
          className="grid grid-cols-1 font-manrope lg:w-2/4 px-2 mt-16 lg:mt-0"
        >
          <div className="grid grid-cols-1">
            <label className="mb-1">Name</label>
            <input
              type="text"
              className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-6">
            <label className="mb-1">Email</label>
            <input
              type="email"
              className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-6">
            <label className="mb-1">Subject</label>
            <input
              type="text"
              className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-6">
            <label className="mb-1">Message</label>
            <textarea
              className="p-2 bg-gray-100 text-black rounded-sm h-40 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>

          <div>
            <input
              className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full font-bold mt-10 cursor-pointer transition duration-200"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
