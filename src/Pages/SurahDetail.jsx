import { useState } from "react";
import { useParams } from "react-router-dom";
import { LeftSection } from "../components/LeftSection";
import RightSection from "../components/RightSection";
import TopNav from "../components/TopNav";

const SurahDetail = () => {
  const { id, name_simple } = useParams();
  const [selectedSurahName, setSelectedSurahName] = useState(name_simple);
  const [selectedSurahNumber, setSelectedSurahNumber] = useState(id);
  const [isLeftSectionOpen, setIsLeftSectionOpen] = useState(false); // State untuk LeftSection

  return (
    <div className="scroll-smooth">
      <TopNav toggleLeftSection={() => setIsLeftSectionOpen(!isLeftSectionOpen)} />
      <div className="h-[calc(100vh-4rem)] bg-slate-800 flex flex-row w-full relative">
        <LeftSection isOpen={isLeftSectionOpen} setSelectedSurahName={setSelectedSurahName} setSelectedSurahNumber={setSelectedSurahNumber} onClose={() => setIsLeftSectionOpen(false)} />
        <RightSection selectedSurahName={selectedSurahName} selectedSurahNumber={selectedSurahNumber} />
      </div>
    </div>
  );
};

export default SurahDetail;
