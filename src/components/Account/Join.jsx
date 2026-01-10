import { useState } from "react";
import "./Account.scss";
import CustomButton from "../Buttons/PrimaryButton";
import PasswordVisible from "../../assets/icons/eye-solid-full.svg?react";
import PasswordHidden from "../../assets/icons/eye-slash-solid-full.svg?react";
import { signUp } from "../../services/authServices.js";

function Join() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const handleJoin = async (e) => {
    e.preventDefault();
    setLoading(true); // show loader
    try {
      const user = await signUp(email, password, username);
      console.log("Signed up user:", user);
    } catch (err) {
      console.error("Signup error:", err.message);
      alert(err.message);
    } finally {
      setLoading(false); // hide loader
    }
  };

  return (
    <div id="join" className="join">
      <h1>Join Today</h1>

      <form onSubmit={handleJoin}>
        <div className="login__group">
          <label htmlFor="username">Username</label>
          <input
            className="account__input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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

        <div className="login__remember-and-submit login__remember-and-submit--join">
          <label className="login__remember-me">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            Remember Me
          </label>

          <CustomButton
            label={loading ? <div className="loader"></div> : "Join"}
            type="submit"
          ></CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Join;
