import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const TranslationContext = createContext(null);

const STORAGE_KEY = "app-language";

const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
];

const TRANSLATION_CACHE = new Map();

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "en";
  });
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentLanguage);
  }, [currentLanguage]);

  const translateText = useCallback(
    async (text, targetLang = currentLanguage) => {
      if (!text || targetLang === "en") return text;

      const cacheKey = `${text}:${targetLang}`;
      if (TRANSLATION_CACHE.has(cacheKey)) {
        return TRANSLATION_CACHE.get(cacheKey);
      }

      try {
        const response = await fetch(
          `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`,
        );

        if (!response.ok) {
          console.warn("Translation failed, returning original text");
          return text;
        }

        const data = await response.json();
        const translatedText = data[0]?.[0]?.[0] || text;

        TRANSLATION_CACHE.set(cacheKey, translatedText);
        return translatedText;
      } catch (error) {
        console.warn("Translation error:", error);
        return text;
      }
    },
    [currentLanguage],
  );

  const t = useCallback(
    async (key, params = {}) => {
      // For now, return the key as-is since we're doing automatic translation
      // In a real implementation, you might have a mapping of keys to English text
      let text = key;

      if (currentLanguage !== "en") {
        text = await translateText(text, currentLanguage);
      }

      // Handle parameter substitution
      return Object.entries(params).reduce(
        (result, [param, value]) => result.replace(`{{${param}}}`, value),
        text,
      );
    },
    [currentLanguage, translateText],
  );

  const changeLanguage = useCallback(async (languageCode) => {
    // Clear cache for the new language
    const cacheKeysToClear = Array.from(TRANSLATION_CACHE.keys()).filter(
      (key) => key.endsWith(`:${languageCode}`),
    );
    cacheKeysToClear.forEach((key) => TRANSLATION_CACHE.delete(key));

    setCurrentLanguage(languageCode);
  }, []);

  const triggerRefresh = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  const value = {
    currentLanguage,
    changeLanguage,
    triggerRefresh,
    refreshTrigger,
    languages: SUPPORTED_LANGUAGES,
    t,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
};
