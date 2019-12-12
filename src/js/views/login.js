import React, { Component } from "react";
import { Link } from "react-router-dom";

export class LogIn extends Component {
	render() {
		return (
			<div className="contanier-fluid containerlogin">
				<div className="row mx-auto col-sm-10">
					<div className="offset-md-4 col-md-4">
						<h2>LOGIN</h2>

						<form action="">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Username" />
							</div>

							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" />
							</div>
							<button type="button" className="btn btn-outline-primary">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
