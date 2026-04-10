import './checkout.css'
import { useNavigate } from 'react-router-dom'
import tripMain from '../../assets/trip-main.jpg'
import tripBottom from '../../assets/trip-bottom.jpg'
import {
	FaHome,
	FaArrowLeft,
	FaArrowRight,
	FaLock,
	FaShieldAlt,
	FaCheckCircle,
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaUsers,
	FaBed,
	FaPlane
} from 'react-icons/fa'

const states = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
]

const Checkout = () => {
	const navigate = useNavigate()
	return (
		<div className="checkout_page">
			<div className="checkout_content">
				<div className="checkout_left">
					<section className="form_section">
						<div className="section_header">
							<h2>Traveler Details</h2>
							<p>Enter the primary traveler’s information.</p>
						</div>

						<div className="form_row">
							<label htmlFor="firstName">First Name</label>
							<input id="firstName" type="text" placeholder="Mac" />
						</div>

						<div className="form_row">
							<label htmlFor="lastName">Last Name</label>
							<input id="lastName" type="text" placeholder="Price" />
						</div>

						<div className="form_row">
							<label htmlFor="email">Email</label>
							<input id="email" type="email" placeholder="Price@email.com" />
						</div>

						<div className="form_row">
							<label htmlFor="phone">Phone</label>
							<input id="phone" type="text" placeholder="(704) ***-****" />
						</div>
					</section>

					<section className="form_section">
						<div className="section_header">
							<h2>Payment Method</h2>
							<p>Your payment information is encrypted and secure.</p>
						</div>

						<div className="form_row">
							<label htmlFor="cardName">Name on Card</label>
							<input id="cardName" type="text" placeholder="Mason Walker" />
						</div>

						<div className="form_row">
							<label htmlFor="cardNumber">Card Number</label>
							<input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" />
						</div>

						<div className="payment_small_row">
							<div className="small_field">
								<label htmlFor="exp">Exp Date</label>
								<input id="exp" type="text" placeholder="MM/YY" />
							</div>

							<div className="small_field">
								<label htmlFor="cvv">CVV</label>
								<input id="cvv" type="text" placeholder="123" />
							</div>
						</div>

						<div className="trust_row">
							<div className="trust_item">
								<FaLock />
								<span>SSL Encrypted</span>
							</div>
							<div className="trust_item">
								<FaShieldAlt />
								<span>Secure Payment</span>
							</div>
						</div>
					</section>

					<section className="form_section">
						<div className="section_header">
							<h2>Billing Address</h2>
							<p>Match this address to your payment method.</p>
						</div>

						<div className="form_row">
							<label htmlFor="address">Address</label>
							<input id="address" type="text" placeholder="123 Ocean View Drive" />
						</div>

						<div className="form_row">
							<label htmlFor="city">City</label>
							<input id="city" type="text" placeholder="Charlotte" />
						</div>

						<div className="billing_split">
							<div className="small_field">
								<label htmlFor="state">State</label>
								<select id="state" defaultValue="">
									<option value="" disabled>
										Select state
									</option>
									{states.map((state) => (
										<option key={state} value={state}>
											{state}
										</option>
									))}
								</select>
							</div>

							<div className="small_field">
								<label htmlFor="zip">ZIP</label>
								<input id="zip" type="text" placeholder="28227" />
							</div>
						</div>
					</section>
				</div>

				<div className="checkout_middle">
					<div className="image_stack">
						<img src={tripMain} alt="Tropical resort view" />
						<img src={tripBottom} alt="Beachfront patio view" />
					</div>
				</div>

				<div className="checkout_right">
					<section className="booking_card">
						<div className="booking_badge">Reserved Getaway</div>
						<h2 className="booking_title">St. Lucia Escape Resort</h2>
						<p className="booking_subtitle">Oceanfront villa package with round-trip flights included.</p>

						<div className="booking_meta">
							<div className="booking_meta_item">
								<FaMapMarkerAlt />
								<div>
									<span className="meta_label">Destination</span>
									<span className="meta_value">St. Lucia</span>
								</div>
							</div>

							<div className="booking_meta_item">
								<FaCalendarAlt />
								<div>
									<span className="meta_label">Dates</span>
									<span className="meta_value">May 18 – May 23</span>
								</div>
							</div>

							<div className="booking_meta_item">
								<FaUsers />
								<div>
									<span className="meta_label">Guests</span>
									<span className="meta_value">2 Adults</span>
								</div>
							</div>

							<div className="booking_meta_item">
								<FaBed />
								<div>
									<span className="meta_label">Room</span>
									<span className="meta_value">1 King Suite</span>
								</div>
							</div>
						</div>
					</section>

					<section className="price_box">
						<h3>Price Summary</h3>
						<p>1 Room × 5 Nights</p>

						<div className="price_line">
							<span>Resort Stay</span>
							<span>$1,450</span>
						</div>

						<div className="price_line">
							<span>
								<FaPlane className="inline_icon" />
								Flight Tickets
							</span>
							<span>$820</span>
						</div>

						<div className="price_line">
							<span>Taxes & Fees</span>
							<span>$210</span>
						</div>

						<div className="price_total">
							<span>Total</span>
							<span>$2,480</span>
						</div>
					</section>

					<section className="checkout_cta_panel">
						<button className="confirm_btn">Complete Secure Booking</button>

						<div className="cta_note">
							<FaCheckCircle />
							<span>Free cancellation within 24 hours</span>
						</div>

						<div className="cta_note">
							<FaLock />
							<span>Your booking is protected with secure checkout</span>
						</div>
					</section>
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

export default Checkout