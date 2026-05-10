import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSettings, FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "../../context/TranslationContext";
import { useAutoTranslation } from "../../hooks/useAutoTranslation";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage, languages } = useTranslation();
  const translate = useAutoTranslation();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  // Close settings popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };

    if (settingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsOpen]);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <div>
          <p className="navbar-label">{translate("Welcome back")}</p>
        </div>
      </div>

      <div className="navbar-actions">
        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? translate("Switch to light mode")
              : translate("Switch to dark mode")
          }
          title={
            theme === "dark"
              ? translate("Switch to light mode")
              : translate("Switch to dark mode")
          }
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        <button
          type="button"
          className="icon-button"
          onClick={() => setSettingsOpen((prev) => !prev)}
          aria-label={translate("Open settings")}
          title={translate("Open settings")}
        >
          <FiSettings />
        </button>

        <button type="button" className="logout-button" onClick={handleLogout}>
          <FiLogOut />
        </button>
      </div>

      {settingsOpen && (
        <div ref={settingsRef} className="settings-popup navbar-settings-popup">
          <div className="settings-item">
            <span className="settings-label">{translate("Account")}</span>
            <div className="username-display">{user?.username || "User"}</div>
          </div>
          <div className="settings-item">
            <span className="settings-label">{translate("Language")}</span>
            <select
              value={currentLanguage}
              onChange={(event) => changeLanguage(event.target.value)}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.nativeName}
                </option>
              ))}
            </select>
          </div>
          {/* <button
            type="button"
            className="logout-button-popup"
            onClick={handleLogout}
          >
            <FiLogOut /> {translate("Logout")}
          </button> */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
