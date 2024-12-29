import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bismillah from "./Bismillah";

const RightSection = ({ selectedSurahName, selectedSurahNumber }) => {
  const { id } = useParams();
  const [detailAyat, setdetailAyat] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/verses/by_chapter/${id}?fields=text_uthmani&per_page=286&translations=33&words=true`)
      .then((response) => response.json())
      .then((data) => setdetailAyat(data.verses))
      .catch((e) => {
        throw new Error(e);
      });
  }, [id]);

  return (
    <section className="sm:basis-3/4 w-full overflow-auto bg-slate-800 flex flex-col">
      <div className="p-10 h-20 flex justify-center">
        <h3 className="text-3xl font-bold">{selectedSurahName || "Pilih Surah"}</h3>
      </div>
      <div className="h-full w-full">
        <ItemAyat detailAyat={detailAyat} />
      </div>
    </section>
  );
};

const ItemAyat = ({ detailAyat }) => {
  const { name_simple } = useParams();
  return (
    <div>
      <div className="flex justify-center mt-5 mb-10">{name_simple !== "Al-Fatihah" && name_simple !== "At-Tawbah" ? <Bismillah /> : ""}</div>
      {detailAyat.map((detail) => (
        <div key={detail.id} className="w-full px-10 py-4 border-b border-slate-600 p-2">
          <div className="w-full h-full flex flex-col justify-end">
            <h3 className="text-2xl font-bold font-surah block text-right break-words mb-2">{detail.text_uthmani}</h3>
            <div className="flex flex-wrap justify-start mb-4">
              {/* Menambahkan transliterasi */}
              {detail.words &&
                detail.words.map((word, index) => (
                  <div key={index} className="text-lg text-left break-words mr-1">
                    <p className="text-sm text-gray-400 text-right break-words">{word.transliteration.text}</p>
                  </div>
                ))}
            </div>
          </div>
          <span className="mb-2 flex">
            <span dangerouslySetInnerHTML={{ __html: detail.translations[0].text }} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
