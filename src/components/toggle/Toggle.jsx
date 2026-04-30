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
		<label className="toggle" htmlFor="theme-toggle">
			<input
				id="theme-toggle"
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				aria-label="Toggle dark mode"
			/>
			<span className="slider"></span>
		</label>
	);
}

export default Toggle;