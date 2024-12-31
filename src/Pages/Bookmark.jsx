import HomeSideBar from "../components/HomeSideBar";
import TopNav from "../components/TopNav";
import { useState } from "react";

const Bookmark = ({ toggleLeftSection: parentToggleLeftSection }) => {
  const [isLeftSectionOpen, setIsLeftSectionOpen] = useState(false);

  const localToggleLeftSection = () => {
    setIsLeftSectionOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-800">
      <TopNav toggleLeftSection={parentToggleLeftSection || localToggleLeftSection} />
      <div className="flex justify-center mx-5">
        <div role="tablist" className="tabs tabs-lifted w-full my-20 mx-5 sm:min-w-full md:my-20 md:px-20 md:mx-5 lg:px-20 lg:my-20">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Bookmark" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
          </div>
        </div>
      </div>
      <HomeSideBar isOpen={isLeftSectionOpen} />
    </div>
  );
};

export default Bookmark;
