import axios from "axios";

// Using Bible API - Free tier available at https://scripture.api.bible/
const BIBLE_API_BASE = "https://api.scripture.api.bible/static";

// Bible IDs for different versions
const BIBLES = {
  KJV: "de4e12af7f28f599-02",
  TAMIL: "d1f139b77bdb8d08-01", // Tamil Bible ID
};

// API key for Scripture API (you'll need to get one from https://scripture.api.bible/)
// const API_KEY = process.env.REACT_APP_BIBLE_API_KEY || "your-api-key-here";
const API_KEY = import.meta.env.VITE_BIBLE_API_KEY || "your-api-key-here";
// Create axios instance
const apiClient = axios.create({
  baseURL: BIBLE_API_BASE,
});

// Mock data for books
const getMockBooks = (language = "KJV") => {
  const englishBooks = [
    { id: "GEN", name: "Genesis", abbreviation: "Gen", chapters: 50 },
    { id: "EXO", name: "Exodus", abbreviation: "Exo", chapters: 40 },
    { id: "LEV", name: "Leviticus", abbreviation: "Lev", chapters: 27 },
    { id: "NUM", name: "Numbers", abbreviation: "Num", chapters: 36 },
    { id: "DEU", name: "Deuteronomy", abbreviation: "Deu", chapters: 34 },
    { id: "JOS", name: "Joshua", abbreviation: "Jos", chapters: 24 },
    { id: "JDG", name: "Judges", abbreviation: "Jdg", chapters: 21 },
    { id: "RUT", name: "Ruth", abbreviation: "Rut", chapters: 4 },
    { id: "1SA", name: "1 Samuel", abbreviation: "1Sa", chapters: 31 },
    { id: "2SA", name: "2 Samuel", abbreviation: "2Sa", chapters: 24 },
    { id: "1KI", name: "1 Kings", abbreviation: "1Ki", chapters: 22 },
    { id: "2KI", name: "2 Kings", abbreviation: "2Ki", chapters: 25 },
    { id: "1CH", name: "1 Chronicles", abbreviation: "1Ch", chapters: 29 },
    { id: "2CH", name: "2 Chronicles", abbreviation: "2Ch", chapters: 36 },
    { id: "EZR", name: "Ezra", abbreviation: "Ezr", chapters: 10 },
    { id: "NEH", name: "Nehemiah", abbreviation: "Neh", chapters: 13 },
    { id: "EST", name: "Esther", abbreviation: "Est", chapters: 10 },
    { id: "JOB", name: "Job", abbreviation: "Job", chapters: 42 },
    { id: "PSA", name: "Psalms", abbreviation: "Psa", chapters: 150 },
    { id: "PRO", name: "Proverbs", abbreviation: "Pro", chapters: 31 },
    { id: "ECC", name: "Ecclesiastes", abbreviation: "Ecc", chapters: 12 },
    { id: "SON", name: "Song of Solomon", abbreviation: "Son", chapters: 8 },
    { id: "ISA", name: "Isaiah", abbreviation: "Isa", chapters: 66 },
    { id: "JER", name: "Jeremiah", abbreviation: "Jer", chapters: 52 },
    { id: "LAM", name: "Lamentations", abbreviation: "Lam", chapters: 5 },
    { id: "EZK", name: "Ezekiel", abbreviation: "Ezk", chapters: 48 },
    { id: "DAN", name: "Daniel", abbreviation: "Dan", chapters: 12 },
    { id: "HOS", name: "Hosea", abbreviation: "Hos", chapters: 14 },
    { id: "JOL", name: "Joel", abbreviation: "Jol", chapters: 3 },
    { id: "AMO", name: "Amos", abbreviation: "Amo", chapters: 9 },
    { id: "OBA", name: "Obadiah", abbreviation: "Oba", chapters: 1 },
    { id: "JON", name: "Jonah", abbreviation: "Jon", chapters: 4 },
    { id: "MIC", name: "Micah", abbreviation: "Mic", chapters: 7 },
    { id: "NAH", name: "Nahum", abbreviation: "Nah", chapters: 3 },
    { id: "HAB", name: "Habakkuk", abbreviation: "Hab", chapters: 3 },
    { id: "ZEP", name: "Zephaniah", abbreviation: "Zep", chapters: 3 },
    { id: "HAG", name: "Haggai", abbreviation: "Hag", chapters: 2 },
    { id: "ZEC", name: "Zechariah", abbreviation: "Zec", chapters: 14 },
    { id: "MAL", name: "Malachi", abbreviation: "Mal", chapters: 4 },
    // New Testament
    { id: "MAT", name: "Matthew", abbreviation: "Mat", chapters: 28 },
    { id: "MRK", name: "Mark", abbreviation: "Mar", chapters: 16 },
    { id: "LUK", name: "Luke", abbreviation: "Luk", chapters: 24 },
    { id: "JHN", name: "John", abbreviation: "Jhn", chapters: 21 },
    { id: "ACT", name: "Acts", abbreviation: "Act", chapters: 28 },
    { id: "ROM", name: "Romans", abbreviation: "Rom", chapters: 16 },
    { id: "1CO", name: "1 Corinthians", abbreviation: "1Co", chapters: 16 },
    { id: "2CO", name: "2 Corinthians", abbreviation: "2Co", chapters: 13 },
    { id: "GAL", name: "Galatians", abbreviation: "Gal", chapters: 6 },
    { id: "EPH", name: "Ephesians", abbreviation: "Eph", chapters: 6 },
    { id: "PHI", name: "Philippians", abbreviation: "Phi", chapters: 4 },
    { id: "COL", name: "Colossians", abbreviation: "Col", chapters: 4 },
    { id: "1TH", name: "1 Thessalonians", abbreviation: "1Th", chapters: 5 },
    { id: "2TH", name: "2 Thessalonians", abbreviation: "2Th", chapters: 3 },
    { id: "1TI", name: "1 Timothy", abbreviation: "1Ti", chapters: 6 },
    { id: "2TI", name: "2 Timothy", abbreviation: "2Ti", chapters: 4 },
    { id: "TIT", name: "Titus", abbreviation: "Tit", chapters: 3 },
    { id: "PHM", name: "Philemon", abbreviation: "Phm", chapters: 1 },
    { id: "HEB", name: "Hebrews", abbreviation: "Heb", chapters: 13 },
    { id: "JAM", name: "James", abbreviation: "Jam", chapters: 5 },
    { id: "1PE", name: "1 Peter", abbreviation: "1Pe", chapters: 5 },
    { id: "2PE", name: "2 Peter", abbreviation: "2Pe", chapters: 3 },
    { id: "1JN", name: "1 John", abbreviation: "1Jn", chapters: 5 },
    { id: "2JN", name: "2 John", abbreviation: "2Jn", chapters: 1 },
    { id: "3JN", name: "3 John", abbreviation: "3Jn", chapters: 1 },
    { id: "JUD", name: "Jude", abbreviation: "Jud", chapters: 1 },
    { id: "REV", name: "Revelation", abbreviation: "Rev", chapters: 22 },
  ];

  const tamilBooks = [
    { id: "GEN", name: "ஆதியாகமம்", abbreviation: "ஆதி", chapters: 50 },
    { id: "EXO", name: "யாத்திராகமம்", abbreviation: "யாத்", chapters: 40 },
    { id: "LEV", name: "லேவியராகமம்", abbreviation: "லேவி", chapters: 27 },
    { id: "NUM", name: "எண்ணாகமம்", abbreviation: "எண்", chapters: 36 },
    { id: "DEU", name: "உபாகமம்", abbreviation: "உபா", chapters: 34 },
    { id: "JOS", name: "யோசுவா", abbreviation: "யோசு", chapters: 24 },
    { id: "JDG", name: "நியாயாதிபதிகள்", abbreviation: "நியா", chapters: 21 },
    { id: "RUT", name: "ரூத்", abbreviation: "ரூத்", chapters: 4 },
    { id: "1SA", name: "1 சாமுவேல்", abbreviation: "1சாமு", chapters: 31 },
    { id: "2SA", name: "2 சாமுவேல்", abbreviation: "2சாமு", chapters: 24 },
    { id: "1KI", name: "1 இராஜாக்கள்", abbreviation: "1இரா", chapters: 22 },
    { id: "2KI", name: "2 இராஜாக்கள்", abbreviation: "2இரா", chapters: 25 },
    { id: "1CH", name: "1 நாளாகமம்", abbreviation: "1நா", chapters: 29 },
    { id: "2CH", name: "2 நாளாகமம்", abbreviation: "2நா", chapters: 36 },
    { id: "EZR", name: "எஸ்ரா", abbreviation: "எஸ்ரா", chapters: 10 },
    { id: "NEH", name: "நெகேமியா", abbreviation: "நெகே", chapters: 13 },
    { id: "EST", name: "எஸ்தர்", abbreviation: "எஸ்தர்", chapters: 10 },
    { id: "JOB", name: "யோபு", abbreviation: "யோபு", chapters: 42 },
    { id: "PSA", name: "சங்கீதம்", abbreviation: "சங்", chapters: 150 },
    { id: "PRO", name: "நீதிமொழிகள்", abbreviation: "நீதி", chapters: 31 },
    { id: "ECC", name: "சபை உரையாளர்", abbreviation: "சபை", chapters: 12 },
    { id: "SON", name: "உன்னத சங்கீதம்", abbreviation: "உன்ன", chapters: 8 },
    { id: "ISA", name: "எசாயா", abbreviation: "எசா", chapters: 66 },
    { id: "JER", name: "எரேமியா", abbreviation: "எரே", chapters: 52 },
    { id: "LAM", name: "புலம்பல்", abbreviation: "புலம்", chapters: 5 },
    { id: "EZK", name: "எசேக்கியேல்", abbreviation: "எசே", chapters: 48 },
    { id: "DAN", name: "தானியேல்", abbreviation: "தானி", chapters: 12 },
    { id: "HOS", name: "ஓசியா", abbreviation: "ஓசி", chapters: 14 },
    { id: "JOL", name: "யோவேல்", abbreviation: "யோவே", chapters: 3 },
    { id: "AMO", name: "ஆமோஸ்", abbreviation: "ஆமோ", chapters: 9 },
    { id: "OBA", name: "ஒபதியா", abbreviation: "ஒபதி", chapters: 1 },
    { id: "JON", name: "யோனா", abbreviation: "யோனா", chapters: 4 },
    { id: "MIC", name: "மீக்கா", abbreviation: "மீக்", chapters: 7 },
    { id: "NAH", name: "நாகூம்", abbreviation: "நாகூ", chapters: 3 },
    { id: "HAB", name: "அபக்கூக்", abbreviation: "அபக்", chapters: 3 },
    { id: "ZEP", name: "செப்பனியா", abbreviation: "செப்", chapters: 3 },
    { id: "HAG", name: "அக்காய்", abbreviation: "அக்", chapters: 2 },
    { id: "ZEC", name: "சகரியா", abbreviation: "சக", chapters: 14 },
    { id: "MAL", name: "மலாக்கி", abbreviation: "மலா", chapters: 4 },
    // New Testament
    { id: "MAT", name: "மத்தேயு", abbreviation: "மத்", chapters: 28 },
    { id: "MRK", name: "மாற்கு", abbreviation: "மாற்", chapters: 16 },
    { id: "LUK", name: "லூக்கா", abbreviation: "லூக்", chapters: 24 },
    { id: "JHN", name: "யோவான்", abbreviation: "யோவா", chapters: 21 },
    { id: "ACT", name: "அப்போஸ்தலர்", abbreviation: "அப்", chapters: 28 },
    { id: "ROM", name: "ரோமர்", abbreviation: "ரோ", chapters: 16 },
    { id: "1CO", name: "1 கொரிந்தியர்", abbreviation: "1கொ", chapters: 16 },
    { id: "2CO", name: "2 கொரிந்தியர்", abbreviation: "2கொ", chapters: 13 },
    { id: "GAL", name: "கலாத்தியர்", abbreviation: "கலா", chapters: 6 },
    { id: "EPH", name: "எபேசியர்", abbreviation: "எபே", chapters: 6 },
    { id: "PHI", name: "பிலிப்பியர்", abbreviation: "பிலி", chapters: 4 },
    { id: "COL", name: "கொலோசெயர்", abbreviation: "கொலோ", chapters: 4 },
    { id: "1TH", name: "1 தெசலோனிக்கேயர்", abbreviation: "1தெ", chapters: 5 },
    { id: "2TH", name: "2 தெசலோனிக்கேயர்", abbreviation: "2தெ", chapters: 3 },
    { id: "1TI", name: "1 தீமோத்தேயு", abbreviation: "1தீ", chapters: 6 },
    { id: "2TI", name: "2 தீமோத்தேயு", abbreviation: "2தீ", chapters: 4 },
    { id: "TIT", name: "தீத்து", abbreviation: "தீத்", chapters: 3 },
    { id: "PHM", name: "பிலேமோன்", abbreviation: "பிலே", chapters: 1 },
    { id: "HEB", name: "எபிரேயர்", abbreviation: "எபி", chapters: 13 },
    { id: "JAM", name: "யாக்கோபு", abbreviation: "யாக்", chapters: 5 },
    { id: "1PE", name: "1 பேதுரு", abbreviation: "1பே", chapters: 5 },
    { id: "2PE", name: "2 பேதுரு", abbreviation: "2பே", chapters: 3 },
    { id: "1JN", name: "1 யோவான்", abbreviation: "1யோ", chapters: 5 },
    { id: "2JN", name: "2 யோவான்", abbreviation: "2யோ", chapters: 1 },
    { id: "3JN", name: "3 யோவான்", abbreviation: "3யோ", chapters: 1 },
    { id: "JUD", name: "யூதா", abbreviation: "யூதா", chapters: 1 },
    { id: "REV", name: "வெளிப்படுத்தல்", abbreviation: "வெளி", chapters: 22 },
  ];

  return language === "TAMIL" ? tamilBooks : englishBooks;
};

