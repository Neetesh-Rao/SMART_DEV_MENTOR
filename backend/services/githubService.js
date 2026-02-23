import axios from "axios";

export const getGitHubRepos = async (skill) => {
  const response = await axios.get(
    "https://api.github.com/search/repositories",
    {
      params: {
        q: skill + " beginner projects",
        sort: "stars",
        order: "desc",
        per_page: 4
      }
    }
  );

  return response.data.items;
};