import { Box, Slider, Typography, IconButton, Card } from "@mui/material";
import { FiPlay, FiPause, FiVolume2, FiX } from "react-icons/fi";
import { useAudio } from "../../context/AudioContext";
import { useAutoTranslation } from "../../hooks/useAutoTranslation";
import { motion } from "framer-motion";
import "./AudioPlayer.css";

const formatTime = (time) => {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const AudioPlayer = ({ audioUrl, title, onClose, text, language }) => {
  const {
    isPlaying,
    currentTime,
    duration,
    isSpeechSynthesis,
    hasTamilVoice,
    play,
    pause,
    stop,
    seek,
  } = useAudio();
  const translate = useAutoTranslation();

  if (!audioUrl && !text) return null;

  // Check if speech synthesis is supported
  const speechSupported = "speechSynthesis" in window;

  const handlePlayPause = () => {
    if (text && speechSupported) {
      if (isPlaying) {
        pause();
        return;
      }
      play(audioUrl, text, language);
    } else if (text && !speechSupported) {
      // Show alert for unsupported browsers
      alert(
        translate(
          "Speech synthesis is not supported in your browser. Please use a modern browser like Chrome, Firefox, or Edge.",
        ),
      );
      return;
    } else {
      // Use regular audio
      if (isPlaying) {
        pause();
      } else {
        play(audioUrl);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="audio-player-container"
    >
      <Card
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          p: 2,
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          {onClose && (
            <IconButton size="small" onClick={onClose} sx={{ color: "white" }}>
              <FiX />
            </IconButton>
          )}
        </Box>

        {/* Browser compatibility warning */}
        {text && !speechSupported && (
          <Box
            sx={{
              textAlign: "center",
              mb: 2,
              p: 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              ⚠️ {translate("Speech synthesis not supported in this browser")}
            </Typography>
          </Box>
        )}

        {/* Tamil voice availability warning */}
        {text && speechSupported && language === "ta" && !hasTamilVoice && (
          <Box
            sx={{
              textAlign: "center",
              mb: 2,
              p: 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              ⚠️ {translate(
                "Tamil voice not available. Will use English voice for Tamil text.",
              )}
            </Typography>
          </Box>
        )}

        {/* Progress Bar - only show for regular audio, not speech synthesis */}
        {!isSpeechSynthesis && (
          <>
            <Slider
              value={currentTime}
              max={duration || 100}
              onChange={(e, newValue) => seek(newValue)}
              sx={{
                mb: 1,
                "& .MuiSlider-thumb": {
                  background: "white",
                },
                "& .MuiSlider-track": {
                  background: "rgba(255, 255, 255, 0.7)",
                },
                "& .MuiSlider-rail": {
                  background: "rgba(255, 255, 255, 0.3)",
                },
              }}
            />

            {/* Time Display */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
                fontSize: "12px",
              }}
            >
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </Box>
          </>
        )}

        {/* Speech Synthesis Indicator */}
        {isSpeechSynthesis && (
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {isPlaying
                ? translate("🔊 Speaking...")
                : translate("Ready to speak")}
            </Typography>
          </Box>
        )}

        {/* Controls */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            onClick={handlePlayPause}
            disabled={text && !speechSupported}
            sx={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.3)",
              },
              "&:disabled": {
                background: "rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.5)",
              },
            }}
          >
            {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
          </IconButton>

          {/* Stop button for speech synthesis */}
          {isSpeechSynthesis && (
            <IconButton
              onClick={stop}
              sx={{
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              <FiX size={20} />
            </IconButton>
          )}

          <IconButton
            sx={{
              color: "white",
              opacity: 0.7,
            }}
          >
            <FiVolume2 size={20} />
          </IconButton>
        </Box>
      </Card>
    </motion.div>
  );
};

export default AudioPlayer;
