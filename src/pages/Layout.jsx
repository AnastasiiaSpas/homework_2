import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Layout(props) {
	const navLinks = [`Home`, `Popular`, `Battle`]
  return (
    <>
		<nav>
			<ul className='nav'>
				{navLinks.map((navlink,index) =>
					<li key={index}>
						<NavLink to={navlink === `Home`? '/' : navlink.toLowerCase()===`popular`? `/popular/${props.routeDetails}`: navlink.toLowerCase()}>{navlink}</NavLink>
					</li>)}
			</ul>
		</nav>
		<Outlet/>
    </>
  );
}

export default Layout;