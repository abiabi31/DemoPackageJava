import { useEffect, useCallback } from "react";
import { useTranslation } from "../context/TranslationContext";

const globalTranslationCache = new Map();
const pendingTranslations = new Map();

// Common texts used in the app - preload these for instant translation
const COMMON_TEXTS = [
  "Welcome back",
  "Open settings",
  "Account",
  "Logout",
  "Language",
  "Switch to light mode",
  "Switch to dark mode",
  "Status",
  "Number",
  "Date",
  "Name",
  "Comment",
  "Completed",
  "Pending",
  "Enter comment",
  "Save",
  "Saved",
  "© 2024 Dashboard Application",
  "Login",
  "Enter your username and the dummy password to access the dashboard.",
  "Username",
  "Password",
  "Your username",
  "dummy123",
  "Hint: use password dummy123",
  "Please enter your username.",
  "Invalid password. Use dummy password: dummy123",
];

export const useAutoTranslation = () => {
  const { currentLanguage, t, triggerRefresh, refreshTrigger } =
    useTranslation();

  // Preload common translations when language changes
  useEffect(() => {
    if (currentLanguage === "en") return;

    const preloadTranslations = async () => {
      const promises = COMMON_TEXTS.map(async (text) => {
        const cacheKey = `${text}:${currentLanguage}`;
        if (
          !globalTranslationCache.has(cacheKey) &&
          !pendingTranslations.has(cacheKey)
        ) {
          try {
            pendingTranslations.set(cacheKey, true);
            const translatedText = await t(text);
            globalTranslationCache.set(cacheKey, translatedText);
          } catch (error) {
            console.warn("Preload translation error:", error);
          } finally {
            pendingTranslations.delete(cacheKey);
          }
        }
      });

      await Promise.all(promises);
      // Trigger a re-render of all components using this hook
      triggerRefresh();
    };

    preloadTranslations();
  }, [currentLanguage, t, triggerRefresh]);

  const translate = useCallback(
    (text) => {
      if (!text) return text;
      if (currentLanguage === "en") return text;

      const cacheKey = `${text}:${currentLanguage}`;

      // Return cached translation if available
      if (globalTranslationCache.has(cacheKey)) {
        return globalTranslationCache.get(cacheKey);
      }

      // For non-common texts, start async translation
      if (!pendingTranslations.has(cacheKey)) {
        pendingTranslations.set(cacheKey, true);
        t(text)
          .then((translatedText) => {
            globalTranslationCache.set(cacheKey, translatedText);
            pendingTranslations.delete(cacheKey);
            triggerRefresh();
          })
          .catch((error) => {
            console.warn("Translation error:", error);
            pendingTranslations.delete(cacheKey);
          });
      }

      // Return original text while translation is pending
      return text;
    },
    [currentLanguage, t, refreshTrigger],
  );

  return translate;
};
