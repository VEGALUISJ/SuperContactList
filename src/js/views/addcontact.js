import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AddContact extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1 className="text-center mt-4">Add a New Contact</h1>
					<div className="form-group">
						<label>Full Name</label>
						<input type="Name" className="form-control" id="InputFullname" placeholder="Enter Full Name" />
					</div>
					<div className="form-group">
						<label>Adress</label>
						<input type="Adress" className="form-control" id="InputAdress" placeholder="Enter Adress" />
					</div>
					<div className="form-group">
						<label>Phone Number</label>
						<input
							type="Phone"
							className="form-control"
							id="InputPhoneNumber"
							placeholder="Enter Phone Number"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="Email" className="form-control" id="InputEmail" placeholder="Enter Email" />
					</div>
					<Link to="/demo">
						<button type="button" className="btn btn-primary form-control mt-3">
							Save New Contact Now
						</button>
					</Link>
					<Link to="/demo">
						<p className="mt-2">or get back to contacts</p>
					</Link>
				</div>
			</div>
		);
	}
}
