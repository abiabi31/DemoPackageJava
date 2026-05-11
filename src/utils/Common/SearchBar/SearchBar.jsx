import { TextField, InputAdornment, Box } from "@mui/material";
import { FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import "./SearchBar.css";
const SearchBar = ({
  value,
  onChange,
  onClear,
  placeholder = "Search verses, books...",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="search-bar-container"
    >
      <TextField
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-bar"
        sx={{
          "& .MuiOutlinedInput-root": {
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "12px",
            transition: "all 0.3s ease",
            "& fieldset": {
              border: "none",
            },
            "&:hover": {
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))",
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&.Mui-focused": {
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
              borderColor: "rgba(102, 126, 234, 0.5)",
            },
          },
          "& .MuiOutlinedInput-input": {
            py: 1.5,
            fontSize: "15px",
            "&::placeholder": {
              opacity: 0.6,
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ mr: 1 }}>
              <motion.div animate={{ rotate: value ? 0 : undefined }}>
                <FiSearch size={20} style={{ color: "#667eea" }} />
              </motion.div>
            </InputAdornment>
          ),
          endAdornment: value && (
            <InputAdornment position="end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClear}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#667eea",
                  fontSize: 16,
                }}
              >
                <FiX />
              </motion.button>
            </InputAdornment>
          ),
        }}
      />
    </motion.div>
  );
};

export default SearchBar;
