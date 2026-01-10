import "./ErrorMessage.scss";
import ContentContainer from "../ContentContainer/ContentContainer";

function ErrorMessage({ message }) {
  return (
    <ContentContainer
      additionalClass="content-container--expanded error-message"
      children={
        <>
          <p>{message}</p>
          <button
            onClick={(event) =>
              console.log(event.target.parentElement.remove())
            }
          >
            X
          </button>
        </>
      }
    />
  );
}

export default ErrorMessage;
