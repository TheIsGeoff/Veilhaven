import { useEffect, useState } from "react";
import "./Account.scss";
import CustomButton from "../Buttons/PrimaryButton";
import { supabase } from "../../lib/superbase.js";
import { updateUsernameAndPfp } from "../../services/authServices.js";

function Settings({ username, pfp, onProfileUpdated }) {
  const pfpIDs = [1, 2, 3, 4, 5];
  const [selectedPfp, setSelectedPfp] = useState(pfp);
  const [editedUsername, setEditedUsername] = useState(username);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditedUsername(username);
  }, [username]);

  useEffect(() => {
    setSelectedPfp(pfp);
  }, [pfp]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      const userId = session?.user?.id;
      if (!userId) throw new Error("No authenticated user found");

      const usernameToSave = editedUsername.trim();

      const updated = await Promise.race([
        updateUsernameAndPfp(userId, usernameToSave, selectedPfp),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Save timed out")), 10000)
        ),
      ]);

      console.log("✅ Profile updated:", updated);
      onProfileUpdated?.({ username: updated.username, pfp: updated.pfp });
    } catch (err) {
      console.error("❌ Save error:", err?.message ?? err);
    } finally {
      setLoading(false);
    }
  };

  let pfpOptions = pfpIDs.map((id) => (
    <button
      type="button"
      onClick={() => setSelectedPfp(id)}
      key={id}
      className={`pfp-options--option ${
        selectedPfp === id ? "pfp-options--option--selected" : ""
      }`}
    >
      <img src={`public/pfp/${id}.jpg`} alt={`Profile ${id}`} />
    </button>
  ));

  return (
    <div className="settings">
      <h1>Settings</h1>
      <form onSubmit={handleSave}>
        <label>Profile</label>
        <div className="pfp-options">{pfpOptions}</div>
        <div className="login__group account__group--settings">
          <label htmlFor="username">Username</label>
          <input
            className="account__input"
            type="text"
            id="username"
            name="username"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
          />
        </div>

        <CustomButton
          type="submit"
          label={loading ? <div className="loader"></div> : "Save"}
        />
      </form>
    </div>
  );
}

export default Settings;
