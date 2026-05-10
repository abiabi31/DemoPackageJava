import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useTranslation } from "./TranslationContext";
import {
  fetchAllBooks,
  fetchChapters,
  fetchVerses,
  searchBibleVerses,
} from "../services/bibleService";

const BibleContext = createContext();

export const BibleProvider = ({ children }) => {
  const { currentLanguage } = useTranslation();
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Map translation language to Bible version
  const bibleLanguage = currentLanguage === "ta" ? "TAMIL" : "KJV";

  const loadBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllBooks(bibleLanguage);
      setBooks(data);
    } catch (err) {
      setError("Failed to load books");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [bibleLanguage]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  useEffect(() => {
    if (!selectedBook) return;

    const reloadSelectedBookContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const booksData = await fetchAllBooks(bibleLanguage);
        const updatedBook = booksData.find((book) => book.id === selectedBook.id);
        if (updatedBook) {
          setSelectedBook((prev) => ({ ...prev, name: updatedBook.name }));
        }

        const chaptersData = await fetchChapters(selectedBook.id, bibleLanguage);
        setChapters(chaptersData);

        if (selectedChapter) {
          const versesData = await fetchVerses(selectedChapter.id, bibleLanguage);
          setVerses(versesData);
        } else {
          setVerses([]);
        }
      } catch (err) {
        setError("Failed to reload content for new language");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    reloadSelectedBookContent();
  }, [bibleLanguage, selectedBook?.id, selectedChapter?.id]);

  const selectBook = useCallback(
    async (bookId, bookName) => {
      if (!bookId) {
        // Reset to books list
        setSelectedBook(null);
        setChapters([]);
        setSelectedChapter(null);
        setVerses([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setSelectedBook({ id: bookId, name: bookName });
        setSelectedChapter(null);
        setVerses([]);

        const chaptersData = await fetchChapters(bookId, bibleLanguage);
        setChapters(chaptersData);
      } catch (err) {
        setError("Failed to load chapters");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [bibleLanguage],
  );

  const selectChapter = useCallback(
    async (chapterId, chapterNumber) => {
      if (!chapterId) {
        // Reset to chapters list
        setSelectedChapter(null);
        setVerses([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setSelectedChapter({ id: chapterId, number: chapterNumber });

        const versesData = await fetchVerses(chapterId, bibleLanguage);
        setVerses(versesData);
      } catch (err) {
        setError("Failed to load verses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [bibleLanguage],
  );

  const searchVerses = useCallback(
    async (query) => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      try {
        setIsSearching(true);
        setError(null);
        // This will be implemented in the service
        const results = await searchBibleVerses(query, bibleLanguage);
        setSearchResults(results);
      } catch (err) {
        setError("Failed to search verses");
        console.error(err);
      } finally {
        setIsSearching(false);
      }
    },
    [bibleLanguage],
  );

  const value = {
    books,
    selectedBook,
    chapters,
    selectedChapter,
    verses,
    loading,
    error,
    language: bibleLanguage,
    searchResults,
    isSearching,
    selectBook,
    selectChapter,
    searchVerses,
    loadBooks,
  };

  return (
    <BibleContext.Provider value={value}>{children}</BibleContext.Provider>
  );
};

export const useBible = () => {
  const context = useContext(BibleContext);
  if (!context) {
    throw new Error("useBible must be used within BibleProvider");
  }
  return context;
};
