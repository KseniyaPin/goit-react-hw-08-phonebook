import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"
import {getIsLoggedIn} from './redux/selectors';

const styles = {
	link: {
		display: 'inline-block',
		textDecoration: 'none',
		padding: 12,
		fontWeight: 700,
		color: '#2A363B',
	},
	activeLink: {
		color: '#E84A5F',
	},	
}

const Navigation = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return ( 
	<nav>
		<NavLink to='/' style={styles.link}>
			Головна
		</NavLink>

		{isLoggedIn && (
		  <NavLink 
			to='/contacts' 
			style={styles.link}>
				Контакти
		  </NavLink>
		)}
	</nav>
)}

export default Navigation;