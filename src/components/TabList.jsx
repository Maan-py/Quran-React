import { useState } from "react";

const TabList = () => {
  const [activeTab, setActiveTab] = useState("Surah");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div role="tablist" className="tabs tabs-bordered bg-base-100 mb-2 w-96">
      <button role="tab" className={`tab ${activeTab === "Juz" ? "tab-active" : ""}`} onClick={() => handleTabClick("Juz")}>
        Juz
      </button>
      <a role="tab" className={`tab ${activeTab === "Surah" ? "tab-active" : ""}`} onClick={() => handleTabClick("Surah")}>
        Surah
      </a>
      <a role="tab" className={`tab ${activeTab === "Bookmark" ? "tab-active" : ""}`} onClick={() => handleTabClick("Bookmark")}>
        Bookmark
      </a>
    </div>
  );
};

export default TabList;