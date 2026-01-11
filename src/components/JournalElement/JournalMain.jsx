import "./Journal.scss";
import ContentContainer from "../ContentContainer/ContentContainer.jsx";

function JournalMain() {
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
            <div className="journal--text">
              <h1 className="journal-special__title">✦ Title</h1>
              <p className="journal-special__body"></p>
            </div>
          </div>
        </>
      }
      additionalClass="content-container--expanded content-container--journal"
    />
  );
}

export default JournalMain;
