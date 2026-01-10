import "./GuideMessage.scss";
import ContentContainer from "../ContentContainer/ContentContainer";

function GuideMessage() {
  return (
    <>
      <h1 className="guide-message--title">A Friendly Message</h1>

      <p className="guide-message--body">
        <span className="guide-message--body guide-message--body--intro">
          Welcome to VEILHAVEN, city of the damned.
        </span>
        At the top of your reading pile lies an artifact—once the first page of
        the archives, now a fragment of forgotten knowledge. The archivist,
        James Thornhort, is gone, swallowed by the city’s shadows, leaving the
        story unfinished. It is now yours to continue. Write carefully. Every
        entry you add shapes the streets, the secrets, and the whispers of
        Veilhaven. The city watches. The city remembers.
      </p>
    </>
  );
}
export default GuideMessage;
