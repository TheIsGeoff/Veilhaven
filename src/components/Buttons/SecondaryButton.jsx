import "./button.scss";

function CustomButton({ label }) {
  return (
    <button
      className="button button--secondary"
      onClick={() => console.log(label)}
    >
      {label}
    </button>
  );
}

export default CustomButton;
