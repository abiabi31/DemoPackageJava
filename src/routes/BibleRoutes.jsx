import { Routes, Route, Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import HomePage from "../pages/HomePage";
import BibleReaderPage from "../pages/BibleReaderPage";
import SearchPage from "../pages/SearchPage";
import BookmarksPage from "../pages/BookmarksPage";
import SettingsPage from "../pages/SettingsPage";

export const BibleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reader" element={<BibleReaderPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default BibleRoutes;
