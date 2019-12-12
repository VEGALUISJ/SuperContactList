import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-primary mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Super ContactList</span>
			</Link>
			<div className="row ml-auto mr-2">
				<Link to="/login">
					<button className="btn btn-warning mr-1">Log In</button>
				</Link>
				<h3 className="subtitlenav"> or </h3>
				<Link to="/signin">
					<button className="btn btn-warning ml-1">Sign In</button>
				</Link>
			</div>
		</nav>
	);
};
