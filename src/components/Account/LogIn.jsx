import { useState } from "react";
import "./Account.scss";
import CustomButton from "../Buttons/PrimaryButton";
import PasswordVisible from "../../assets/icons/eye-solid-full.svg?react";
import PasswordHidden from "../../assets/icons/eye-slash-solid-full.svg?react";
import { logIn } from "../../services/authServices.js";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // show loader
    try {
      const user = await logIn(email, password);
      console.log("Logged in user:", user);
    } catch (err) {
      console.error("Login error:", err.message);
      alert(err.message);
    } finally {
      setLoading(false); // hide loader
    }
  };

  return (
    <div id="login" className="login">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div className="login__group">
          <label htmlFor="email">Email Address</label>
          <input
            className="account__input"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login__group">
          <label htmlFor="password">Password</label>
          <div className="login__password">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="login__password--toggle"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <PasswordHidden /> : <PasswordVisible />}
            </button>
          </div>
        </div>

        <div className="login__remember-and-submit">
          <label className="login__remember-me">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            Remember Me
          </label>

          <CustomButton
            label={loading ? <div className="loader"></div> : "LogIn"}
            type="submit"
          ></CustomButton>
        </div>

        <a className="login__link" href="#">
          Forgot Your Password?
        </a>
      </form>
    </div>
  );
}

export default LogIn;
