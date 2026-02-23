// frontend/src/pages/LandingPage.jsx
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Smart Developer Roadmap
      </h1>
      <p className="text-lg mb-8 text-center max-w-xl">
  A focused learning platform by{" "}
  <span className="font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-300 bg-clip-text text-transparent">
    Neetesh Yadav
  </span>{" "}
  — helping future developers turn ambition into real skills.
</p>
      <button
        onClick={() => navigate("/auth")}
        className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </div>
  );
}