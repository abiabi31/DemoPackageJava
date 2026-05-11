import { Grid, Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./ChapterGrid.css";
import { useAutoTranslation } from "../../../hooks/useAutoTranslation";

const ChapterGrid = ({ chapters, onSelectChapter, selectedChapterId }) => {
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="chapter-grid-container"
    >
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          {translate("Select a Chapter")}
        </Typography>
        <Grid container spacing={2}>
          {chapters.map((chapter) => (
            <Grid item xs={4} sm={3} md={2} key={chapter.id}>
              <motion.div variants={item} className="chapter-grid-item">
                <Button
                  onClick={() => onSelectChapter(chapter.id, chapter.number)}
                  fullWidth
                  variant={
                    selectedChapterId === chapter.id ? "contained" : "outlined"
                  }
                  sx={{
                    background:
                      selectedChapterId === chapter.id
                        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        : "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                    border:
                      selectedChapterId === chapter.id
                        ? "none"
                        : "2px solid rgba(102, 126, 234, 0.3)",
                    color:
                      selectedChapterId === chapter.id ? "white" : "inherit",
                    fontWeight: 600,
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    py: 1.5,
                    "&:hover": {
                      background:
                        selectedChapterId === chapter.id
                          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {chapter.number}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default ChapterGrid;
