import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const DUMMY_PASSWORD = "dummy123";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (password === DUMMY_PASSWORD) {
      localStorage.setItem("token", "dummy-token");
      navigate("/Admin");
      return;
    }

    setError("Invalid password. Use dummy password: dummy123");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Admin Login</h1>
        <p className="login-subtitle">
          Use the dummy password to sign in and access the protected pages.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="login-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              placeholder="dummy123"
              required
            />
          </label>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="login-hint">
          Hint: use password <strong>dummy123</strong>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
