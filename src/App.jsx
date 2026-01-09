import "./styles/App.scss";
import ContentContainer from "./components/ContentContainer/ContentContainer.jsx";
import Account from "./components/Account/Account.jsx";

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
        <div className="page-wrapper--secondary">
          <Account />
        </div>
        <div className="page-wrapper--secondary">
          <ContentContainer
            additionalClass="content-container--expanded"
            children=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
