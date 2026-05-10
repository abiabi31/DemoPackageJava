import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useAutoTranslation } from "../../hooks/useAutoTranslation";
import "./style.css";

const DUMMY_PASSWORD = "dummy123";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const translate = useAutoTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim()) {
      setError(translate("Please enter your username."));
      return;
    }

    if (password !== DUMMY_PASSWORD) {
      setError(translate("Invalid password. Use dummy password: dummy123"));
      return;
    }

    login({ username: username.trim() });
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>{translate("Login")}</h1>
        <p className="login-subtitle">
          {translate(
            "Enter your username and the dummy password to access the dashboard.",
          )}
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">
            {translate("Username")}
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                setError("");
              }}
              placeholder={translate("Your username")}
              required
            />
          </label>

          <label className="login-label">
            {translate("Password")}
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              placeholder={translate("dummy123")}
            />
          </label>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-button">
            {translate("Login")}
          </button>
        </form>

        <div className="login-hint">
          {translate("Hint: use password dummy123")}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