// Fetch all books
export const fetchAllBooks = async (language = "KJV") => {
  const bibleId = BIBLES[language] || BIBLES.KJV;

  try {
    // Try to fetch from API first
    const response = await apiClient.get(`/v1/bibles/${bibleId}/books`);
    if (response.data && response.data.data) {
      return response.data.data.map((book) => ({
        id: book.id,
        name: book.name,
        abbreviation: book.abbreviation,
        chapters: book.chapters ? book.chapters.length : 50, // Fallback
      }));
    }
  } catch (apiError) {
    console.warn("API call failed, using mock data:", apiError.message);
  }

  // Fallback to mock data
  return getMockBooks(language);
};

// Fetch chapters for a book
export const fetchChapters = async (bookId, language = "KJV") => {
  try {
    const allBooks = getMockBooks(language);
    const book = allBooks.find((b) => b.id === bookId);
    const chaptersCount = book ? book.chapters : 50;

    const chapters = [];
    for (let i = 1; i <= chaptersCount; i++) {
      chapters.push({
        id: `${bookId}.${i}`,
        number: i,
        bookId: bookId,
      });
    }
    return chapters;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};

// Fetch verses for a chapter
export const fetchVerses = async (chapterId, language = "KJV") => {
  try {
    const [bookId, chapterNumber] = chapterId.split(".");

    // Generate mock verses based on language
    const versesCount = Math.floor(Math.random() * 30) + 10;
    const verses = [];

    for (let i = 1; i <= versesCount; i++) {
      let text;
      if (language === "TAMIL") {
        // Tamil mock verses
        text = `இது ${chapterId} இன் ${i} வசனம். தேவன் ஆரம்பத்தில் வானத்தையும் பூமியையும் சிருஷ்டித்தார். பூமி வெறுமையாகவும் வடிவமில்லாமலும் இருந்தது; ஆழத்தின் மேற்பரப்பில் இருள் இருந்தது.`;
      } else {
        // English mock verses
        text = `This is verse ${i} of ${chapterId}. In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep.`;
      }

      verses.push({
        id: `${chapterId}.${i}`,
        chapterId: chapterId,
        bookId: bookId,
        number: i,
        text: text,
        audioUrl: `https://cdn.example.com/audio/${bookId}/${chapterNumber}/${i}.mp3`, // Placeholder
      });
    }
    return verses;
  } catch (error) {
    console.error("Error fetching verses:", error);
    throw error;
  }
};

// Search verses
export const searchBibleVerses = async (query, language = "KJV") => {
  try {
    // Mock search implementation
    const allBooks = await fetchAllBooks(language);
    const results = [];

    // Simple search through book names
    allBooks.forEach((book) => {
      if (
        book.name.toLowerCase().includes(query.toLowerCase()) ||
        book.abbreviation.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          type: "book",
          ...book,
        });
      }
    });

    return results;
  } catch (error) {
    console.error("Error searching verses:", error);
    throw error;
  }
};

