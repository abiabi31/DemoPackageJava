import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const RecentlyReadContext = createContext();

export const RecentlyReadProvider = ({ children }) => {
  const [recentlyRead, setRecentlyRead] = useState([]);
  const MAX_ITEMS = 50;

  // Load recently read from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("bibleRecentlyRead");
    if (saved) {
      try {
        setRecentlyRead(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse recently read:", err);
      }
    }
  }, []);

  // Save recently read to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bibleRecentlyRead", JSON.stringify(recentlyRead));
  }, [recentlyRead]);

  const addToRecentlyRead = useCallback((verse) => {
    setRecentlyRead((prevItems) => {
      // Remove if already exists
      const filtered = prevItems.filter(
        (item) => !(item.id === verse.id && item.chapterId === verse.chapterId),
      );

      // Add to beginning
      const updated = [
        {
          ...verse,
          readAt: new Date().toISOString(),
        },
        ...filtered,
      ];

      // Keep only latest items
      return updated.slice(0, MAX_ITEMS);
    });
  }, []);

  const clearRecentlyRead = useCallback(() => {
    setRecentlyRead([]);
  }, []);

  const value = {
    recentlyRead,
    addToRecentlyRead,
    clearRecentlyRead,
  };

  return (
    <RecentlyReadContext.Provider value={value}>
      {children}
    </RecentlyReadContext.Provider>
  );
};

export const useRecentlyRead = () => {
  const context = useContext(RecentlyReadContext);
  if (!context) {
    throw new Error("useRecentlyRead must be used within RecentlyReadProvider");
  }
  return context;
};
