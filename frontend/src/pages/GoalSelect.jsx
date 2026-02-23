// frontend/src/pages/GoalSelect.jsx
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function GoalSelect() {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState("");
    const [goals, setGoals] = useState([]);
     useEffect(() => {
    const fetchGoals = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/roadmap");
        setGoals(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load goals");
      }
    };

    fetchGoals();
  }, []);

  
 

const handleContinue = async () => {
  try {
    const userId = localStorage.getItem("userId"); // MUST exist
console.log(userId);
    if (!userId) {
      toast.error("User not logged in");
      return;
    }

    const res = await axios.put("http://localhost:5000/api/user/goal", {
      userId,
      goal: selectedGoal,
    });

    console.log(res.data);
    localStorage.setItem("userGoal", selectedGoal);
    
     if(res.status===200){
      toast.success("Goal updated successfully!");
              navigate("/dashboard");
      }
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.message || "Failed to update goal");
  }
};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8">Select Your Career Goal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {goals.map((item) => (
          <div
            key={item._id}
            onClick={() => setSelectedGoal(item.goal)}
            className={`cursor-pointer border-2 rounded-lg p-6 text-center font-semibold transition
              ${selectedGoal === item.goal ? "border-indigo-500 bg-indigo-100" : "border-gray-300 hover:bg-gray-100"}`}
          >
            {item.goal}
          </div>
        ))}
      </div>
      <button
        onClick={handleContinue}
        className="bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition"
      >
        Continue
      </button>
    </div>
  );
}