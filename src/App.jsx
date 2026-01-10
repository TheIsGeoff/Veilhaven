import "./styles/App.scss";
import ContentContainer from "./components/ContentContainer/ContentContainer.jsx";
import Account from "./components/Account/Account.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Feed from "./components/Feed/Feed.jsx";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper--secondary">
          <ContentContainer
            additionalClass="content-container--expanded"
            children=""
          />
        </div>
        <div className="page-wrapper--secondary sticky">
          <Account />
        </div>
        <div className="page-wrapper--secondary">
          <Feed />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
