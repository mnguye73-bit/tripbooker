import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './footer.css'
import {
	FaHome,
	FaArrowLeft,
	FaArrowRight
} from 'react-icons/fa'

const Footer = () => {
	const navigate = useNavigate()
	const [navLoading, setNavLoading] = useState('')

	const handleNavClick = (target) => {
		if (navLoading) return

		setNavLoading(target)

		setTimeout(() => {
			if (target === 'home') {
				navigate('/')
			} else if (target === 'back') {
				navigate(-1)
			} else if (target === 'forward') {
				navigate(1)
			}
			setNavLoading('')
		}, 500)
	}

	return (
		<>
			{navLoading && (
				<div className="screen_spinner_overlay">
					<div className="screen_spinner"></div>
				</div>
			)}

			<div className="checkout_footer_bar">
				<button
					className="footer_nav_btn"
					aria-label="Home"
					type="button"
					onClick={() => handleNavClick('home')}
					disabled={!!navLoading}
				>
					<FaHome size={20} />
				</button>

				<div className="footer_right">
					<button
						className="footer_nav_btn"
						aria-label="Previous"
						type="button"
						onClick={() => handleNavClick('back')}
						disabled={!!navLoading}
					>
						<FaArrowLeft size={18} />
					</button>

					<button
						className="footer_nav_btn"
						aria-label="Next"
						type="button"
						onClick={() => handleNavClick('forward')}
						disabled={!!navLoading}
					>
						<FaArrowRight size={18} />
					</button>
				</div>
			</div>

			<div className="filler_footer"></div>
		</>
	)
}

export default Footer