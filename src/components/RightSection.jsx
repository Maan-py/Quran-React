import { useEffect, useState } from "react";

const RightSection = ({ selectedSurahName, selectedSurahNumber }) => {
  const [detailAyat, setdetailAyat] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/verses/by_chapter/${selectedSurahNumber}?fields=text_uthmani&per_page=286&translations=33`)
      .then((response) => response.json())
      .then((data) => setdetailAyat(data.verses))
      .catch((e) => {
        throw new Error(e);
      });
  }, [selectedSurahNumber]);

  return (
    <section className="sm:basis-3/4 w-full overflow-auto bg-slate-800 flex flex-col">
      <div className="p-10 h-20">
        <h3 className="text-3xl font-bold">{selectedSurahName || "Pilih Surah"}</h3>
      </div>
      <div className="h-full w-full">
        <ItemAyat detailAyat={detailAyat} />
      </div>
    </section>
  );
};

const ItemAyat = ({ detailAyat }) => {
  return (
    <div>
      {detailAyat.map((detail) => (
        <div key={detail.id} className="w-full px-10 py-4 border-b border-slate-600 p-2">
          <div className="w-full h-full flex justify-end">
            <h3 className="text-2xl font-bold font-surah block text-right break-words mb-2">{detail.text_uthmani}</h3>
          </div>
          <span className="mb-2" dangerouslySetInnerHTML={{ __html: detail.translations[0].text }} />
        </div>
      ))}
    </div>
  );
};

export default RightSection;
