import { useState } from "react";
import "./Feed.scss";
import JournalSpecial from "../JournalElement/JournalSpecial";
import Timeline from "../Timeline/Timeline.jsx";
import Navigation from "../Navigation/Navigation";
import ContentContainer from "../ContentContainer/ContentContainer.jsx";

function Feed() {
  // 🔹 This index controls EVERYTHING
  const [activeIndex, setActiveIndex] = useState(0);

  // What the nav shows
  const navItems = ["Recent", "Top", "Create"];

  // What Timeline actually needs
  const timelineStates = ["recent", "top", "create"];

  return (
    <>
      <Navigation
        items={navItems}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
      <ContentContainer
        children={
          <>
            <JournalSpecial />
            <div className="devider-wrapper">
              <i>{navItems[activeIndex]} Entrys</i>
              <div className="devider"></div>
            </div>
            <Timeline state={timelineStates[activeIndex]} />
          </>
        }
      />
    </>
  );
}

export default Feed;
