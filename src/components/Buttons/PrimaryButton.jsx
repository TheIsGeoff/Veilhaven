import "./button.scss";

function CustomButton({ label }) {
  return (
    <button
      className="button button--primary"
      onClick={() => console.log(label)}
    >
      {label}
    </button>
  );
}

export default CustomButton;
