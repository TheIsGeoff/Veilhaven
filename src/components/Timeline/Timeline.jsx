import "./Timeline.scss";
import JournalMain from "../JournalElement/JournalMain.jsx";
import PrimaryButton from "../Buttons/PrimaryButton.jsx";

function Timeline({ state }) {
  return (
    <>
      <div className="timeline" id={state}>
        <JournalMain />
        <PrimaryButton label="Load More" />
      </div>
    </>
  );
}

export default Timeline;
