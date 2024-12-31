import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bismillah from "./Bismillah";

const RightSection = ({ selectedSurahName }) => {
  const { id } = useParams();
  const [onBookmark, setOnBookmark] = useState([]);
  const [detailAyat, setdetailAyat] = useState([]);

  const setBookmark = (value) => {
    let bookmarks = localStorage.getItem("bookmark");

    try {
      bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    } catch {
      bookmarks = [];
    }

    const isAlreadyBookmarked = bookmarks.some((bookmark) => bookmark.id === value.id);

    if (isAlreadyBookmarked) {
      const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== value.id);
      localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
      setOnBookmark(updatedBookmarks);
    } else {
      const updatedBookmarks = [...bookmarks, value];
      localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
      setOnBookmark(updatedBookmarks);
    }
  };

  useEffect(() => {
    let bookmarks = localStorage.getItem("bookmark");
    try {
      bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    } catch {
      bookmarks = [];
    }

    if (bookmarks.length > 0) {
      setOnBookmark(bookmarks);
    }
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/verses/by_chapter/${id}?fields=text_uthmani&per_page=286&translations=33&words=true`)
      .then((response) => response.json())
      .then((data) => {
        // Tambahkan properti name_simple ke setiap item
        const updatedVerses = data.verses.map((verse) => ({
          ...verse, // Salin semua properti lama
          name_simple: selectedSurahName, // Tambahkan properti baru
        }));
        setdetailAyat(updatedVerses);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, [id, selectedSurahName]); // Pastikan selectedSurahName ada di dependency array

  return (
    <section className="w-full overflow-auto bg-slate-800 flex flex-col">
      <div className="p-10 h-20 flex justify-center">
        <h3 className="text-3xl font-bold text-white">{selectedSurahName || "Pilih Surah"}</h3>
      </div>
      <div className="h-full w-full">
        <ItemAyat detailAyat={detailAyat} setBookmark={setBookmark} onBookmark={onBookmark} />
      </div>
    </section>
  );
};

const ItemAyat = ({ detailAyat, setBookmark, onBookmark }) => {
  const { name_simple } = useParams();

  useEffect(() => {
    const ayatNumber = window.location.hash.replace("#", ""); // Mendapatkan nomor ayat dari hash
    if (ayatNumber) {
      const element = document.getElementById(ayatNumber); // Menemukan elemen dengan ID yang sesuai
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" }); // Menggulirkan elemen ke tampilan
      }
    }
  }, []);

  return (
    <>
      <div className="flex justify-center mt-5 mb-10">{name_simple !== "Al-Fatihah" && name_simple !== "At-Tawbah" ? <Bismillah /> : ""}</div>
      {detailAyat.map((detail) => (
        <div key={detail.id} id={detail.verse_number} className="w-full px-10 py-10 border-b border-slate-600 p-2 relative">
          <div className="w-full h-full flex flex-col justify-end">
            <h3 className="text-2xl text-white font-bold font-surah block text-right break-words mb-2">{detail.text_uthmani}</h3>
            <div className="flex flex-wrap justify-start my-4">
              {/* Menambahkan transliterasi */}
              {detail.words &&
                detail.words.map((word, index) => (
                  <div key={index} className="text-lg text-left break-words mr-1">
                    <p className="text-sm text-white text-right break-words">{word.transliteration.text}</p>
                  </div>
                ))}
            </div>
          </div>
          <span className="mb-2 flex text-white">
            <span className="mr-2">{detail.verse_number}. </span>
            <span dangerouslySetInnerHTML={{ __html: detail.translations[0].text }} />
          </span>
          <div
            className="absolute -bottom-4 left-0 bg-slate-800 hover:cursor-pointer"
            onClick={() => {
              setBookmark(detail);
            }}>
            <img
              src={onBookmark.some((bookmark) => bookmark.id === detail.id) ? "/bookmark-selected.png" : "/bookmark-unselected.png"}
              alt={onBookmark.some((bookmark) => bookmark.id === detail.id) ? "Bookmark Selected" : "Bookmark Unselected"}
              width={30}
              height={30}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default RightSection;
