import "./Journal.scss";
import ContentContainer from "../ContentContainer/ContentContainer.jsx";

function JournalSpecial() {
  return (
    <ContentContainer
      children={
        <>
          <div className="journal-wrapper">
            <div className="journal--image">
              <img
                src="https://i.pinimg.com/736x/99/43/1a/99431a5a5e418dc7f1d701f647647d6f.jpg"
                alt=""
              />
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
