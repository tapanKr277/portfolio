
const Experiencecard_for_about = ({ job }) => {
  return (
    <div className="mb-7">
      <div className="lg:flex justify-between">
        <h1 className="lg:text-2xl text-lg font-medium text-black">
          {job.title}
        </h1>
        <h1 className="lg:text-lg text-base text-black">
          {job.start} - {job.end}
        </h1>
      </div>

      <h1 className="text-lg font-semibold text-black">
        {job.company}
        {job.location && (
          <span className="text-gray-700 font-normal"> | {job.location}</span>
        )}
      </h1>

      <p className="text-black text-base mt-4">{job.discription}</p>
    </div>
  );
};

export default Experiencecard_for_about;
