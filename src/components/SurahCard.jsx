import { Link } from "react-router-dom";

const SurahCard = ({ number, name_simple, name_arabic, translated_name, verses_count }) => {
  return (
    <Link to={`/surah/${number}/${encodeURIComponent(name_simple)}`} className="block">
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-500 hover:border-teal-300 hover:border transition-colors cursor-pointer group">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-800 h-8 w-8 rounded-sm rotate-45 flex items-center justify-center text-sm group-hover:border-teal-300 group-hover:border mr-3">
              <span className="-rotate-45">{number}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{name_simple}</h3>
              </div>
              <p className="text-sm text-white group-hover:text-teal-300">{translated_name}</p>
            </div>
          </div>
          <div className="text-sm text-white group-hover:text-teal-300 flex flex-col items-center">
            <span className="text-white font-surah">{name_arabic}</span>
            <span className="mt-1">{verses_count} Ayat</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
