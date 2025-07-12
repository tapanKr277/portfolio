

const ProjectCard = ({ data }) => {
  return (
    <div className="w-full my-14 justify-between lg:flex mb-20">
      <div className=" lg:w-2/4 p-4 h-auto bg-secondary " >
        <a className="rounded-full bg-matblue2 p-1 px-3">Conceptual Work</a>
        <div className="p-5 py-7 flex items-center justify-center">
          <img src={data.img} alt="" className="lg:h-[350px] w-max "/>
        </div>
      </div>
      <div className="lg:w-2/4 lg:pl-12 lg:mt-0 mt-10 pb-2">
        <h1 className=" font-manrope text-LightBlue text-[32px]">{data.h1} </h1>
        <p className=" font-manrope text-secondary text-lg mt-4">{data.p}</p>
        <div className="mt-8 font-manrope">
          <h1 className=" py-4 font-semibold  text-base text-LightBlue border-b-[1px] border-dark1">
            PROJECT INFO
          </h1>

          <div className="py-4 flex items-center justify-between border-b-[1px] border-dark1 text-secondary">
            <div>Year</div>
            <div>{data.year}</div>
          </div>
          <div className="py-4 flex items-center justify-between border-b-[1px] border-dark1  text-secondary">
            <div>Role</div>
            <div>{data.role}</div>
          </div>
          <div className="flex  items-center mt-10 text-base">
            {data.livelink && (
              <a
                href={data.livelink}
                className="text-highGreen flex items-center mr-6 border-b-2 border-highGreen"
              >
                LIVE DEMO
                <svg
                  className="ml-1"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.9897 14.2175L12.3036 3.90363V11.3891L14.3033 11.3891L14.3033 0.48972L3.40391 0.48972L3.40391 2.48942L10.8893 2.48942L0.575487 12.8033L1.9897 14.2175Z"
                    fill="#D3E97A"
                  />
                </svg>
              </a>
            )}
            {data.gitlink && (
              <a
                href={data.gitlink}
                className="text-highGreen flex items-center border-b-2 border-highGreen"
              >
                See on Github
                <svg
                  className="ml-1 "
                  width="26"
                  height="26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.0282 2.16675C7.06008 2.16675 2.223 7.00383 2.223 12.9719C2.223 17.7451 5.31808 21.7957 9.61242 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3393 21.7675 10.3361 20.8673C7.32983 21.5194 6.695 19.4178 6.695 19.4178C6.20533 18.1698 5.49575 17.8372 5.49575 17.8372C4.51533 17.1666 5.5705 17.1818 5.5705 17.1818C6.656 17.2576 7.22475 18.2954 7.22475 18.2954C8.18892 19.9464 9.75542 19.4698 10.3686 19.1935C10.4672 18.4948 10.7488 18.0181 11.0565 17.7483C8.658 17.4764 6.136 16.5491 6.136 12.4075C6.136 11.2299 6.55742 10.2636 7.24533 9.50958C7.13592 9.2355 6.76217 8.13592 7.35258 6.64958C7.35258 6.64958 8.25933 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9405 7.39315 14.8498 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8088 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9868 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4493 23.2235C20.7415 21.7913 23.8333 17.744 23.8333 12.9719C23.8333 7.00383 18.9963 2.16675 13.0282 2.16675Z"
                    fill="#D3E97A"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
