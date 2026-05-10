// import { useState } from "react";
// import "./style.css";

// const GoogleTranslate = () => {
//   const [sourceText, setSourceText] = useState("Hello from the dashboard.");
//   const [targetLanguage, setTargetLanguage] = useState("ta");
//   const [translatedText, setTranslatedText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleTranslate = async () => {
//     if (!sourceText.trim()) return;

//     setLoading(true);
//     setError("");

//     try {
//       // Using Google Translate API directly (client-side approach)
//       const response = await fetch(
//         `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(sourceText)}`,
//       );

//       if (!response.ok) {
//         throw new Error("Translation failed");
//       }

//       const data = await response.json();
//       const translation = data[0]?.[0]?.[0] || "Translation not available";

//       setTranslatedText(translation);
//     } catch (err) {
//       setError("Failed to translate. Please try again.");
//       console.error("Translation error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="google-translate-widget">
//       <div className="translate-header">
//         <h2>Google Translate</h2>
//         <p>Translate text using Google Translate API.</p>
//       </div>

//       <div className="translate-controls">
//         <label>
//           Source text
//           <textarea
//             value={sourceText}
//             onChange={(event) => setSourceText(event.target.value)}
//             rows={3}
//             placeholder="Enter text to translate..."
//           />
//         </label>

//         <label>
//           Target language
//           <select
//             value={targetLanguage}
//             onChange={(event) => setTargetLanguage(event.target.value)}
//           >
//             <option value="ta">தமிழ் (Tamil)</option>
//             <option value="en">English</option>
//             <option value="es">Español (Spanish)</option>
//             <option value="fr">Français (French)</option>
//             <option value="de">Deutsch (German)</option>
//             <option value="it">Italiano (Italian)</option>
//             <option value="pt">Português (Portuguese)</option>
//             <option value="ru">Русский (Russian)</option>
//             <option value="ja">日本語 (Japanese)</option>
//             <option value="ko">한국어 (Korean)</option>
//             <option value="zh-CN">中文 (Chinese)</option>
//           </select>
//         </label>

//         <button type="button" onClick={handleTranslate} disabled={loading}>
//           {loading ? "Translating..." : "Translate"}
//         </button>
//       </div>

//       <div className="translate-result">
//         {error && <p className="translate-error">{error}</p>}
//         {translatedText && (
//           <>
//             <h3>Translated text</h3>
//             <p>{translatedText}</p>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default GoogleTranslate;
