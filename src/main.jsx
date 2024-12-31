import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import SurahDetail from "./Pages/SurahDetail";
import Bookmark from "./Pages/Bookmark";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah/:id/:name_simple" element={<SurahDetail />} />
        <Route path="/surah/:id" element={<SurahDetail />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
