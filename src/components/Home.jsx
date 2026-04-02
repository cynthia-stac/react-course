import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loading every time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Loading Home... ⏳
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center">
        ❤️ Welcome Home ❤️
      </h1>

      <p className="text-lg md:text-2xl mb-8 text-center max-w-xl">
        Jesus is my Maker and my King. This is a peaceful place to learn and grow ✨
      </p>

      <button className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
        Get Started 🚀
      </button>
    </div>
  );
}