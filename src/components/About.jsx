import { useState, useEffect } from "react";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loading every time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Loading About... ⏳
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-pink-400">
        About This App 🎉
      </h1>

      <p className="max-w-2xl text-center text-lg md:text-xl mb-6">
        This project is built with React, Tailwind CSS, and a lot of passion 💖.
        You're now learning lazy loading and routing like a pro!
      </p>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
        <p className="text-center text-md">
          🚀 Fast | 🎨 Beautiful | ⚡ Optimized
        </p>
      </div>
    </div>
  );
}