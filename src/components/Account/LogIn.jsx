import { useState } from "react";
import "./Account.scss";
import CustomButton from "../Buttons/PrimaryButton";
import PasswordVisible from "../../assets/icons/eye-solid-full.svg?react";
import PasswordHidden from "../../assets/icons/eye-slash-solid-full.svg?react";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id="login" className="login">
      <h1>Login</h1>

      <form>
        <div className="login__group">
          <label htmlFor="email">Email Address</label>
          <input
            className="account__input"
            type="text"
            id="email"
            name="email"
          />
        </div>

        <div className="login__group">
          <label htmlFor="password">Password</label>

          <div className="login__password">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
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

          <CustomButton label="Log In" type="submit" />
        </div>

        <a className="login__link" href="#">
          Forgot Your Password?
        </a>
      </form>
    </div>
  );
}

export default LogIn;
