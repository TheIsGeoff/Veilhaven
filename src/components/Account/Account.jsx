import { useState, useEffect } from "react";
import "./Account.scss";
import Navigation from "../Navigation/Navigation";
import ContentContainer from "../ContentContainer/ContentContainer";
import Join from "./Join.jsx";
import LogIn from "./LogIn.jsx";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import { supabase } from "../../lib/superbase.js";
import { getProfile } from "../../services/authServices.js";

function Account({ setAuthError }) {
  const [activeTab, setActiveTab] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [pfp, setPfp] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const fetchProfile = async (user) => {
      // Try to fetch the profile
      let profile = await getProfile(user.id);

      // If profile can't be found, insert default
      if (!profile) {
        const { data: insertedProfile, error: insertError } = await supabase
          .from("profiles")
          .insert({
            id: user.id,
            username: user.email,
            email: user.email,
            pfp: 0,
            level: 0,
          })
          .select()
          .maybeSingle();

        if (insertError) {
          console.error("Failed to insert profile:", insertError.message);
        } else {
          profile = insertedProfile;
        }
      }

      setUsername(profile?.username ?? user.email);
      setPfp(profile?.pfp ?? 0);
      setLevel(profile?.level ?? 0);
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
        setLevel(0);
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
              {activeTab === 0 && (
                <Profile username={username} pfp={pfp} level={level} />
              )}
              {activeTab === 1 && (
                <Settings
                  username={username}
                  pfp={pfp}
                  level={level}
                  onProfileUpdated={(nextProfile) => {
                    if (!nextProfile) return;
                    if (typeof nextProfile.username === "string") {
                      setUsername(nextProfile.username);
                    }
                    if (typeof nextProfile.pfp === "number") {
                      setPfp(nextProfile.pfp);
                    }
                  }}
                />
              )}
            </>
          ) : (
            <>
              {activeTab === 0 && <LogIn setAuthError={setAuthError} />}
              {activeTab === 1 && <Join setAuthError={setAuthError} />}
            </>
          )}
        </ContentContainer>
      </div>
    </>
  );
}

export default Account;
