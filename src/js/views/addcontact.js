import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AddContact extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1 className="text-center mt-4">Add a New Contact</h1>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Full Name</label>
						<input type="Name" className="form-control" id="InputFullname" placeholder="Enter Full Name" />
					</div>
				</div>
			</div>
		);
	}
}
