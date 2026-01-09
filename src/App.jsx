import { useState } from "react";
import "./styles/App.scss";
import ContentContainer from "./components/ContentContainer/ContentContainer.jsx";

function App() {
  const [count, setCount] = useState(0);

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
          <ContentContainer
            additionalClass="content-container--expanded"
            children=""
          />
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
