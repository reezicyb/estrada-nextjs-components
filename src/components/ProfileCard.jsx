  export default function ProfileCard() {
    return (
      <div className="w-full max-w-4xl mx-auto mt-6 p-6 text-center">
        <div className="relative w-32 h-32 mx-auto rounded-full border-4 border-violet-500 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/profile.png"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 opacity-100 hover:opacity-0"
          />
          <img
            src="/nabunturan.jpg"
            alt="Profile Hover"
            className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 opacity-0 hover:opacity-100"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-4 text-violet-300">
          Raiko R. Estrada
        </h2>

        <div className="relative w-56 h-12 mx-auto mt-4 perspective cursor-pointer group">
          <div
            className="absolute inset-0 flex items-center justify-center text-gray-400 
                      transition-transform duration-1000 ease-out 
                      [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
          >
            <p className="backface-hidden">Student • Age: 19</p>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center 
                      transition-transform duration-1000 ease-out 
                      [transform:rotateY(180deg)] [transform-style:preserve-3d] 
                      group-hover:[transform:rotateY(360deg)]"
          >
            <p className="backface-hidden text-violet-400 font-semibold 
                          group-hover:animate-pulse 
                          group-hover:[text-shadow:0_0_10px_#a855f7,0_0_20px_#a855f7,0_0_40px_#a855f7]">
              June 02, 2006
            </p>
          </div>
        </div>

        <p
          className="w-full mx-auto mt-6 bg-[#2a2a40]/90 
              rounded-xl shadow-xl p-6 text-justify 
              border border-violet-700/40 backdrop-blur
              transition-all duration-300 
              hover:bg-[#3a2a60]/90 hover:scale-105 
              hover:shadow-violet-500/50 hover:border-violet-500"
        >
          I’m a college student who’s still learning how to code, but I really enjoy 
          exploring web development and practicing new skills. I like challenging myself 
          with small projects, experimenting with different technologies, and finding new 
          ways to improve as I grow as a developer.
        </p>
      </div>
    );
  }
