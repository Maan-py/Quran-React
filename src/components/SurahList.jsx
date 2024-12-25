import { useState, useEffect } from "react";

const SurahList = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}`);
        const data = await response.json();
        setChapters(data.chapters);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch chapters:", error);
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {chapters.map((chapter) => (
        <div key={chapter.id} className="card bg-neutral text-neutral-content m-2 border-[0.5px] p-4 border-white-100 cursor-pointer hover:border-blue-300 hover:text-blue-300">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold bg-gray-700 rounded-full px-3 py-1">{chapter.id}</span>
          </div>
          <h2 className="text-lg font-bold">{chapter.name_simple}</h2>
          <div className="flex">
            <p className="text-sm">{chapter.translated_name.name}</p>
            <p className="mx-2 relative bottom-1">|</p>
            <p className="text-sm">{chapter.verses_count} Ayat</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurahList;
