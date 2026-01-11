import "./button.scss";

function CustomButton({ label, type = "button", ...props }) {
  return (
    <button className="button button--primary" type={type} {...props}>
      {label}
    </button>
  );
}

export default CustomButton;
