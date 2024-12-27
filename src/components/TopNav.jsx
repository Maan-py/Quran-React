import { Bell, Settings, User } from "lucide-react";

function TopNav() {
  return (
    <nav className="bg-[#1d232a] z-50 h-16 flex items-center justify-between px-10 border-b border-gray-800 sticky top-0">
      <div className="flex flex-row">
        <img src="/app-logo.svg" alt="app logo" className="mr-2 mt-1" width={25} />
        <h1 className="font-bold text-white-500 text-xl">Quran</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-gray-400 p-2 hover:bg-gray-800 rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-gray-400 p-2 hover:bg-gray-800 rounded-full">
          <Settings className="h-5 w-5" />
        </button>
        <button className="text-gray-400 p-2 hover:bg-gray-800 rounded-full">
          <User className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}

export default TopNav;
