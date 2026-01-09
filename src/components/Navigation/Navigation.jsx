import "./Navigation.scss";

function Navigation({ items }) {
  return (
    <nav className="navigation">
      {items.map((item, index) => (
        <div
          key={index}
          className={`navigation--element ${
            index === 0 ? "navigation--element--active" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
