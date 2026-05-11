import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import "./BookCard.css";
const BookCard = ({ book, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card
        className="book-card"
        sx={{
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
          },
        }}
      >
        <CardActionArea onClick={onClick} sx={{ height: "100%" }}>
          <CardContent
            sx={{
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: 1, opacity: 0.6 }}>
              <FiBookOpen size={32} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
              }}
            >
              {book.name}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              {book.chapters} chapters
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default BookCard;
