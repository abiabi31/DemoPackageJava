import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./style.css";
import { useSignupPageMutation } from "../../components/api/Login";

const SignupPage = () => {
  const navigate = useNavigate();

  const [signup] = useSignupPageMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    try {
      const payload = {
        fullName: form.fullName,
        email: form.email,
        mobileNumber: form.mobileNumber,
        age: Number(form.age),
        password: form.password,
        confirmPassword: form.confirmPassword,
      };

      console.log(payload);

      const response = await signup(payload).unwrap();
      console.log(response);

      navigate("/login");
    } catch (error) {
      console.error(error);

      setError(error?.data?.message || "Signup failed. Please try again.");
    }
  };
  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* LEFT SIDE */}
        <div className="signup-left">
          <h1>Welcome Back</h1>

          <p>
            Create your account and explore the Bible dashboard with a modern
            experience.
          </p>

          <div className="signup-image">✨</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="signup-right">
          <h2>Create Account</h2>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={form.mobileNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  if (value.length <= 10) {
                    handleChange({
                      target: {
                        name: "mobileNumber",
                        value,
                      },
                    });
                  }
                }}
                maxLength={10}
                required
              />
            </div>

            <div className="input-row">
              <div className="input-group">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={form.age}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (Number(value) >= 0 || value === "") {
                      handleChange(e);
                    }
                  }}
                  min="0"
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <span
                  className="password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-group password-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

              <span
                className="password-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {error && <div className="signup-error">{error}</div>}

            <button type="submit" className="signup-btn">
              Create Account
            </button>

            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
