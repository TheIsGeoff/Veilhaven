import "./ContentContainer.scss";

function ContentContainer({ children, additionalClass }) {
  return (
    <div className={`content-container ${additionalClass}`}>{children}</div>
  );
}

export default ContentContainer;