// Get chapter audio URL - using text-to-speech
export const getChapterAudioUrl = (bookId, chapterNumber, language = "KJV") => {
  // For now, we'll use text-to-speech. In production, you might want to use a real Bible audio API
  // Options include: Faith Comes By Hearing, Bible.is, or other Bible audio services
  return null; // We'll handle audio generation in the component
};

// Generate audio blob from text using Web Speech API
export const generateAudioFromText = (text, language = "en") => {
  return new Promise((resolve, reject) => {
    if (!("speechSynthesis" in window)) {
      reject(new Error("Speech synthesis not supported"));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    // Set language based on Bible language
    if (language === "TAMIL") {
      utterance.lang = "ta-IN"; // Tamil
      utterance.rate = 0.8; // Slightly slower for Tamil
    } else {
      utterance.lang = "en-US"; // English
      utterance.rate = 1.0;
    }

    utterance.pitch = 1.0;
    utterance.volume = 0.8;

    // Create a MediaRecorder to capture the audio
    const audioChunks = [];

    // We can't directly capture speech synthesis audio to a blob
    // Instead, we'll return a data URL that triggers speech synthesis
    const audioUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
    resolve(audioUrl);
  });
};

export default {
  fetchAllBooks,
  fetchChapters,
  fetchVerses,
  searchBibleVerses,
  getChapterAudioUrl,
};
