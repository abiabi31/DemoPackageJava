import { motion } from "framer-motion";
import { CircularProgress, Box } from "@mui/material";

export const LoadingSpinner = ({ size = 40, fullscreen = false }) => {
  if (fullscreen) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <CircularProgress size={size} sx={{ color: "white" }} />
        </motion.div>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <CircularProgress size={size} />
      </motion.div>
    </Box>
  );
};

export default LoadingSpinner;
