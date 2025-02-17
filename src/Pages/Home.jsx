import TopNav from "../components/TopNav";
import InputSearch from "../components/InputSearch";
import TabList from "../components/TabList";
import "../App.css";
import "../index.css";
import { useEffect, useState } from "react";
import HomeSideBar from "../components/HomeSideBar";

function Home() {
  const [surahs, setSurahs] = useState([]);
  const [listSurahBaru, setListSurahBaru] = useState([]);
  const [isLeftSectionOpen, setIsLeftSectionOpen] = useState(false);
  // const [selectedSurah, setSelectedSurah] = useState("");

  // const handleSurahClick = (nameSimple) => {
  //   setSelectedSurah(nameSimple);
  // };

  const toggleLeftSection = () => {
    setIsLeftSectionOpen((prev) => !prev);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/chapters?language=en`)
      .then((response) => response.json())
      .then((data) => setSurahs(data.chapters))
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 relative">
      <TopNav toggleLeftSection={toggleLeftSection}></TopNav>
      <div className="mt-24">
        <InputSearch surahs={surahs} setListSurahBaru={setListSurahBaru} w="xl:w-1/2" h="h-14" />
      </div>
      <HomeSideBar isOpen={isLeftSectionOpen} />
      <TabList surahs={listSurahBaru.length > 0 ? listSurahBaru : surahs} />
    </div>
  );
}

export default Home;
