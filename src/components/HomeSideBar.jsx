import { Link } from "react-router-dom";
const HomeSideBar = ({ isOpen }) => {
  return (
    <section className={`basis-1/4 w-3/4 md:w-1/2 fixed xl:hidden top-0 left-0 h-full bg-[#1d232a] overflow-auto z-40 transform transition-transform duration-300 lg:translate-x-0 flex ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="rounded-xl fixed top-[130px] flex flex-col items-center">
          <img src="/ramadan.png" alt="logo" width={70} height={70} />
          <h3 className="font-bold text-white text-2xl">Quran App</h3>
        </div>
        {/* Menu */}
        <div
          className="w-3/4 flex flex-col justify-center text-white space-y-10 font-semibold">
          <Link to={`/surah/1/Al-Fatihah`}>
            <div className="h-10 flex justify-center items-center text-xl border-b-[1px] border-b-gray-400 rounded-lg hover:border hover:border-gray-400 hover:rounded-md">Read Quran</div>
          </Link>
          <Link to={`/bookmark`}>
            <div className="h-10 flex justify-center items-center text-xl border-b-[1px] border-b-gray-400 rounded-lg hover:border hover:border-gray-400 white hover:rounded-md">Bookmark</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSideBar;
