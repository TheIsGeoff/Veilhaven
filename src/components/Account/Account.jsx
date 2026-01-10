import { useState } from "react";
import "./Account.scss";
import Navigation from "../Navigation/Navigation";
import ContentContainer from "../ContentContainer/ContentContainer";
import Join from "./Join.jsx";
import LogIn from "./LogIn.jsx";

function Account() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Navigation
        items={["LogIn", "Join"]}
        activeIndex={activeTab}
        onChange={setActiveTab}
      />

      <div className="page-wrapper--secondary">
        <ContentContainer additionalClass="content-container--expanded">
          {activeTab === 0 && <LogIn />}
          {activeTab === 1 && <Join />}
        </ContentContainer>
      </div>
    </>
  );
}

export default Account;
