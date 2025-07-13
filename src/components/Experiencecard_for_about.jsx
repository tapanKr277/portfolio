const Experiencecard_for_about = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 hover:rotate-[0.5deg]">
      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
      <p className="text-sm font-medium text-gray-600">{job.company}</p>
      <div className="text-sm text-gray-500">
        {job.start} – {job.end} • {job.location}
      </div>
      <p className="mt-3 text-base text-black">{job.discription}</p>
    </div>
  );
};

export default Experiencecard_for_about;
