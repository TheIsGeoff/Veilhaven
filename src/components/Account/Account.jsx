import "./Account.scss";
import Navigation from "../Navigation/Navigation";
import ContentContainer from "../ContentContainer/ContentContainer";
import Join from "./Join.jsx";
import LogIn from "./LogIn.jsx";

function Account({}) {
  return (
    <>
      <Navigation items={["LogIn", "Join"]} />
      <div className="page-wrapper--secondary">
        <ContentContainer
          additionalClass="content-container--expanded"
          children={<LogIn />}
        />
      </div>
    </>
  );
}

export default Account;
