import { getYouTubeVideos } from "../services/youtubeService.js";
import { getGitHubRepos } from "../services/githubService.js";

export const getSkillResources = async (req, res) => {
  const { skill } = req.params;

  try {
    const videos = await getYouTubeVideos(skill);  // might throw
    const repos = await getGitHubRepos(skill);    // might throw

    if ((!videos || videos.length === 0) && (!repos || repos.length === 0)) {
      return res.status(404).json({ message: "No resources found for this skill" });
    }

    res.json({ videos, repos });
  } catch (err) {
    console.error("Error fetching skill resources:", err);
    res.status(500).json({ message: "Failed to fetch resources" });
  }
};