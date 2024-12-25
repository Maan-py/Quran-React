// import React from "react";
// import { Bell, Settings, User } from "lucide-react";

function TopNav() {
  return (
    <nav className="border-b border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="text-teal-500 font-semibold">Quran.com</div>

        <div className="flex items-center gap-2">
          <button className="text-gray-400 p-2 hover:bg-gray-800 rounded-full">{/* <Bell className="h-5 w-5" /> */}</button>
          <button className="text-gray-400 p-2 hover:bg-gray-800 rounded-full">{/* <Settings className="h-5 w-5" /> */}</button>
          <button className="text-gray-400 p-2 hover:bg-gray-800 rounded-full">{/* <User className="h-5 w-5" /> */}</button>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
