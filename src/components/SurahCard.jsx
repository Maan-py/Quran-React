// import React from "react";

function SurahCard({ number, name, versesCount, meaning, nameArabic }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gray-800 h-8 w-8 rounded-full flex items-center justify-center text-sm">{number}</div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{name}</h3>
              <span className="text-gray-400 text-sm">{nameArabic}</span>
            </div>
            <p className="text-sm text-gray-400">{meaning}</p>
          </div>
        </div>
        <div className="text-sm text-gray-400">{versesCount} Verses</div>
      </div>
    </div>
  );
}

export default SurahCard;
