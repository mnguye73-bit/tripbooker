import './homepage.css'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaUserPlus,
	FaBed,
	FaPlane,
	FaCar,
	FaShip
} from 'react-icons/fa'

import beachPNG from '../../assets/beach.png'
import beachNight from '../../assets/beachnight.jpg'

const locationOptions = [
	'St. Lucia Escape Resort',
	'Capella Hanoi',
	'Hilton Garden Inn Hanoi',
	'The Ritz-Carlton Charlotte',
	'Hyatt Place Charlotte Downtown',
	'Omni Charlotte Hotel',
	'The Umstead Hotel and Spa',
	'Raleigh Marriott City Center',
	'Hyatt House Raleigh Downtown',
	'St. Lucia Escape Resort'
]

const Homepage = () => {
	const navigate = useNavigate()
	const [pageReady, setPageReady] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const [isDark, setIsDark] = useState(
		document.body.classList.contains('dark') ||
			document.documentElement.classList.contains('dark')
	)

	const [showLocationDropdown, setShowLocationDropdown] = useState(false)
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [showTravelersPicker, setShowTravelersPicker] = useState(false)

	const [selectedLocation, setSelectedLocation] = useState('Location(s)')
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [travelers, setTravelers] = useState(1)
	const [selectedOptions, setSelectedOptions] = useState([])

	const locationRef = useRef(null)
	const dateRef = useRef(null)
	const travelersRef = useRef(null)

	useEffect(() => {
		const timer = setTimeout(() => {
			setPageReady(true)
		}, 150)

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		const updateDarkMode = () => {
			setIsDark(
				document.body.classList.contains('dark') ||
					document.documentElement.classList.contains('dark')
			)
		}

		updateDarkMode()

		const bodyObserver = new MutationObserver(updateDarkMode)
		const htmlObserver = new MutationObserver(updateDarkMode)

		bodyObserver.observe(document.body, {
			attributes: true,
			attributeFilter: ['class']
		})

		htmlObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		})

		return () => {
			bodyObserver.disconnect()
			htmlObserver.disconnect()
		}
	}, [])

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (locationRef.current && !locationRef.current.contains(event.target)) {
				setShowLocationDropdown(false)
			}

			if (dateRef.current && !dateRef.current.contains(event.target)) {
				setShowDatePicker(false)
			}

			if (travelersRef.current && !travelersRef.current.contains(event.target)) {
				setShowTravelersPicker(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const formatDateRange = () => {
		if (startDate && endDate) return `${startDate} → ${endDate}`
		if (startDate) return startDate
		return 'Select Date(s)'
	}

	const handleLocationSelect = (location) => {
		setSelectedLocation(location)
		setShowLocationDropdown(false)
	}

	const handleTravelersChange = (value) => {
		if (value < 1) return
		if (value > 20) return
		setTravelers(value)
	}

	const toggleOption = (option) => {
		setSelectedOptions((prev) =>
			prev.includes(option)
				? prev.filter((item) => item !== option)
				: [...prev, option]
		)
	}

	return (
		<div className={`home_page ${pageReady ? 'page_ready' : ''}`}>
			{isSubmitting && (
				<div className="screen_spinner_overlay">
					<div className="screen_spinner"></div>
				</div>
			)}

		

			<div
				className="hero"
				style={{
					backgroundImage: `url(${isDark ? beachNight : beachPNG})`
				}}
			>
				<div className={`hero_bg ${isDark ? 'night_bg' : 'day_bg'}`}></div>
				<div className={`hero_overlay ${isDark ? 'dark_overlay' : 'light_overlay'}`}></div>

				<div className="search_bar">
					<div className="search_control" ref={locationRef}>
						<button
							type="button"
							className="search_item"
							onClick={() => {
								setShowLocationDropdown((prev) => !prev)
								setShowDatePicker(false)
								setShowTravelersPicker(false)
							}}
						>
							<FaMapMarkerAlt />
							<span>{selectedLocation}</span>
						</button>

						{showLocationDropdown && (
							<div className="search_popup location_dropdown">
								{locationOptions.map((location) => (
									<button
										key={location}
										type="button"
										className="dropdown_option"
										onClick={() => handleLocationSelect(location)}
									>
										{location}
									</button>
								))}
							</div>
						)}
					</div>

					<div className="search_control" ref={dateRef}>
						<button
							type="button"
							className="search_item"
							onClick={() => {
								setShowDatePicker((prev) => !prev)
								setShowLocationDropdown(false)
								setShowTravelersPicker(false)
							}}
						>
							<FaCalendarAlt />
							<span>{formatDateRange()}</span>
						</button>

						{showDatePicker && (
							<div className="search_popup date_picker_popup">
								<div className="popup_title">Choose your travel dates</div>

								<div className="date_fields">
									<div className="date_field">
										<label htmlFor="startDate">Start Date</label>
										<input
											id="startDate"
											type="date"
											value={startDate}
											onChange={(e) => {
												const newStart = e.target.value
												setStartDate(newStart)

												if (endDate && newStart > endDate) {
													setEndDate('')
												}
											}}
										/>
									</div>

									<div className="date_field">
										<label htmlFor="endDate">End Date</label>
										<input
											id="endDate"
											type="date"
											value={endDate}
											min={startDate || ''}
											onChange={(e) => setEndDate(e.target.value)}
										/>
									</div>
								</div>

								<button
									type="button"
									className="popup_done_btn"
									onClick={() => setShowDatePicker(false)}
								>
									Done
								</button>
							</div>
						)}
					</div>

					<div className="search_control" ref={travelersRef}>
						<button
							type="button"
							className="search_item"
							onClick={() => {
								setShowTravelersPicker((prev) => !prev)
								setShowLocationDropdown(false)
								setShowDatePicker(false)
							}}
						>
							<FaUserPlus />
							<span>{travelers} Traveler{travelers !== 1 ? 's' : ''}</span>
						</button>

						{showTravelersPicker && (
							<div className="search_popup travelers_popup">
								<div className="popup_title">Number of Travelers</div>

								<div className="travelers_row">
									<button
										type="button"
										className="traveler_btn"
										onClick={() => handleTravelersChange(travelers - 1)}
									>
										−
									</button>

									<input
										type="number"
										min="1"
										max="20"
										value={travelers}
										onChange={(e) =>
											handleTravelersChange(Number(e.target.value) || 1)
										}
										className="traveler_input"
									/>

									<button
										type="button"
										className="traveler_btn"
										onClick={() => handleTravelersChange(travelers + 1)}
									>
										+
									</button>
								</div>

								<button
									type="button"
									className="popup_done_btn"
									onClick={() => setShowTravelersPicker(false)}
								>
									Done
								</button>
							</div>
						)}
					</div>
				</div>

				<div className="options_bar">
					<button
						type="button"
						className={`option_item ${selectedOptions.includes('Hotel') ? 'option_item_active' : ''}`}
						onClick={() => toggleOption('Hotel')}
					>
						<FaBed />
						<span>Hotel</span>
					</button>

					<button
						type="button"
						className={`option_item ${selectedOptions.includes('Flight') ? 'option_item_active' : ''}`}
						onClick={() => toggleOption('Flight')}
					>
						<FaPlane />
						<span>Flight</span>
					</button>

					<button
						type="button"
						className={`option_item ${selectedOptions.includes('Rental') ? 'option_item_active' : ''}`}
						onClick={() => toggleOption('Rental')}
					>
						<FaCar />
						<span>Rental</span>
					</button>

					<button
						type="button"
						className={`option_item ${selectedOptions.includes('Cruise') ? 'option_item_active' : ''}`}
						onClick={() => toggleOption('Cruise')}
					>
						<FaShip />
						<span>Cruise</span>
					</button>
				</div>
				
				<div className="deals_section">
	<h2>Popular Deals</h2>

	<div className="deals_scroll">
		<div className="deal_card">
			<h3>St. Lucia Escape Resort</h3>
			<p>Oceanfront villa package with round trip flights</p>
			<span>Rating 9.7 ★</span>
		</div>

		<div className="deal_card">
			<h3>Capella Hanoi</h3>
			<p>Old Quarter stay with breakfast included</p>
			<span>Rating 7.6 ★</span>
		</div>

		<div className="deal_card">
			<h3>Hilton Garden Inn Hanoi</h3>
			<p>Pool access only 1 mile from the city</p>
			<span>Rating 6.4 ★</span>
		</div>

		<div className="deal_card">
			<h3>Ritz-Carlton Charlotte</h3>
			<p>Luxury stay with pool and breakfast</p>
			<span>Rating 9.1 ★</span>
		</div>

		<div className="deal_card">
			<h3>Hyatt Charlotte Downtown</h3>
			<p>Breakfast included close to downtown</p>
			<span>Rating 8.5 ★</span>
		</div>

		<div className="deal_card">
			<h3>Omni Charlotte Hotel</h3>
			<p>Pool stay less than 1 mile away</p>
			<span>Rating 8.8 ★</span>
		</div>

		<div className="deal_card">
			<h3>The Umstead Hotel</h3>
			<p>Spa-style Raleigh stay with pool access</p>
			<span>Rating 9.3 ★</span>
		</div>

		<div className="deal_card">
			<h3>Raleigh Marriott</h3>
			<p>City center hotel with breakfast included</p>
			<span>Rating 8.6 ★</span>
		</div>

		<div className="deal_card">
			<h3>Hyatt House Raleigh</h3>
			<p>Pool and breakfast near downtown Raleigh</p>
			<span>Rating 8.9 ★</span>
		</div>
	</div>
</div>

				<div className="submit_btn">
					<button
						type="button"
						disabled={isSubmitting}
						onClick={() => {
							if (isSubmitting) return

							setIsSubmitting(true)

							setTimeout(() => {
								navigate('/searchresult', {
									state: {
										selectedLocation:
											selectedLocation === 'Location(s)' ? '' : selectedLocation,
										startDate,
										endDate,
										travelers,
										selectedOptions
									}
								})
							}, 900)
						}}
					>
						Submit
					</button>
				</div>
			</div>
		</div>	
		
	)
}

export default Homepage