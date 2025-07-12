const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 pt-6 pb-4 tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left: Name */}
        <div className="text-lg font-bold tracking-widest mb-4 md:mb-0">
          Tapan Kumar
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tapan-kumar-0447691b0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
              <path d="M6.644 9.596C8.255 9.596 9.561 8.29 9.561 6.679S8.255 3.761 6.644 3.761 3.727 5.067 3.727 6.679 5.033 9.596 6.644 9.596Z" />
              <path d="M12.316 11.807V27.992h5.025V19.988c0-2.112.397-4.157 3.016-4.157 2.583 0 2.615 2.415 2.615 4.291v7.871h5.028V19.117c0-4.36-.939-7.711-6.035-7.711-2.446 0-4.086 1.343-4.757 2.614h-.068v-2.213h-4.824zM4.127 11.807h5.033V27.992H4.127z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tapanKr277"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.035 2.667C8.689 2.667 2.736 8.62 2.736 15.965c0 5.875 3.809 10.86 9.095 12.62.665.12.905-.289.905-.641 0-.316-.011-1.154-.015-2.262-3.7.803-4.481-1.783-4.481-1.783-.602-1.536-1.475-1.945-1.475-1.945-1.207-.825.091-.807.091-.807 1.337.093 2.037 1.37 2.037 1.37 1.187 2.032 3.115 1.445 3.87 1.105.122-.86.469-1.447.848-1.779-2.952-.334-6.056-1.475-6.056-6.572 0-1.449.518-2.639 1.365-3.567-.135-.337-.591-1.69.136-3.519 0 0 1.116-.359 3.656 1.361 1.084-.295 2.203-.446 3.328-.448 1.124.002 2.243.153 3.328.448 2.54-1.72 3.655-1.361 3.655-1.361.728 1.829.272 3.182.137 3.519.848.928 1.365 2.118 1.365 3.567 0 5.103-3.105 6.233-6.067 6.568.479.41.905 1.221.905 2.461 0 1.779-.016 3.213-.016 3.649 0 .356.236.768.915.637 5.283-1.763 9.089-6.744 9.089-12.618 0-7.345-5.953-13.298-13.298-13.298z"
              />
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/tapankr277/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 -2 24 28">
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
