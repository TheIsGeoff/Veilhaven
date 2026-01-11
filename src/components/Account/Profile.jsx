import { supabase } from "../../lib/superbase.js";
import "./Account.scss";
import LevelIcon from "../../assets/images/icons/level.jpg";

function Profile({ username, pfp, level = 0 }) {
  var userLevel = Math.floor(level / 1000);
  var nextLevel = level % 1000;

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="profile">
      <div className="pfp-wrapper">
        <div className="loader"></div>
        <img src={`public/pfp/${pfp}.png`} alt={`${username}`} />
      </div>
      <h1>{username}</h1>
      <div className="profile--level-wrapper">
        <img src={LevelIcon} alt="level" className="profile--level-image" />
        <div>
          <label htmlFor="">Level {userLevel}</label>
          <progress
            className="profile--level-progress"
            value={nextLevel}
            max="1000"
          ></progress>
        </div>
      </div>

      <button className="login__link" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}

export default Profile;
