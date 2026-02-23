// controllers/userController.js
import User from "../models/User.js";

// PUT /api/user/goal




export const updateGoal = async (req, res) => {
  try {
    const { userId, goal } = req.body;

    if (!userId || !goal) {
      return res.status(400).json({ message: "UserId and goal required" });
    }

    // Find user by ID and update goal
    const user = await User.findByIdAndUpdate(
      userId,
      { goal },
      { new: true } // Updated document return kare
    );

    if (!user) return res.status(404).json({ message: "User not found" });
     console.log('1');
     
    return res.status(200).json({ message: "Goal updated", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};