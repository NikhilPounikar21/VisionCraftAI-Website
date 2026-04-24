import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // 🚀 USER FROM LOCALSTORAGE (GOOGLE LOGIN SAFE)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // 🚀 CREATIONS FROM LOCALSTORAGE
  const [creations, setCreations] = useState([]);

  const loadCreations = () => {
    const data = JSON.parse(localStorage.getItem("creations")) || [];
    setCreations(data);
  };

  useEffect(() => {
    loadCreations();

    const handleUpdate = () => loadCreations();
    window.addEventListener("storage", handleUpdate);

    return () => window.removeEventListener("storage", handleUpdate);
  }, []);

  const menu = [
    { key: "profile", label: "My Profile" },
    { key: "creations", label: "My Creations" },
    { key: "favorites", label: "Favorites" },
    { key: "settings", label: "Settings" },
  ];

  // ⏳ LOADING SAFETY
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-gray-950 to-black text-white">

      {/* SIDEBAR */}
      <div className="w-72 bg-gray-900/60 backdrop-blur-xl border-r border-gray-800 p-6 flex flex-col">

        <h2 className="text-2xl font-bold text-purple-400 mb-8">
          Dashboard
        </h2>

        <div className="flex flex-col gap-2 flex-1">
          {menu.map((item) => (
            <div
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`cursor-pointer px-4 py-3 rounded-xl transition-all duration-300
              ${
                activeTab === item.key
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* CREDIT BOX */}
        <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
          <p className="text-sm text-gray-400">🔥 Credits Left</p>
          <h2 className="text-2xl font-bold text-green-400">
            {user.credits}
          </h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-2">
          Welcome Back Nikhil
        </h1>
        <p className="text-gray-400 mb-8">
          Manage your AI creations and account
        </p>

        {/* ================= PROFILE ================= */}
        {activeTab === "profile" && (
          <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex items-center gap-6">

            <img
              src={user.photoURL}
              alt="profile"
              className="w-20 h-20 rounded-full border border-purple-500"
            />

            <div>
              <h2 className="text-xl font-bold">
                {user.name}
              </h2>

              <p className="text-gray-400">
                {user.email}
              </p>

              <p className="text-gray-500 text-sm">
                Joined: {user.joinedAt
                  ? new Date(user.joinedAt).toLocaleDateString()
                  : "N/A"}
              </p>

              <p className="text-green-400 mt-1">
                Plan: {user.plan.toUpperCase()}
              </p>
            </div>

          </div>
        )}

        {/* ================= CREATIONS ================= */}
        {activeTab === "creations" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {creations.length === 0 ? (
              <p className="text-gray-400">
                No creations yet 🚀
              </p>
            ) : (
              creations.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:scale-105 transition"
                >
                  <img
                    src={item.url}
                    className="rounded-lg mb-3"
                    alt="generated"
                  />

                  <p className="text-sm text-gray-300">
                    {item.prompt}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString()
                      : "Just now"}
                  </p>

                  <a
                    href={item.url}
                    download
                    className="mt-3 inline-block bg-purple-600 px-3 py-1 rounded-lg text-sm"
                  >
                    Download
                  </a>
                </div>
              ))
            )}

          </div>
        )}

        {/* ================= FAVORITES ================= */}
        {activeTab === "favorites" && (
          <div className="text-gray-300">
            <h2 className="text-xl font-semibold mb-4">
              Favorite Images
            </h2>
            <p>No favorites yet.</p>
          </div>
        )}

        {/* ================= SETTINGS ================= */}
        {activeTab === "settings" && (
          <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl space-y-4">

            <input
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
              placeholder="Change Name"
            />

            <input
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
              placeholder="Change Email"
            />

            <button className="bg-purple-600 px-4 py-2 rounded-lg">
              Save Changes
            </button>

            <button className="bg-red-600 px-4 py-2 rounded-lg ml-3">
              Logout
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;