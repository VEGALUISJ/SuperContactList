import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ContactCard extends Component {
	render() {
		return (
			<div className="card col-md-3 col-sm-10 mr-3 ml-3 mt-4 mb-4 ">
				<img
					alt="image"
					className="rounded mx-auto mt-1"
					width="150"
					height="150"
					src="http://cdn.onlinewebfonts.com/svg/img_411575.png"
				/>
				<div className="card-body mx-auto">
					<h4 className="name text-center mb-3">Jose Vega</h4>
					<p className="adress">
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						1750 NW 107 AVE, Miami.
					</p>
					<p className="phone">
						<i className="fa fa-phone fa-fw text-muted mr-3" />
						(786)253 9003
					</p>
					<p className="email">
						<i className="fa fa-envelope fa-fw text-muted mr-3" />
						luisvega.jlvv@gmail.com
					</p>
				</div>
				<div className="contact-box-footer mx-auto">
					<div className="m-t-xs btn-group ">
						<a className="btn btn-xs btn-white">
							<i className="fa fa-pencil-alt" /> Edit
						</a>
						<a className="btn btn-xs btn-white">
							<i className="fa fa-trash" /> Delete
						</a>
					</div>
				</div>
			</div>
		);
	}
}
