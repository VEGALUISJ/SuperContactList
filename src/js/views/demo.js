import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactcard";

export class Demo extends Component {
	render() {
		return (
			<div className="container">
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/demo">
						Add new contact
					</Link>
				</p>
				<div className="row my-auto">
					<ContactCard />
					<ContactCard />
					<ContactCard />
					<ContactCard />
				</div>
			</div>
		);
	}
}
