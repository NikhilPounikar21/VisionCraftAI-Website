import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Designer",
    text: "Best AI generator I’ve used! The quality is insane.",
  },
  {
    name: "Ananya Verma",
    role: "Content Creator",
    text: "Super fast and high quality! I use it daily.",
  },
  {
    name: "Amit Patel",
    role: "Developer",
    text: "This saved me hours of work. Highly recommended!",
  },
  {
    name: "Sneha Kapoor",
    role: "Digital Artist",
    text: "The styles and results are just mind-blowing.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 text-center bg-black text-white">
      <h2 className="text-4xl font-bold mb-12">💬 What Users Say</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <p className="text-gray-300 mb-4">“{t.text}”</p>
            <h4 className="font-semibold">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;