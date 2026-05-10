import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useBible } from "../context/BibleContext";
import SearchBar from "../components/Common/SearchBar";
import { useDebounce } from "../hooks/useUtils";
import { useAutoTranslation } from "../hooks/useAutoTranslation";
import "./SearchPage.css";

export const SearchPage = () => {
  const { searchResults, isSearching, searchVerses, books } = useBible();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const translate = useAutoTranslation();

  useEffect(() => {
    if (debouncedSearchQuery) {
      searchVerses(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, searchVerses]);

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <Box className="search-page">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {translate("Search Bible")}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.7, mb: 3 }}>
          {translate("Search for verses by book name, keywords, or references.")}
        </Typography>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={handleClear}
          placeholder={translate("Search by book name, keywords...")}
        />
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="search-results"
      >
        {isSearching && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {!isSearching && searchQuery && searchResults.length > 0 && (
          <>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {translate("Found")}
              {` ${searchResults.length} `}
              {translate("result(s)")}
            </Typography>
            <Grid container spacing={2}>
              {searchResults.map((result, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 1 }}
                          >
                            {result.name}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            {result.abbreviation} • {result.chapters} chapters
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {!isSearching && searchQuery && searchResults.length === 0 && (
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
                p: 4,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {translate("No results found")}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                {translate("Try searching for a different term or book name.")}
              </Typography>
            </Card>
          </motion.div>
        )}

        {!isSearching && !searchQuery && (
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
                p: 4,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                {translate("Start Searching")}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {translate("Enter a search query to find books and verses.")}
              </Typography>

              {/* Popular Books */}
              <Box sx={{ mt: 3, textAlign: "left" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  {translate("Popular Books:")}
                </Typography>
                <Grid container spacing={1}>
                  {books.slice(0, 6).map((book) => (
                    <Grid item xs={6} sm={4} key={book.id}>
                      <Card
                        sx={{
                          p: 1.5,
                          textAlign: "center",
                          background: "rgba(102, 126, 234, 0.1)",
                          border: "1px solid rgba(102, 126, 234, 0.2)",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            background: "rgba(102, 126, 234, 0.2)",
                          },
                        }}
                      >
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>
                          {book.name}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </Box>
  );
};

export default SearchPage;
