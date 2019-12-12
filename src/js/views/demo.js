import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactcard";

export class Demo extends Component {
	render() {
		return (
			<div className="container">
				<ContactCard />
			</div>
		);
	}
}
