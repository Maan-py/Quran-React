import { useParams } from "react-router-dom";
import TopNav from "../components/TopNav";

const SurahDetail = () => {
  const { id } = useParams(); // Mengambil parameter "id" dari URL

  return (
    <>
      <TopNav></TopNav>
      <div className="flex min-h-screen bg-slate-800">
        <section className="basis-1/4 bg-[#1d232a]">
          <h1 className="text-2xl font-bold">Detail Surah</h1>
          <p>Surah ID: {id}</p>
          {/* Anda bisa menambahkan logika untuk mengambil detail surah berdasarkan ID */}
        </section>
      </div>
    </>
  );
};

export default SurahDetail;
