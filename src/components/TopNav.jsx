import { Bookmark, Menu, ChevronLeft, House } from "lucide-react";

function TopNav({ toggleLeftSection }) {
  const isRoot = location.pathname === "/";
  return (
    <nav className="bg-[#1d232a] z-50 h-16 flex items-center justify-between pl-5 pr-5 border-b border-gray-800 sticky top-0">
      <div className="flex flex-row items-center">
        <button className="md:hidden text-white" onClick={toggleLeftSection}>
          <Menu size={30} />
        </button>
        <a href="/" className="flex items-center ml-4">
          {!isRoot ? (
            <div className="hidden text-white xl:block mr-4">
              <ChevronLeft size={30} />
            </div>
          ) : (
            ""
          )}
          <img src="/app-logo.svg" alt="app logo" className="mr-2 mt-1" width={25} />
          <h1 className="font-bold text-white text-xl">Quran</h1>
        </a>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-white p-2 hover:bg-gray-800 rounded-full flex">
          <a href="/bookmark" className="flex justify-center items-center">
            <Bookmark className="h-5 w-5 mx-2" /> <span className="flex justify-center items-center">Bookmark</span>
          </a>
        </button>
        <button className="text-white p-2 hover:bg-gray-800 rounded-full flex">
          <a href="/">
            <div className="h-5 w-5 mx-2">
              <House />
            </div>
          </a>
        </button>
        {/* <button className="text-white p-2 hover:bg-gray-800 rounded-full">
          <Settings className="h-5 w-5" />
        </button>
        <button className="text-white p-2 hover:bg-gray-800 rounded-full">
          <User className="h-5 w-5" />
        </button> */}
      </div>
    </nav>
  );
}

export default TopNav;
