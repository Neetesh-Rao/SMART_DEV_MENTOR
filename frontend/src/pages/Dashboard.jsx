import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [roadmap, setRoadmap] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const userGoal = localStorage.getItem("userGoal"); // or fetch from user
        const res = await axios.get(`http://localhost:5000/api/roadmap/${encodeURIComponent(userGoal)}`);
        setRoadmap(res.data);
      } catch (err) {
        console.error("Failed to fetch roadmap:", err);
      }
    };

    fetchRoadmap();
  }, []);

  if (!roadmap) return <p>Loading roadmap...</p>;

  return (
    <div className="grid gap-4">
      {roadmap.skills.map((skill) => (
        <div
          key={skill.name}
          onClick={() => navigate(`/skill/${skill.name}`)}
          className="cursor-pointer border rounded p-4 hover:shadow-md transition"
        >
          {skill.name} - {skill.level}
        </div>
      ))}
    </div>
  );
}