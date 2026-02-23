import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import GoalSelect from "./pages/GoalSelect";
import Dashboard from "./pages/Dashboard";
import SkillDetail from "./pages/SkillDetail";
import { Toaster } from "react-hot-toast";
// Simple Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/auth" />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
     <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route
          path="/select-goal"
          element={
            <ProtectedRoute>
              <GoalSelect />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard  />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skill/:skill"
          element={
            <ProtectedRoute>
              <SkillDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;