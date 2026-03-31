import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export default function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <nav className="flex justify-center gap-10 p-4 bg-gray-100 shadow-md">
        <Link
          to="/"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-pink-500 font-semibold hover:underline"
        >
          About
        </Link>
      </nav>

      {/* ROUTES */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-2xl font-bold">
            Loading... ⏳
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}