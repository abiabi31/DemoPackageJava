import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useBible } from "../context/BibleContext";
import { useRecentlyRead } from "../context/RecentlyReadContext";
import { useTranslation } from "../context/TranslationContext";
import { useAutoTranslation } from "../hooks/useAutoTranslation";
import BookCard from "../components/Bible/BookCard";
import ChapterGrid from "../components/Bible/ChapterGrid";
import VerseCard from "../components/Bible/VerseCard";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import AudioPlayer from "../components/Common/AudioPlayer";
import { usePagination } from "../hooks/useUtils";
import "./BibleReaderPage.css";

export const BibleReaderPage = () => {
  const {
    books,
    selectedBook,
    chapters,
    selectedChapter,
    verses,
    loading,
    error,
    selectBook,
    selectChapter,
  } = useBible();

  const { addToRecentlyRead } = useRecentlyRead();
  const { currentLanguage } = useTranslation();
  const translate = useAutoTranslation();
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioTitle, setAudioTitle] = useState("");
  const [audioText, setAudioText] = useState("");

  const {
    currentPage,
    totalPages,
    currentItems: paginatedVerses,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  } = usePagination(verses, 5);

  useEffect(() => {
    if (selectedChapter && verses.length > 0) {
      // Track reading
      addToRecentlyRead({
        ...selectedChapter,
        bookName: selectedBook?.name,
      });
    }
  }, [selectedChapter, selectedBook, verses, addToRecentlyRead]);

  const handlePlayAudio = (chapterNumber) => {
    // Get all verses text for the chapter
    const chapterText = verses.map((verse) => verse.text).join(". ");
    const title = `${selectedBook?.name} Chapter ${chapterNumber}`;

    // Use speech synthesis with the chapter text
    setAudioUrl(`chapter-${selectedBook?.id}-${chapterNumber}`);
    setAudioTitle(title);
    setAudioText(chapterText);
    setShowAudioPlayer(true);
  };

  const handleNextChapter = () => {
    if (selectedBook && selectedChapter) {
      const currentChapNum = selectedChapter.number;
      const nextChapNum = currentChapNum + 1;
      if (nextChapNum <= selectedBook.chapters) {
        const nextChapterId = `${selectedBook.id}.${nextChapNum}`;
        selectChapter(nextChapterId, nextChapNum);
      }
    }
  };

  const handlePrevChapter = () => {
    if (selectedBook && selectedChapter) {
      const currentChapNum = selectedChapter.number;
      const prevChapNum = currentChapNum - 1;
      if (prevChapNum > 0) {
        const prevChapterId = `${selectedBook.id}.${prevChapNum}`;
        selectChapter(prevChapterId, prevChapNum);
      }
    }
  };

  const handleBackToChapters = () => {
    // Reset selected chapter but keep book selected
    window.history.back();
    // Alternative: programmatically reset state
    selectChapter(null, null);
  };

  if (error) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="bible-reader-page">
      {/* Books Section */}
      {!selectedBook && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            {translate("Select a Book")}
          </Typography>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Grid container spacing={2}>
              {books.map((book) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                  <BookCard
                    book={book}
                    onClick={() => selectBook(book.id, book.name)}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </motion.div>
      )}

      {/* Chapters Section */}
      {selectedBook && !selectedChapter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Box sx={{ mb: 3 }}>
            <Button
              startIcon={<FiChevronLeft />}
              onClick={() => {
                selectBook(null, null);
              }}
              sx={{ mb: 2 }}
            >
              {translate("Back to Books")}
            </Button>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {selectedBook.name}
            </Typography>
          </Box>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <ChapterGrid chapters={chapters} onSelectChapter={selectChapter} />
          )}
        </motion.div>
      )}

      {/* Verses Section */}
      {selectedBook && selectedChapter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="verses-section"
        >
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Button
              startIcon={<FiChevronLeft />}
              onClick={() => selectChapter(null, null)}
              sx={{ mb: 2 }}
            >
              {translate("Back to Chapters")}
            </Button>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {selectedBook.name} {selectedChapter.number}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {verses.length} {translate("verses")}
            </Typography>
          </Box>

          {/* Navigation & Audio */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<FiChevronLeft />}
                onClick={handlePrevChapter}
                disabled={selectedChapter.number === 1}
              >
                {translate("Previous")}
              </Button>
              <Button
                variant="outlined"
                endIcon={<FiChevronRight />}
                onClick={handleNextChapter}
                disabled={selectedChapter.number === selectedBook.chapters}
              >
                {translate("Next")}
              </Button>
            </Box>
            <Button
              variant="contained"
              onClick={() => handlePlayAudio(selectedChapter.number)}
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              🎵 {translate("Play Audio")}
            </Button>
          </Box>

          {/* Verses */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {paginatedVerses.map((verse) => (
                  <VerseCard
                    key={verse.id}
                    verse={verse}
                    bookName={selectedBook.name}
                    chapterNumber={selectedChapter.number}
                  />
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 4,
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={prevPage}
                    disabled={!hasPrevPage}
                    startIcon={<FiChevronLeft />}
                  >
                    {translate("Previous")}
                  </Button>
                  <Typography sx={{ fontWeight: 600 }}>
                    Page {currentPage} of {totalPages}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={nextPage}
                    disabled={!hasNextPage}
                    endIcon={<FiChevronRight />}
                  >
                    {translate("Next")}
                  </Button>
                </Box>
              )}
            </>
          )}
        </motion.div>
      )}

      {/* Audio Player */}
      {showAudioPlayer && (
        <AudioPlayer
          audioUrl={audioUrl}
          title={audioTitle}
          text={audioText}
          language={currentLanguage}
          onClose={() => setShowAudioPlayer(false)}
        />
      )}
    </Box>
  );
};

export default BibleReaderPage;
