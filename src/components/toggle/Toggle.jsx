import "./toggle.css";

function Toggle({ checked, onChange }) {
	const handleChange = (e) => {
		const isChecked = e.target.checked;

		document.body.classList.toggle("dark", isChecked);

		if (onChange) {
			onChange(e);
		}
	};

	return (
		<label className="toggle">
			<input
				type="checkbox"
				checked={checked}
				onChange={handleChange}
			/>
			<span className="slider"></span>
		</label>
	);
}

export default Toggle;