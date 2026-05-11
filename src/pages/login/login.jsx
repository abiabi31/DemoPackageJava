// LoginPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useAutoTranslation } from "../../hooks/useAutoTranslation";
import "./style.css";
import { useLoginMutation } from "../../components/api/Login";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const translate = useAutoTranslation();

  const [loginMutation] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.trim()) {
      setError(translate("Please enter your username."));
      return;
    }

    try {
      const body = {
        username: username.trim(),
        password: password,
      };

      const response = await loginMutation({ body }).unwrap();

      if (response) {
        login(response);

        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      setError(translate("Login failed. Please try again."));
    }
  };

  return (
    <div className="modern-login-page">
      <div className="modern-login-container">
        {/* LEFT SIDE */}
        <div className="modern-login-left">
          <div className="overlay"></div>

          <div className="left-content">
            <h1>Bible App</h1>

            <p>
              Read, search, bookmark, and explore the Word of God with a
              beautiful modern experience.
            </p>

            <div className="left-icon">📖</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="modern-login-right">
          <div className="login-box">
            <h2>{translate("Welcome Back")}</h2>

            <p className="subtitle">{translate("Login to continue")}</p>

            <form onSubmit={handleSubmit} className="modern-login-form">
              {/* USERNAME */}
              <div className="input-box">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                  placeholder={translate("Username")}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="input-box">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder={translate("Password")}
                />
              </div>

              {/* ERROR */}
              {error && <div className="modern-login-error">{error}</div>}

              {/* LOGIN BUTTON */}
              <button type="submit" className="modern-login-btn">
                {translate("Login")}
              </button>

              {/* FOOTER */}
              <div className="login-footer">
                <button
                  type="button"
                  className="signup-btn"
                  onClick={() => navigate("/signup")}
                >
                  {translate("Create Account")}
                </button>

                <button
                  type="button"
                  className="forgot-btn"
                  onClick={() => navigate("/forgotPassword")}
                >
                  <span className="btn-icon">🤔</span>
                  {translate("Forgot Password?")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
