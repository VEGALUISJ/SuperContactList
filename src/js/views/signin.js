import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignIn extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center mt-4">Sign Up</h1>
				<div className="container mt-1 pt-2 col-lg-6 col-8">
					<div className="form-group">
						<input
							type="username"
							className="form-control"
							id="exampleInputusername1"
							aria-describedby="usernameHelp"
							placeholder="Create Username"
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Confirm Password"
						/>
					</div>
					<button type="button" className="btn btn-success mx-auto mb-4">
						Create user
					</button>
				</div>
			</div>
		);
	}
}
