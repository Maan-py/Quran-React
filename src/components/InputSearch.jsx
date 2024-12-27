import { useState } from "react";

const InputSearch = ({ surahs, setListSurahBaru, width, height }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);

    if (value.length) {
      const listSurahTemp = surahs.filter((surah) => surah.name_simple.toLowerCase().includes(value.toLowerCase()));
      setListSurahBaru(listSurahTemp);
    } else {
      setListSurahBaru([]);
    }
  };

  return (
    <div className="flex w-full justify-center mt-10">
      <label className={`input input-bordered rounded-xl flex items-center gap-2 w-1/2 md:w-${width} h-${height}`}>
        <input type="text" className="grow" placeholder="Search" onChange={onChangeHandler} value={search} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
      </label>
    </div>
  );
};

export default InputSearch;
