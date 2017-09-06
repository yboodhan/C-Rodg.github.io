import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<div className="logo">
				<img src={require("../assets/logo.png")} alt="Curtis Rodgers" />
			</div>
			<div className="name">
				<Link to="/">
					<span className="light">Curtis. </span>Rodgers
				</Link>
			</div>
			<div className="links">
				<NavLink to="/about" activeClassName="nav-active">
					About
				</NavLink>
				<NavLink to="/work" activeClassName="nav-active">
					Work
				</NavLink>
				<NavLink to="/contact" activeClassName="nav-active">
					Contact
				</NavLink>
			</div>
		</div>
	);
};

export default Navigation;
