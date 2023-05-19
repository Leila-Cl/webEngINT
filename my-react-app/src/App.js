import React, { useState } from "react";
import Login from "./login";
import Home from "./Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"

function App() {
  // App has state variable user, which is initially set to null, and updated using setUser function
  const [user, setUser] = useState(null);

  // firebase-provided function to create global authentication object
  // const auth = getAuth();
  console.log("App auth", auth);
  console.log("App user", user)

  // firebase-provided function, which is run whenever auth state is updated
  onAuthStateChanged(auth, (user) => {
    if (user && !user.email.endsWith("@dalton.org")) {
      auth.signOut();
      setUser(null);
      alert("This site is only open to Dalton accounts.");
    } else {
      setUser(user);
    }
  });

  
  return (
    <div>
    <br />
    {/* if user exists (not null), show Home. Otherwise, show login */}
    {user ? <Home user={user} /> : <Login />}
  </div>
  );
}

export default App;
