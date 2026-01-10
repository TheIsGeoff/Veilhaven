import { supabase } from "../../lib/superbase.js"; // make sure path is correct
import "./Account.scss";

function Profile({ username, pfp }) {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      // optional: reload page or reset app state
      window.location.reload(); // simple way to reset the app
    }
  };

  return (
    <div className="profile">
      <div className="pfp-wrapper">
        <div className="loader"></div>
        <img
          src={`public/pfp/${pfp}.jpg`} // example: pfp images stored in /public/pfp/0.png, 1.png, etc
          alt={`${username}`}
        />
      </div>
      <h1>{username}</h1>

      <button className="login__link" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}

export default Profile;
