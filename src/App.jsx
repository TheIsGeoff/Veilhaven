import "./styles/App.scss";
import Account from "./components/Account/Account.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Feed from "./components/Feed/Feed.jsx";
import Header from "./components/Header/Header.jsx";
import GuideMessage from "./components/GuideMessage/GuideMessage.jsx";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper--secondary">
          <Header />
        </div>
        <div className="page-wrapper--secondary sticky">
          <Account loggedIn={true} username={"dave"} />
        </div>
        <div className="page-wrapper--secondary">
          <Feed />
        </div>
        <Footer />
      </div>
      <div class="loader"></div>
    </>
  );
}

export default App;
