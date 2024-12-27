import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import InputSearch from "../components/InputSearch";

const SurahDetail = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/chapters`)
      .then((response) => response.json())
      .then((data) => setSurahs(data.chapters))
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return (
    <>
      <TopNav></TopNav>
      <div className="h-[calc(100vh-4rem)] bg-slate-800 flex flex-row">
        <section className="basis-1/4 bg-[#1d232a] overflow-auto">
          <InputSearch width={"3/4"} height={10}></InputSearch>
          <div className="pt-5">
            {surahs.map((surah, index) => {
              return (
                <ItemSurah
                  key={surah.id}
                  number={surah.id}
                  surahName={surah.name_simple}
                  translated_name={surah.translated_name.name}
                  revelation_place={surah.revelation_place}
                  verses_count={surah.verses_count}
                  isSelected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}></ItemSurah>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

const ItemSurah = ({ number, surahName, isSelected, translated_name, revelation_place, verses_count, onClick }) => {
  return (
    <div className="flex justify-between items-center px-4 pb-2 mt-2 pl-8 border-b border-gray-700">
      <div className={`flex flex-col w-full h-20 p-2 rounded-md group cursor-pointer hover:bg-slate-600 ${isSelected ? "bg-slate-600" : ""}`} onClick={onClick}>
        <div className="flex flex-row">
          <h2 className="text-white w-12 text-center">{number}.</h2>
          <h2 className="text-white flex-1">{surahName}</h2>
        </div>
        <div className="flex flex-col ml-12">
          <p className="text-sm">{translated_name}</p>
          <div className="flex">
            <p className="mr-2">{revelation_place.charAt(0).toUpperCase() + revelation_place.slice(1)},</p>
            <p>{verses_count} ayat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SurahDetail, ItemSurah };
