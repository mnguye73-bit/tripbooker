import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.css'
import Header from './components/header/Header.jsx'
import Toggle from './components/toggle/Toggle.jsx'
import { Footer } from './components/components.js'
import Button from './components/button/Button.jsx'
import beachPNG from './assets/beach.png'

import Homepage from './pages/home/Homepage.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import Searchresult from './pages/searchresult/Searchresult.jsx'
import ErrorExample from './pages/errorexample/ErrorExample.jsx'
import Profile from './pages/profilepage/Profile.jsx'

function App() {
	const [ mode, setMode ] = useState('light');

	useEffect(() => {
		document.documentElement.setAttribute("data-mode", mode);
	}, [mode]);

	return (
  		<div className={`${styles.canvas} ${mode === 'dark' ? styles.dark : styles.light}`}>
  	  		<Header toggleChange={() => setMode(mode === 'light' ? 'dark' : 'light')} checked={mode === 'dark'}/>
				<Routes>
					<Route path='/' element={<Homepage />}/>
					<Route path='/searchresult' element={<Searchresult/>}/>
					<Route path='/checkout' element={<Checkout />}/>
					<Route path='/errorexample' element={<ErrorExample />}/>
					<Route path='/profile' element={<Profile />} />
				</Routes>
			<Footer />
			<div style={{ height: "8vh", flexShrink: 0}} >
			</div>
  	  	</div>
  	)
}

export default App
		
