import './header.css'

const Header = ({ headerHeight= '18vh'}) => {
	return(
		<div className="header"
			style={{
				color: '#6A1A2F',
				height: headerHeight
			}}
		>
			{/* here is where header contents goes*/}
		</div>
	)
}

export default Header;
