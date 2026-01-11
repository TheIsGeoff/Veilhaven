import { supabase } from "../lib/superbase.js";

// Sign up and insert profile
export async function signUp(email, password, username) {
  // Sign up
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });
  if (signUpError) throw signUpError;

  // Wait for session to exist
  const { data: signInData, error: signInError } =
    await supabase.auth.signInWithPassword({ email, password });
  if (signInError) throw signInError;

  const userId = signInData.user.id;

  // Insert profile row
  const { error: profileError } = await supabase
    .from("profiles")
    .insert([{ id: userId, username, email, pfp: 0, level: 0 }]);
  if (profileError) throw profileError;

  return signInData.user;
}

// Login function
export async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data.user;
}

// Fetch profile by user id
export async function getProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle(); // <-- allows zero rows

  if (error) throw error;
  return data; // can be null if no profile exists
}

// Update username + profile picture
export async function updateUsernameAndPfp(userId, username, pfp) {
  const { data, error } = await supabase
    .from("profiles")
    .update({ username, pfp })
    .eq("id", userId)
    .select("id, username, pfp")
    .maybeSingle();

  if (error) throw error;
  if (!data) {
    throw new Error(
      "Profile was not updated (no row returned). Check the row exists and your Supabase RLS policy allows updates."
    );
  }

  return data;
}

// Logout
export async function logOut() {
  await supabase.auth.signOut();
}
