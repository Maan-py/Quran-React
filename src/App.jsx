import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";
import TopNav from "./components/TopNav";
import SurahCard from "./components/SurahCard";
import "./App.css";

function App() {
  const [surahs, setSurahs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.quran.com/api/v4/chapters")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSurahs(data.chapters);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error("Failed to fetch surahs:", e);
        setError("Unable to load Surahs. Please check your internet connection and try again.");
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <TopNav />

      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <input type="search" placeholder="What do you want to learn?" className="w-full bg-gray-900 border-gray-800 rounded-full pl-12 py-2 text-white" />
          {/* <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
        </div>

        <div className="space-y-6">
          <div className="text-teal-500 text-sm border-b border-gray-800 pb-2">Follow the Global Quranic Calendar for weekly readings, inspiring prompts, and a call to reflect</div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-teal-400">Quran Growth Journey</h2>

            <div className="space-y-2">
              <details className="group">
                <summary className="flex items-center justify-between w-full p-2 bg-gray-800 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-teal-500 rounded-full" />
                    <span>Custom Quran Reading Guide</span>
                  </div>
                </summary>
                <div className="p-4 bg-gray-800 mt-2 rounded-lg">Content for reading guide...</div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between w-full p-2 bg-gray-800 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-teal-500 rounded-full" />
                    <span>Learning Plans</span>
                  </div>
                </summary>
                <div className="p-4 bg-gray-800 mt-2 rounded-lg">Content for learning plans...</div>
              </details>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-400">Loading Surahs...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-400">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {surahs.map((surah) => (
                <SurahCard key={surah.id} number={surah.id} name={surah.name_simple} versesCount={surah.verses_count} meaning={surah.translated_name.name} nameArabic={surah.name_arabic} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
