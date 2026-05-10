import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiTrash2, FiBook } from "react-icons/fi";
import { useBookmarks } from "../context/BookmarkContext";
import { useAutoTranslation } from "../hooks/useAutoTranslation";
import VerseCard from "../components/Bible/VerseCard";
import "./BookmarksPage.css";

export const BookmarksPage = () => {
  const { bookmarks, clearAllBookmarks } = useBookmarks();
  const translate = useAutoTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box className="bookmarks-page">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {translate("Bookmarks")}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {bookmarks.length} {translate("saved verse(s)")}
            </Typography>
          </Box>
          {bookmarks.length > 0 && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                color="error"
                startIcon={<FiTrash2 />}
                onClick={() => {
                  if (window.confirm(translate("Clear all bookmarks?"))) {
                    clearAllBookmarks();
                  }
                }}
              >
                {translate("Clear All")}
              </Button>
            </motion.div>
          )}
        </Box>
      </motion.div>

      {/* Empty State */}
      {bookmarks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              p: 6,
              textAlign: "center",
            }}
          >
            <Box sx={{ mb: 2, opacity: 0.5, fontSize: 48 }}>
              <FiBook />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {translate("No bookmarks yet")}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {translate(
                "Start bookmarking your favorite verses from the Bible reader.",
              )}
            </Typography>
          </Card>
        </motion.div>
      )}

      {/* Bookmarks List */}
      {bookmarks.length > 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bookmarks-list"
        >
          {bookmarks.map((verse) => (
            <motion.div key={`${verse.chapterId}-${verse.id}`} variants={item}>
              <VerseCard
                verse={verse}
                bookName={verse.bookName || "Bible"}
                chapterNumber={verse.number}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </Box>
  );
};

export default BookmarksPage;
