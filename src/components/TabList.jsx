import SurahCard from "./SurahCard";

const TabList = ({ surahs }) => {
  return (
    <div className="flex justify-center">
      <div role="tablist" className="tabs tabs-lifted w-full my-20 mx-5 sm:min-w-full md:my-20 md:px-20  md:mx-5 lg:px-20 lg:my-20">
        <TabSurah surahs={surahs}></TabSurah>
        <TabRevelation surahs={surahs}></TabRevelation>
      </div>
    </div>
  );
};

const TabSurah = ({ surahs }) => {
  return (
    <>
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Surah" defaultChecked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {surahs.map((surah) => {
            return <SurahCard key={surah.id} number={surah.id} name_simple={surah.name_simple} name_arabic={surah.name_arabic} translated_name={surah.translated_name.name} verses_count={surah.verses_count}></SurahCard>;
          })}
        </div>
      </div>
    </>
  );
};

const TabRevelation = ({ surahs }) => {
  const sortedSurahs = [...surahs].sort((a, b) => a.revelation_order - b.revelation_order);
  return (
    <>
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Revelation Order" style={{ whiteSpace: "nowrap" }} />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedSurahs.map((surah) => {
            return <SurahCard key={surah.id} number={surah.id} name_simple={surah.name_simple} name_arabic={surah.name_arabic} translated_name={surah.translated_name.name} verses_count={surah.verses_count} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TabList;
