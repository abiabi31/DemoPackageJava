import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import { FiSearch, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Sidebar.css";

export const Sidebar = ({
  open,
  onClose,
  books,
  onSelectBook,
  selectedBook,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      className="sidebar"
      sx={{
        "& .MuiDrawer-paper": {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backdropFilter: "blur(10px)",
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          width: 320,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
            Books
          </Typography>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            <FiX />
          </motion.button>
        </Box>

        <TextField
          placeholder="Search books..."
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              color: "white",
              background: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.15)",
              },
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)",
              },
            },
            "& .MuiOutlinedInput-input::placeholder": {
              opacity: 0.7,
              color: "white",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <FiSearch />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Divider sx={{ background: "rgba(255, 255, 255, 0.2)" }} />

      <List sx={{ p: 1, overflow: "auto" }}>
        <AnimatePresence>
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.02 }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    onSelectBook(book.id, book.name);
                    onClose();
                  }}
                  sx={{
                    color: "white",
                    background:
                      selectedBook?.id === book.id
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                    borderRadius: "8px",
                    mb: 0.5,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.15)",
                    },
                  }}
                >
                  <ListItemText
                    primary={book.name}
                    secondary={`${book.chapters} ch`}
                    sx={{
                      "& .MuiListItemText-secondary": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </List>
    </Drawer>
  );
};

export default Sidebar;
