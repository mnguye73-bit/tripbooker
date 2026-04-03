import './searchresult.css'
import { FaHome, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Searchresult = () => {
	return(
		<div className="search_result">
			<div className="search_container">
				<input 
				type="date"
				className="date_input"
			/>
				<input
					type="text"
					className="search_input"
					placeholder="Search a property"
				/>
				<button className="search_button">Search</button>

			</div>

			<div className="tabs">
				<div className="tab active">Hotel</div>
				<div className="tab">Homes</div>
				<div className="tab">Stays</div>
			</div>

			<input
				type="text"
				className="search_box"
				placeholder="Search a property"
			/>

			<p className="filters">Filters:</p>
			<div className="filter_list">
  				<div className="filter_item">
    				<div className="filter_box"></div>
    				Pool (2)
  				</div>

  				<div className="filter_item">
    				<div className="filter_box"></div>
   					Living Room (1)
  				</div>

  				<div className="filter_item">
    				<div className="filter_box"></div>
    				Backyard (3)
  				</div>
			</div>

			<div className="card">
				<img src="" alt=""/>

				<div className="card_content">
					<h3>Capella Hanoi</h3>
					<ul>
						<li>Breakfast Included</li>
						<li>Old Quarter</li>
					</ul>
					<p className="rating">7.6 ★</p>
					<p className="miles">2 miles</p>
				</div>
			</div>
	
			<div className="card">
				<img src="" alt=""/>
				<div className="card_content2">
					<h3>Hilton Garden In HaNoi</h3>
					<ul>
						<li>Pool</li>
					</ul>
					<p className="rating">6.4 ★</p>
					<p className="miles">1 mile</p>
				</div>
			</div>

			<div className="checkout_footer_bar">
  				<div className="footer_left">
    				<FaHome size={28} />
  				</div>

  				<div className="footer_right">
    				<FaArrowLeft size={24} />
    				<FaArrowRight size={24} />
  				</div>
			</div>
		</div>
	)
}

export default Searchresult
