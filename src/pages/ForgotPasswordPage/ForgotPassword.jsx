import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import "./style.css";
import {
  useForgotPageMutation,
  useResetPasswordPageMutation,
} from "../../components/api/Login";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  // STEP STATE
  const [step, setStep] = useState(1);

  // PASSWORD VIEW
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [forget] = useForgotPageMutation();
  const [resetPassword] = useResetPasswordPageMutation();
  // LOADING
  const [loading, setLoading] = useState(false);

  // ERROR / SUCCESS
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // FORM STATE
  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  // SEND OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await forget({
        body: {
          email: form.email,
        },
      }).unwrap();

      setSuccess("OTP sent successfully to your email");

      // NEXT STEP
      setStep(2);
    } catch (error) {
      console.log(error);

      setError(error?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // RESET PASSWORD
  const handleResetPassword = async (e) => {
    e.preventDefault();

    // setEruseForgotPageMutationror("");
    setSuccess("");

    // PASSWORD MATCH
    if (form.newPassword !== form.confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        email: form.email,
        otp: form.otp,
        newPassword: form.newPassword,
        // confirmPassword: form.confirmPassword,
      };

      // console.log(payload);
      const response = await resetPassword({
        body: payload,
      }).unwrap();

      // API CALL
      // await resetPassword(payload).unwrap();

      setSuccess("Password reset succeforgetssful");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.log(error);

      setError(error?.data?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-container">
        {/* LEFT */}
        <div className="forgot-left">
          <h1>Forgot Password?</h1>

          <p>
            Reset your password securely and continue your Bible dashboard
            journey.
          </p>

          <div className="forgot-image">🔐</div>
        </div>

        {/* RIGHT */}
        <div className="forgot-right">
          <h2>{step === 1 ? "Send OTP" : "Reset Password"}</h2>

          {/* STEP 1 */}
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="forgot-form">
              <div className="input-group">
                <FiMail className="input-icon" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <div className="error-text">{error}</div>}

              {success && <div className="success-text">{success}</div>}

              <button type="submit" className="forgot-btn" disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleResetPassword} className="forgot-form">
              {/* EMAIL */}
              <div className="input-group">
                <FiMail className="input-icon" />

                <input type="email" name="email" value={form.email} readOnly />
              </div>

              {/* OTP */}
              <div className="input-group">
                <FiLock className="input-icon" />

                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={form.otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 6) {
                      handleChange({
                        target: {
                          name: "otp",
                          value,
                        },
                      });
                    }
                  }}
                  required
                />
              </div>

              {/* NEW PASSWORD */}
              <div className="input-group password-group">
                <FiLock className="input-icon" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="New Password"
                  value={form.newPassword}
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

              {/* CONFIRM PASSWORD */}
              <div className="input-group password-group">
                <FiLock className="input-icon" />

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

              {error && <div className="error-text">{error}</div>}

              {success && <div className="success-text">{success}</div>}

              <button type="submit" className="forgot-btn" disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
              </button>

              <button
                type="button"
                className="back-btn"
                onClick={() => setStep(1)}
              >
                Back
              </button>
            </form>
          )}

          <button className="login-link-btn" onClick={() => navigate("/login")}>
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
