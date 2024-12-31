import { HashLink } from "react-router-hash-link";

const BookmarkCard = ({ number, index, ayat, name_simple }) => {
  const parts = number.split(":");

  const chapterNumber = parts[0];
  const ayatNumber = parts[1];
  return (
    <HashLink smooth to={`/surah/${chapterNumber}/${encodeURIComponent(name_simple)}#${ayatNumber}`} className="block">
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-500 hover:border-teal-300 hover:border transition-colors cursor-pointer group">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-800 h-8 w-8 rounded-sm rotate-45 flex items-center justify-center text-sm group-hover:border-teal-300 group-hover:border mr-3">
              <span className="-rotate-45 h-8 w-8 flex justify-center items-center">{index + 1}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{name_simple}</h3>
              </div>
              <div className="text-sm text-gray-400 group-hover:text-teal-300 mb-2 mt-2">
                <span className="mt-1">Ayat {ayatNumber}</span>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-teal-300 mb-2">{ayat}</p>
            </div>
          </div>
        </div>
      </div>
    </HashLink>
  );
};

export default BookmarkCard;
