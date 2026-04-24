import './profile.css'
import { useEffect, useState } from 'react'
import {
    FaUserCircle,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaSuitcase,
	FaCreditCard,
	FaCog,
	FaBell
} from 'react-icons/fa'

const Profile = () => {
    const [pageReady, setPageReady] = useState(false)

    useEffect(() => {
		const timer = setTimeout(() => {
			setPageReady(true)
		}, 150)

        return () => clearTimeout(timer)
	}, [])

    return (
		<div className={`profile_page ${pageReady ? 'page_ready' : ''}`}>
			<div className="profile_container">
				<section className="profile_hero_card">
					<div className="profile_avatar_wrap">
						<FaUserCircle className="profile_avatar" />
					</div>

					<div className="profile_hero_text">
						<p className="profile_tag">Traveler Profile</p>
						<h1>My Profile</h1>
						<p className="profile_subtitle">
							Manage your personal information, payment details, and travel preferences.
						</p>
					</div>
				</section>

				<div className="profile_grid">
					<section className="profile_card">
						<h2>Personal Information</h2>

						<div className="profile_info_list">
							<div className="profile_info_row">
								<div className="info_label">
									<FaUserCircle />
									<span>Name</span>
								</div>
								<span className="info_value">abc defg</span>
							</div>

							<div className="profile_info_row">
								<div className="info_label">
									<FaEnvelope />
									<span>Email</span>
								</div>
								<span className="info_value">abcdefg@email.com</span>
							</div>

							<div className="profile_info_row">
								<div className="info_label">
									<FaPhone />
									<span>Phone</span>
								</div>
								<span className="info_value">(704) ***-****</span>
							</div>

							<div className="profile_info_row">
								<div className="info_label">
									<FaMapMarkerAlt />
									<span>Location</span>
								</div>
								<span className="info_value">Charlotte, NC</span>
							</div>
						</div>
					</section>

					<section className="profile_card">
						<h2>Account Overview</h2>

						<div className="profile_stats">
							<div className="stat_box">
								<FaSuitcase />
								<div>
									<span className="stat_label">Trips Booked</span>
									<strong>12</strong>
								</div>
							</div>

							<div className="stat_box">
								<FaCreditCard />
								<div>
									<span className="stat_label">Saved Cards</span>
									<strong>2</strong>
								</div>
							</div>

							<div className="stat_box">
								<FaBell />
								<div>
									<span className="stat_label">Alerts</span>
									<strong>3</strong>
								</div>
							</div>

							<div className="stat_box">
								<FaCog />
								<div>
									<span className="stat_label">Settings</span>
									
								</div>
							</div>
						</div>
					</section>

					<section className="profile_card full_width">
						<h2>Travel Preferences</h2>

						<div className="preferences_grid">
							<div className="preference_item">
								<span className="preference_label">Preferred Booking Type</span>
								<span className="preference_value">Hotel + Flight</span>
							</div>

							<div className="preference_item">
								<span className="preference_label">Seat Preference</span>
								<span className="preference_value">Window</span>
							</div>

							<div className="preference_item">
								<span className="preference_label">Room Preference</span>
								<span className="preference_value">King Bed</span>
							</div>

							<div className="preference_item">
								<span className="preference_label">Notifications</span>
								<span className="preference_value">Email + SMS</span>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Profile
















