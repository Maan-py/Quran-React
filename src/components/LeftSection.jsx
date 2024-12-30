import { useState, useEffect } from "react";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";
// import { X } from "lucide-react";

const LeftSection = ({ setSelectedSurahName, setSelectedSurahNumber, isOpen, onClose }) => {
  const [surahs, setSurahs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [listSurahBaru, setListSurahBaru] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/chapters?language=id`)
      .then((response) => response.json())
      .then((data) => setSurahs(data.chapters))
      .catch((e) => {
        console.error("Error fetching surahs:", e);
      });
  }, []);

  const displayedSurahs = listSurahBaru.length > 0 ? listSurahBaru : surahs;

  return (
    <section
      className={`basis-1/4 w-3/4 fixed lg:static top-0 left-0 h-full bg-[#1d232a] overflow-auto z-40 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      // Menetapkan lebar sidebar tetap
    >
      <div className="flex justify-end p-4">
        {/* <button onClick={onClose}>
          <X size={25} className="text-white" />
        </button> */}
      </div>
      <InputSearch w="w-1/2" h="h-10" surahs={surahs} setListSurahBaru={setListSurahBaru} />
      <div className="pt-5">
        <ItemSurah
          surahs={displayedSurahs}
          selectedIndex={selectedIndex}
          onSurahClick={(surah, index) => {
            setSelectedIndex(index);
            setSelectedSurahName(surah.name_simple);
            setSelectedSurahNumber(surah.id);
            onClose(); // Tutup LeftSection setelah klik
          }}
        />
      </div>
    </section>
  );
};

const ItemSurah = ({ surahs, selectedIndex, onSurahClick }) => {
  return (
    <>
      {surahs.map((surah, index) => (
        <Link key={surah.id} to={`/surah/${surah.id}/${surah.name_simple}`}>
          <div className={`flex justify-between items-center px-4 pb-2 mt-2 pl-8 border-b border-gray-700 ${selectedIndex === index ? "bg-slate-600" : ""}`} onClick={() => onSurahClick(surah, index)}>
            <div className="flex flex-col w-full h-20 p-2 rounded-md group cursor-pointer hover:bg-slate-600">
              <div className="flex flex-row">
                <h2 className="text-white w-12 text-center">{surah.id}.</h2>
                <h2 className="text-white flex-1">{surah.name_simple}</h2>
              </div>
              <div className="flex flex-col ml-12">
                <p className="text-sm">{surah.translated_name.name}</p>
                <div className="flex">
                  <p className="mr-2">{surah.revelation_place.charAt(0).toUpperCase() + surah.revelation_place.slice(1)},</p>
                  <p>{surah.verses_count} ayat</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export { LeftSection, ItemSurah };
