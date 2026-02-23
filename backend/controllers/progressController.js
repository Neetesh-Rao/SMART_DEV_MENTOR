import Progress from "../models/Progress.js";

export const updateProgress = async (req, res) => {
  const { userId, completedSkills, totalSkills } = req.body;

  const percentage =
    (completedSkills.length / totalSkills) * 100;

  const progress = await Progress.findOneAndUpdate(
    { userId },
    {
      completedSkills,
      totalSkills,
      completionPercentage: percentage
    },
    { new: true, upsert: true }
  );

  res.json(progress);
};