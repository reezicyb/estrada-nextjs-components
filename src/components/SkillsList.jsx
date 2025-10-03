export default function SkillsList() {
  const skills = [
    { name: "C++", percent: 48 },
    { name: "Java", percent: 63 },
    { name: "C#", percent: 21 },
  ];

  return (
    <section
      className="max-w-4xl w-full mx-auto mt-6 bg-[#2a2a40]/90
                rounded-xl shadow-xl p-6 text-center 
                border border-violet-700/40 backdrop-blur
                transition-all duration-300 
                hover:bg-[#3a2a60]/90 hover:scale-105 hover:shadow-violet-500/50 hover:border-violet-500"
    >
      <h3 className="text-xl font-semibold text-violet-400 mb-4">Skills</h3>

      <div className="flex justify-center gap-6 flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative px-5 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 
                      text-white rounded-full shadow-md cursor-pointer 
                      transition duration-300 hover:scale-105 hover:shadow-violet-500/50"
          >
            <span className="font-medium">{skill.name}</span>

            <div className="absolute left-0 right-0 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="bg-violet-400 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              <p className="text-sm text-violet-300 mt-1">{skill.percent}%</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  