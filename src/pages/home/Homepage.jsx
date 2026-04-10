import './homepage.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaUserPlus,
	FaBed,
	FaPlane,
	FaCar,
	FaShip,
	FaHome,
	FaArrowLeft,
	FaArrowRight
} from 'react-icons/fa'

const Homepage = () => {
	const navigate = useNavigate()
	const [pageReady, setPageReady] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setPageReady(true)
		}, 150)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className={`home_page ${pageReady ? 'page_ready' : ''}`}>
			<h1 className="title">Welcome to TripBooker!</h1>

			<div className="hero">
				<div className="search_bar">
					<div className="search_item">
						<FaMapMarkerAlt />
						<span>Location(s)</span>
					</div>

					<div className="search_item">
						<FaCalendarAlt />
						<span>Select Date(s)</span>
					</div>

					<div className="search_item">
						<FaUserPlus />
						<span>Travelers</span>
					</div>
				</div>

				<div className="options_bar">
					<div className="option_item">
						<FaBed />
						<span>Hotel</span>
					</div>

					<div className="option_item">
						<FaPlane />
						<span>Flight</span>
					</div>

					<div className="option_item">
						<FaCar />
						<span>Rental</span>
					</div>

					<div className="option_item">
						<FaShip />
						<span>Cruise</span>
					</div>
				</div>

				<div className="submit_btn">
					<button type="button" onClick={() => navigate('/searchresult')}>
						Submit
					</button>
				</div>
			</div>

			<div className="checkout_footer_bar">
				<button
					className="footer_nav_btn"
					aria-label="Home"
					type="button"
					onClick={() => navigate('/')}
				>
					<FaHome size={20} />
				</button>

				<div className="footer_right">
					<button
						className="footer_nav_btn"
						aria-label="Previous"
						type="button"
						onClick={() => navigate(-1)}
					>
						<FaArrowLeft size={18} />
					</button>

					<button
						className="footer_nav_btn"
						aria-label="Next"
						type="button"
						onClick={() => navigate('/searchresult')}
					>
						<FaArrowRight size={18} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Homepage