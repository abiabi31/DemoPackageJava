import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiCopy, FiBookmark, FiShare2 } from "react-icons/fi";
import { useBookmarks } from "../../context/BookmarkContext";
import { useRecentlyRead } from "../../context/RecentlyReadContext";
import { useCopyToClipboard } from "../../hooks/useUtils";
import { useAutoTranslation } from "../../hooks/useAutoTranslation";
import "./VerseCard.css";

export const VerseCard = ({ verse, bookName, chapterNumber }) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { addToRecentlyRead } = useRecentlyRead();
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const [isSharing, setIsSharing] = useState(false);
  const translate = useAutoTranslation();

  const handleCopy = () => {
    const text = `${bookName} ${chapterNumber}:${verse.number}\n\n${verse.text}`;
    copyToClipboard(text);
  };

  const handleShare = async () => {
    setIsSharing(true);
    const text = `${bookName} ${chapterNumber}:${verse.number}\n\n${verse.text}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${bookName} ${chapterNumber}:${verse.number}`,
          text: text,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      copyToClipboard(text);
    }
    setIsSharing(false);
  };

  const handleBookmark = () => {
    toggleBookmark(verse);
  };

  const handleCardClick = () => {
    addToRecentlyRead(verse);
  };

  const bookmarked = isBookmarked(verse.id, verse.chapterId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
    >
      <Card
        className="verse-card"
        sx={{
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          mb: 2,
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            transform: "translateY(-4px)",
            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)",
          },
        }}
      >
        <CardContent>
          <Box className="verse-header">
            <span className="verse-reference">
              {bookName} {chapterNumber}:{verse.number}
            </span>
          </Box>
          <p className="verse-text">{verse.text}</p>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", pt: 0 }}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Tooltip title={isCopied ? translate("Copied!") : translate("Copy verse")}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                sx={{
                  color: isCopied ? "success.main" : "primary.main",
                }}
              >
                <FiCopy size={18} />
              </IconButton>
            </Tooltip>
            <Tooltip title={bookmarked ? translate("Remove bookmark") : translate("Bookmark verse")}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookmark();
                }}
                sx={{
                  color: bookmarked ? "warning.main" : "primary.main",
                }}
              >
                <FiBookmark
                  size={18}
                  fill={bookmarked ? "currentColor" : "none"}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title={translate("Share verse")}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                disabled={isSharing}
                sx={{
                  color: "primary.main",
                }}
              >
                <FiShare2 size={18} />
              </IconButton>
            </Tooltip>
          </Box>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default VerseCard;
