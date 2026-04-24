import React from "react";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=800",
    prompt: "Futuristic AI city with neon lights and flying cars",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=800",
    prompt: "Cyberpunk girl with glowing tattoos",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?q=80&w=800",
    prompt: "Astronaut riding a horse on Mars",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800",
    prompt: "Fantasy dragon over castle",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?q=80&w=800",
    prompt: "AI robot in futuristic lab",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=800",
    prompt: "Space galaxy with neon stars",
  },
];

const CommunitySection = () => {
  return (
    <div
      id="community"
      className="min-h-screen flex flex-col justify-center bg-black text-white relative overflow-hidden py-20"
    >
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-20 top-10 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Explore AI Creations
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover amazing AI-generated images shared by creators worldwide.
          </p>
        </div>

        {/* Scroll Row */}
        <div className="relative w-full overflow-hidden">

          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex gap-6 animate-scroll w-max px-10">
            {[...posts, ...posts].map((post, index) => (
              <div
                key={index}
                className="min-w-[260px] h-[320px] relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src={post.image}
                  alt="AI"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-3">
                  <p className="text-sm font-semibold text-white">
                    {post.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CommunitySection;