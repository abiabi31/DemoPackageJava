import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bibleBookmarks");
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (err) {
        console.error("Failed to parse bookmarks:", err);
      }
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bibleBookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = useCallback((verse) => {
    setBookmarks((prevBookmarks) => {
      const exists = prevBookmarks.some(
        (b) => b.id === verse.id && b.chapterId === verse.chapterId,
      );
      if (exists) return prevBookmarks;
      return [
        ...prevBookmarks,
        { ...verse, bookmarkedAt: new Date().toISOString() },
      ];
    });
  }, []);

  const removeBookmark = useCallback((verseId, chapterId) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter(
        (b) => !(b.id === verseId && b.chapterId === chapterId),
      ),
    );
  }, []);

  const isBookmarked = useCallback(
    (verseId, chapterId) => {
      return bookmarks.some(
        (b) => b.id === verseId && b.chapterId === chapterId,
      );
    },
    [bookmarks],
  );

  const toggleBookmark = useCallback(
    (verse) => {
      if (isBookmarked(verse.id, verse.chapterId)) {
        removeBookmark(verse.id, verse.chapterId);
      } else {
        addBookmark(verse);
      }
    },
    [isBookmarked, removeBookmark, addBookmark],
  );

  const clearAllBookmarks = useCallback(() => {
    setBookmarks([]);
  }, []);

  const value = {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark,
    clearAllBookmarks,
  };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within BookmarkProvider");
  }
  return context;
};
