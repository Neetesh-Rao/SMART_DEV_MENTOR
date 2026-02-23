import axios from "axios";

export const getYouTubeVideos = async (skill) => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        q: skill + " full course",
        type: "video",
        maxResults: 4,
        key: process.env.YOUTUBE_API_KEY
      }
    }
  );

  return response.data.items;
};