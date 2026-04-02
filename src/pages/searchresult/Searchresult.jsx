import './searchresult.css'

const Searchresult = () => {
	return(
		<div className="search_result">
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
		</div>
	)
}

export default Searchresult
