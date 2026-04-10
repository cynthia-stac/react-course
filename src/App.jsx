import Login from "./components/Login";
import Profile from "./components/Profile";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

export default function App() {
  const fallbackDiv = <div className="flex justify-center items-center h-screen text-2xl font-bold">Loading... ⏳</div>;

  return (
    <div className="flex flex-col gap-12 my-5">
        <BrowserRouter>
          {/* NAVBAR */}
          <nav className="flex justify-center gap-10 p-4 bg-gray-100 shadow-md">
            <Link to="/" className="text-indigo-600 font-semibold hover:underline">Home</Link>
            <Link to="/about" className="text-pink-500 font-semibold hover:underline">About</Link>
          </nav>

          {/* ROUTES */}
          <Suspense fallback={fallbackDiv}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </BrowserRouter>


        <Profile />
        <Login />
    </div>
  );
}