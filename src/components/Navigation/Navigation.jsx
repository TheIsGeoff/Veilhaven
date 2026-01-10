import "./Navigation.scss";

function Navigation({ items, activeIndex, onChange }) {
  return (
    <nav className="navigation">
      {items.map((item, index) => (
        <div
          key={index}
          className={`navigation--element ${
            index === activeIndex ? "navigation--element--active" : ""
          }`}
          onClick={() => onChange(index)}
        >
          {item}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
