import { useState } from "react";
import { useParams } from "react-router-dom";
import { LeftSection } from "../components/LeftSection";
import RightSection from "../components/RightSection";
import TopNav from "../components/TopNav";

const SurahDetail = () => {
  const { id } = useParams();
  const [selectedSurahName, setSelectedSurahName] = useState("");
  const [selectedSurahNumber, setSelectedSurahNumber] = useState(id);

  return (
    <>
      <TopNav></TopNav>
      <div className="h-[calc(100vh-4rem)] bg-slate-800 flex flex-row w-full">
        <LeftSection setSelectedSurahName={setSelectedSurahName} setSelectedSurahNumber={setSelectedSurahNumber} />
        {/* Kirimkan selectedSurahName ke RightSection */}
        <RightSection selectedSurahName={selectedSurahName} selectedSurahNumber={selectedSurahNumber} />
      </div>
    </>
  );
};

export default SurahDetail;
