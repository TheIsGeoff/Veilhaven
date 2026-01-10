import { useState, useEffect } from "react";
import "./Account.scss";
import Navigation from "../Navigation/Navigation";
import ContentContainer from "../ContentContainer/ContentContainer";
import Join from "./Join.jsx";
import LogIn from "./LogIn.jsx";
import Profile from "./Profile.jsx";
import { supabase } from "../../lib/superbase.js";
import { getProfile } from "../../services/authServices.js";

function Account() {
  const [activeTab, setActiveTab] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [pfp, setPfp] = useState(0);

  useEffect(() => {
    const fetchProfile = async (user) => {
      // 1️⃣ Try to fetch the profile
      let profile = await getProfile(user.id);

      // 2️⃣ If profile doesn't exist, insert default
      if (!profile) {
        const { data: insertedProfile, error: insertError } = await supabase
          .from("profiles")
          .insert({
            id: user.id,
            username: user.email, // temporary default username
            email: user.email,
            pfp: 0, // default pfp
          })
          .select()
          .maybeSingle();

        if (insertError) {
          console.error("Failed to insert profile:", insertError.message);
        } else {
          profile = insertedProfile;
        }
      }

      // 3️⃣ Set state safely
      setUsername(profile?.username ?? user.email);
      setPfp(profile?.pfp ?? 0);
    };

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const sessionUser = data.session?.user ?? null;

      if (sessionUser) {
        setLoggedIn(true);
        await fetchProfile(sessionUser);
      }
    };

    checkSession();

    // Listen to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setLoggedIn(true);
        await fetchProfile(session.user);
      } else {
        setLoggedIn(false);
        setUsername("");
        setPfp(0);
      }
    });

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  const navItems = loggedIn ? ["Profile", "Settings"] : ["LogIn", "Join"];

  return (
    <>
      <Navigation
        items={navItems}
        activeIndex={activeTab}
        onChange={setActiveTab}
      />

      <div className="page-wrapper--secondary">
        <ContentContainer additionalClass="content-container--expanded">
          {loggedIn ? (
            <>
              {activeTab === 0 && <Profile username={username} pfp={pfp} />}
              {activeTab === 1 && <p>Settings</p>}
            </>
          ) : (
            <>
              {activeTab === 0 && <LogIn />}
              {activeTab === 1 && <Join />}
            </>
          )}
        </ContentContainer>
      </div>
    </>
  );
}

export default Account;
