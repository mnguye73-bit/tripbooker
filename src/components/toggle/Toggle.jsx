import "./toggle.css";

function Toggle({ checked, onChange }) {
  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="slider"></span>
    </label>
  );
}

export default Toggle;
