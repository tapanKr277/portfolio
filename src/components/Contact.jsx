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
    const messageEncoded = encodeURIComponent(`Name: ${recipient}\nEmail: ${recipientEmail}\n\n${message}`);
    const mailtoUrl = `mailto:tapankr277@gmail.com?subject=${subjectEncoded}&body=${messageEncoded}`;
    window.open(mailtoUrl, "_blank");
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
            <a
              href="mailto:tapankr277@gmail.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              tapankr277@gmail.com
            </a>
          </h3>

          <h3 className="font-manrope text-lg text-gray-800 mt-2">
            For more info, here’s my{" "}
            <a
              onClick={openPdfInNewTab}
              className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
            >
              resume
            </a>
          </h3>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            {/* Socials use same hover-group tooltip pattern */}
            {[
              {
                href: "https://www.linkedin.com/in/tapan-kumar-0447691b0/",
                label: "LinkedIn",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="white">
                    <path d="M6.644 9.596C8.255 9.596 9.561 8.29 9.561 6.679S8.255 3.761 6.644 3.761 3.727 5.067 3.727 6.679 5.033 9.596 6.644 9.596Z" />
                    <path d="M12.316 11.807V27.992h5.025V19.988c0-2.112.397-4.157 3.016-4.157 2.583 0 2.615 2.415 2.615 4.291v7.871h5.028V19.117c0-4.36-.939-7.711-6.035-7.711-2.446 0-4.086 1.343-4.757 2.614h-.068v-2.213h-4.824zM4.127 11.807h5.033V27.992H4.127z" />
                  </svg>
                ),
              },
              {
                href: "https://github.com/tapanKr277",
                label: "GitHub",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.035 2.667C8.689 2.667 2.736 8.62 2.736 15.965c0 5.875 3.809 10.86 9.095 12.62.665.12.905-.289.905-.641 0-.316-.011-1.154-.015-2.262-3.7.803-4.481-1.783-4.481-1.783-.602-1.536-1.475-1.945-1.475-1.945-1.207-.825.091-.807.091-.807 1.337.093 2.037 1.37 2.037 1.37 1.187 2.032 3.115 1.445 3.87 1.105.122-.86.469-1.447.848-1.779-2.952-.334-6.056-1.475-6.056-6.572 0-1.449.518-2.639 1.365-3.567-.135-.337-.591-1.69.136-3.519 0 0 1.116-.359 3.656 1.361 1.084-.295 2.203-.446 3.328-.448 1.124.002 2.243.153 3.328.448 2.54-1.72 3.655-1.361 3.655-1.361.728 1.829.272 3.182.137 3.519.848.928 1.365 2.118 1.365 3.567 0 5.103-3.105 6.233-6.067 6.568.479.41.905 1.221.905 2.461 0 1.779-.016 3.213-.016 3.649 0 .356.236.768.915.637 5.283-1.763 9.089-6.744 9.089-12.618 0-7.345-5.953-13.298-13.298-13.298z"
                    />
                  </svg>
                ),
              },
              {
                href: "https://leetcode.com/u/tapankr277/",
                label: "LeetCode",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="20" height="20">
                    <path d="M34.3 9.3a1.9 1.9 0 0 0-2.7 0l-11 11a1.9 1.9 0 0 0 0 2.7l11 11a1.9 1.9 0 1 0 2.7-2.7L24.4 25l9.9-9.9a1.9 1.9 0 0 0 0-2.7z" />
                    <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 42C14.1 44 6 35.9 6 25S14.1 6 25 6s19 8.1 19 19-8.1 19-19 19z" />
                  </svg>
                ),
              },
              {
                href: "https://www.instagram.com/_yadav_g_7/",
                label: "Instagram",
                icon: (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 448 512"
                  width="20"
                  height="20"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186c-39.3 0-71.1-31.8-71.1-71.1s31.8-71.1 71.1-71.1 71.1 31.8 71.1 71.1-31.8 71.1-71.1 71.1zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.1-35.3-9.4-66.7-34.1-91.4S371.3 0 336 0H112C76.7 0 45.3 9.4 20.6 34.1S0 76.7 0 112v224c.1 35.3 9.4 66.7 34.1 91.4S76.7 448 112 448h224c35.3-.1 66.7-9.4 91.4-34.1S448 371.3 448 336V112zM398.8 398.8c-19.7 19.7-45.9 30.6-73.2 30.7H122.4c-27.3-.1-53.5-11-73.2-30.7S18.5 352.9 18.4 325.6V122.4c.1-27.3 11-53.5 30.7-73.2S95.1 18.5 122.4 18.4H325.6c27.3.1 53.5 11 73.2 30.7s30.6 45.9 30.7 73.2v203.2c-.1 27.3-11 53.5-30.7 73.2z" />
                </svg>
                ),
              },
            ].map(({ href, icon, label }) => (
              <div className="relative group" key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black hover:bg-gray-700 transition-all duration-300 rounded-full flex items-center justify-center"
                >
                  {icon}
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <form onSubmit={handleSendEmail} className="grid grid-cols-1 font-manrope lg:w-2/4 px-2 mt-16 lg:mt-0">
          {/* Name */}
          <label className="mb-1 mt-4">Name</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />
          {/* Email */}
          <label className="mb-1 mt-6">Email</label>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
            className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />
          {/* Subject */}
          <label className="mb-1 mt-6">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-2 h-12 bg-gray-100 text-black rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />
          {/* Message */}
          <label className="mb-1 mt-6">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-2 bg-gray-100 text-black rounded-sm h-40 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 outline-none"
          />
          <input
            type="submit"
            value="Send Message"
            className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full font-bold mt-10 cursor-pointer transition duration-200"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

