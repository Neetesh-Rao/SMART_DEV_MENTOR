// frontend/src/pages/AuthPage.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = `http://localhost:5000/api/auth/${isLogin ? "login" : "register"}`;
//       const res = await axios.post(url,form);

//       const data = res.data;

//       if(data){
//  const userId = res.data.user._id; // or however your API returns it
// localStorage.setItem("userId", userId);
//       localStorage.setItem("token", res.data.token);
//       console.log("sdsddfdfdfwer34r32");
      
//       }
//      // check what keys exist
     
     

      
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const url = `http://localhost:5000/api/auth/${isLogin ? "login" : "register"}`;

    const res = await axios.post(url, form);
    const data = res.data;

    if (data) {
      // Save user data correctly
      localStorage.setItem("userId", data._id);
      localStorage.setItem("token", data.token);
      // localStorage.setItem("userName", data.name);

    if(isLogin){
        toast.success("Login successfully");
    }
    else{
        toast.success("Register successfully");
    }
        navigate('/select-goal')
      // Optional: Redirect after login
      // window.location.href = "/goal-select";
    }

  } catch (err) {
    console.error("Auth Error:", err);
    toast.error(err.response?.data?.message || "Something went wrong");
  }
}; 

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-purple-500 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold hover:bg-indigo-600 transition mb-4"
        >
          {isLogin ? "Login" : "Register"}
        </button>
        <p className="text-center text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-500 cursor-pointer font-semibold"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}