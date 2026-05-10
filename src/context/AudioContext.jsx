import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSpeechSynthesis, setIsSpeechSynthesis] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);
  const audioRef = useRef(null);
  const speechSynthesisRef = useRef(null);

  // Load available voices
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      setAvailableVoices(voices);

      if (voices.length > 0) {
        console.log(
          "Available voices:",
          voices.map((v) => `${v.name} (${v.lang})`),
        );
      } else {
        console.debug("No speech synthesis voices loaded yet.");
      }
    };

    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);

    const retries = [250, 500, 1000];
    const retryTimers = retries.map((delay) => setTimeout(loadVoices, delay));

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      retryTimers.forEach(clearTimeout);
    };
  }, []);

  const getVoices = () => {
    if (!("speechSynthesis" in window)) return [];
    const voices = speechSynthesis.getVoices();
    return voices.length > 0 ? voices : availableVoices;
  };

  const hasTamilVoice = getVoices().some(
    (voice) =>
      voice.lang.toLowerCase().startsWith("ta") ||
      voice.name.toLowerCase().includes("tamil") ||
      voice.lang.toLowerCase().includes("tamil"),
  );

  const selectVoice = (language) => {
    const voices = getVoices();
    const normalizedLanguage = language.toLowerCase();

    const tamilVoice = voices.find(
      (voice) =>
        voice.lang.toLowerCase().startsWith("ta") ||
        voice.name.toLowerCase().includes("tamil") ||
        voice.lang.toLowerCase().includes("tamil"),
    );

    const englishVoice = voices.find(
      (voice) =>
        voice.lang.toLowerCase().startsWith("en") ||
        voice.name.toLowerCase().includes("english"),
    );

    if (normalizedLanguage === "ta") {
      return tamilVoice || englishVoice || voices[0];
    }

    return englishVoice || voices[0];
  };

  const play = useCallback(
    (audioUrl, text = null, language = "en") => {
      // If text is provided, use speech synthesis
      if (text && "speechSynthesis" in window) {
        if (speechSynthesisRef.current) {
          speechSynthesis.cancel(); // Stop any current speech
        }

        const utterance = new SpeechSynthesisUtterance(text);
        const selectedVoice = selectVoice(language);

        if (selectedVoice) {
          utterance.voice = selectedVoice;
          utterance.lang = selectedVoice.lang || (language === "ta" ? "ta-IN" : "en-US");
        } else {
          utterance.lang = language === "ta" ? "ta-IN" : "en-US";
          console.warn("Speech synthesis voice not found; using default language.");
        }

        if (language === "ta" && selectedVoice && !selectedVoice.lang.toLowerCase().startsWith("ta")) {
          console.warn(
            "No Tamil-specific voice found, speaking Tamil text with an available English voice.",
          );
        }

        if (language === "en" && selectedVoice && !selectedVoice.lang.toLowerCase().startsWith("en")) {
          console.warn(
            "Selected voice is not clearly English; continuing with the best available voice.",
          );
        }

        utterance.rate = language === "ta" ? 0.9 : 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 0.8;

        utterance.onstart = () => {
          setIsPlaying(true);
          setIsSpeechSynthesis(true);
          setCurrentAudio(audioUrl);
        };

        utterance.onend = () => {
          setIsPlaying(false);
          setIsSpeechSynthesis(false);
          setCurrentAudio(null);
          speechSynthesisRef.current = null;
        };

        utterance.onerror = (event) => {
          console.error("Speech synthesis error:", event.error);
          setIsPlaying(false);
          setIsSpeechSynthesis(false);
          speechSynthesisRef.current = null;
        };

        speechSynthesisRef.current = utterance;
        speechSynthesis.speak(utterance);
        return;
      }

      // Fallback to regular audio if no text provided
      if (!audioRef.current) {
        audioRef.current = new Audio();
        audioRef.current.addEventListener("timeupdate", () => {
          setCurrentTime(audioRef.current.currentTime);
        });
        audioRef.current.addEventListener("loadedmetadata", () => {
          setDuration(audioRef.current.duration);
        });
        audioRef.current.addEventListener("ended", () => {
          setIsPlaying(false);
        });
      }

      if (currentAudio === audioUrl && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        if (currentAudio !== audioUrl) {
          audioRef.current.src = audioUrl;
          setCurrentAudio(audioUrl);
        }
        audioRef.current.play();
        setIsPlaying(true);
      }
    },
    [currentAudio, isPlaying],
  );

  const pause = useCallback(() => {
    if (isSpeechSynthesis && "speechSynthesis" in window) {
      speechSynthesis.pause();
      setIsPlaying(false);
    } else if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isSpeechSynthesis]);

  const resume = useCallback(() => {
    if (isSpeechSynthesis && "speechSynthesis" in window) {
      speechSynthesis.resume();
      setIsPlaying(true);
    } else if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isSpeechSynthesis]);

  const stop = useCallback(() => {
    if (isSpeechSynthesis && "speechSynthesis" in window) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setIsSpeechSynthesis(false);
      setCurrentAudio(null);
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
      setCurrentAudio(null);
    }
  }, [isSpeechSynthesis]);

  const seek = useCallback(
    (time) => {
      if (!isSpeechSynthesis && audioRef.current) {
        audioRef.current.currentTime = time;
        setCurrentTime(time);
      }
      // Speech synthesis doesn't support seeking
    },
    [isSpeechSynthesis],
  );

  const value = {
    isPlaying,
    currentAudio,
    currentTime,
    duration,
    isSpeechSynthesis,
    hasTamilVoice,
    availableVoices,
    play,
    pause,
    resume,
    stop,
    seek,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
};
