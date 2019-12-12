import React from "react";
import contactImage from "../../img/contact-logo.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Super ContactList</h1>
		<p>
			<img src={contactImage} />
		</p>
		<h2>Its no time to lose contacts</h2>
		<h2>keep safe with us.</h2>
	</div>
);
