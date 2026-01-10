import { useState } from "react";
import "./styles/App.scss";
import Account from "./components/Account/Account.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Feed from "./components/Feed/Feed.jsx";
import Header from "./components/Header/Header.jsx";
/*import GuideMessage from "./components/GuideMessage/GuideMessage.jsx";*/
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

function App() {
  const [authError, setAuthError] = useState(null); // ❗ starts as nothing

  return (
    <div className="page-wrapper">
      <div className="page-wrapper--secondary">
        <Header />
      </div>

      <div className="page-wrapper--secondary sticky account-wrapper">
        <Account setAuthError={setAuthError} />

        {/* ✅ ONLY GENERATED WHEN authError EXISTS */}
        {authError && <ErrorMessage message={authError} />}
      </div>

      <div className="page-wrapper--secondary">
        <Feed />
      </div>

      <Footer />
    </div>
  );
}

export default App;
