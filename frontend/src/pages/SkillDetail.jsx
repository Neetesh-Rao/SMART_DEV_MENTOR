import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function SkillDetail() {
  const { skill } = useParams(); // Skill name from route
  const [videos, setVideos] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/resources/${skill}`
        );

        setVideos(res.data.videos);
        setRepos(res.data.repos);
        setLoading(false);
        toast.success("Youtube videos & GitHub repos!")
      } catch (error) {
        console.error("Error fetching resources:", error);
        setLoading(false);
      }
    };

    fetchResources();
  }, [skill]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{skill} Resources</h1>

      {/* YouTube Videos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">YouTube Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id.videoId}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full rounded"
              />
              <h3 className="mt-2 font-medium">{video.snippet.title}</h3>
              <p className="text-gray-500 text-sm">{video.snippet.channelTitle}</p>
            </a>
          ))}
        </div>
      </section>

      {/* GitHub Repos */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">GitHub Repos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <h3 className="font-medium text-lg">{repo.name}</h3>
              <p className="text-gray-500 text-sm">{repo.description}</p>
              <p className="text-sm mt-2">⭐ {repo.stargazers_count}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}