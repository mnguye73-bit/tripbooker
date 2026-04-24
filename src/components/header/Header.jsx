import './header.css'
import { useState } from 'react'
import { FaUser, FaBars, FaTimes, FaHome, FaSearch, FaCreditCard, FaMoon, FaSun } from 'react-icons/fa'
import Toggle from '../toggle/Toggle.jsx'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = ({ checked, toggleChange }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [profileLoading, setProfileLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()
	const [navLoading, setNavLoading] = useState('')

	const closeMenu = () => setMenuOpen(false)

	const isActive = (path) => location.pathname === path

	const isAnyLoading = profileLoading || navLoading !== ''

	const handleProfileClick = () => {
		if (profileLoading || navLoading) return

		closeMenu()
		setProfileLoading(true)

		setTimeout(() => {
			navigate('/profile')
			setProfileLoading(false)
		}, 700)
	}

	const handleNavClick = (path) => {
		if (navLoading || profileLoading || location.pathname === path) return

		closeMenu()
		setNavLoading(path)

		setTimeout(() => {
			navigate(path)
			setNavLoading('')
		}, 500)
	}

	return (
		<>
			{isAnyLoading && (
				<div className="screen_spinner_overlay">
					<div className="screen_spinner"></div>
				</div>
			)}

			<header className="header">
				<div className="header_left">
					<Link to="/" onClick={closeMenu} className="logo_link">
						<img src={logo} alt="Trip Booker logo" className="logo" />
					</Link>
				</div>

				<div className="header_center">
					<h1>Trip Booker</h1>
				</div>

				<div className="header_right">

				<div className="theme_toggle_wrap">
				{checked ? (
					<FaMoon
						className="theme_icon"
						size={22}
						style={{ transform: 'translate(-5px, 9px)' }}
					/>
				) : (
					<FaSun
						className="theme_icon"
						size={22}
						style={{ transform: 'translate(-5px, 9px)' }}
					/>
				)}

		<Toggle checked={checked} onChange={toggleChange} />
	</div>

					<button
						className="menu_btn"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle navigation menu"
						type="button"
					>
						{menuOpen ? <FaTimes /> : <FaBars />}
					</button>

					<button
						type="button"
						className="icon profile_icon"
						aria-label="Profile"
						onClick={handleProfileClick}
						disabled={profileLoading || navLoading}
					>
						<FaUser />
					</button>
				</div>
			</header>

			<nav className={`sub_nav ${menuOpen ? 'open' : ''}`}>
				<button
					type="button"
					className={`nav_link_btn ${isActive('/') ? 'active' : ''}`}
					onClick={() => handleNavClick('/')}
					disabled={navLoading === '/' || profileLoading}
				>
					<FaHome />
					<span>Home</span>
				</button>

				<button
					type="button"
					className={`nav_link_btn ${isActive('/searchresult') ? 'active' : ''}`}
					onClick={() => handleNavClick('/searchresult')}
					disabled={navLoading === '/searchresult' || profileLoading}
				>
					<FaSearch />
					<span>Search</span>
				</button>

				<button
					type="button"
					className={`nav_link_btn ${isActive('/checkout') ? 'active' : ''}`}
					onClick={() => handleNavClick('/checkout')}
					disabled={navLoading === '/checkout' || profileLoading}
				>
					<FaCreditCard />
					<span>Checkout</span>
				</button>
			</nav>
		</>
	)
}

export default Header