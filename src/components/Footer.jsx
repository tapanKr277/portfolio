
const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 pt-6 pb-4 tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left: Name */}
        <div className="text-lg font-bold tracking-widest mb-4 md:mb-0">Tapan Kumar</div>

        {/* Right: Social Icons with Tooltip */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tapan-kumar-0447691b0/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <svg className="w-5 h-5 fill-white hover:scale-110 transition-transform" viewBox="0 0 32 32">
              <path d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z" />
              <path d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tapanKr277"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <svg className="w-5 h-5 fill-white hover:scale-110 transition-transform" viewBox="0 0 32 32">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z"
              />
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/tapankr277/"
            target="_blank"
            rel="noreferrer"
            title="LeetCode"
          >
            <svg className="w-5 h-5 fill-white hover:scale-110 transition-transform" viewBox="0 -2 24 28">
              <path d="M20.472 2.36a11.946 11.946 0 00-16.944 0 11.956 11.956 0 00-3.504 8.472c0 3.205 1.248 6.238 3.504 8.472a11.945 11.945 0 0016.944 0 11.945 11.945 0 000-16.944zm-1.416 15.528a9.951 9.951 0 01-14.112 0 9.951 9.951 0 010-14.112 9.951 9.951 0 0114.112 0 9.951 9.951 0 010 14.112z" />
              <path d="M10.5 7h3v10h-3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Centered Bottom Text */}
      <div className="text-center text-sm text-gray-400 mt-4 tracking-wider">
        © {new Date().getFullYear()} Tapan Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
