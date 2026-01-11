import "./Journal.scss";
import ContentContainer from "../ContentContainer/ContentContainer.jsx";
import LetterImage from "../../assets/images/letters/letter.png";

function JournalSpecial() {
  return (
    <ContentContainer
      children={
        <>
          <div className="journal-wrapper">
            <div className="journal--image">
              <img src={LetterImage} alt="A handwritten letter" />
            </div>
            <div className="journal--text journal-special--text">
              <h1 className="journal-special__title">
                ✦ Original Journal Fragment
              </h1>
              <p className="journal-special__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </>
      }
      additionalClass="content-container--expanded content-container--journal content-container--journal-special"
    />
  );
}

export default JournalSpecial;
