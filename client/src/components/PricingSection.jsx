import React from "react";

const plans = [
  {
    name: "Free Plan",
    price: "₹0",
    features: [
      "5 Image Generations / day",
      "Basic Styles",
      "Standard Quality",
      "Watermarked Images",
    ],
    highlight: false,
  },
  {
    name: "Pro Plan",
    price: "₹499/mo",
    features: [
      "100 Image Generations / day",
      "All Styles (Anime, 3D, Cyberpunk)",
      "HD Quality",
      "No Watermark",
      "Faster Processing",
    ],
    highlight: true,
  },
  {
    name: "Premium Plan",
    price: "₹999/mo",
    features: [
      "Unlimited Generations",
      "All Styles + Exclusive",
      "4K Quality",
      "No Watermark",
      "Priority Rendering",
      "Download & Share Options",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-4">💎 Choose Your Plan</h2>
      <p className="text-gray-400 mb-12">
        Start free, upgrade anytime 🚀
      </p>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl border ${
              plan.highlight
                ? "border-purple-500 scale-105 bg-gradient-to-b from-purple-900/40 to-black"
                : "border-gray-700"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>

            <ul className="text-gray-300 space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button
              className={`px-6 py-3 rounded-full font-semibold ${
                plan.highlight
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;