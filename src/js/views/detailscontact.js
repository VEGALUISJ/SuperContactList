import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class DetailsContact extends Component {
	constructor() {
		super();
		this.state = {
			todo: ""
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div className="container detailspage">
								<div className="row">
									<div className="col-md-2 mb-2">
										<img
											alt="image"
											className="rounded mx-auto mt-1"
											width="150"
											height="150"
											src="http://cdn.onlinewebfonts.com/svg/img_411575.png"
										/>
									</div>
									<div className="col-md-4 mb-2">
										<h5>
											<ins>Full Name</ins>
										</h5>
										<h4>Jose Vega</h4>
										<h5>
											<ins>Adress</ins>
										</h5>
										<h3>
											<i className="fas fa-map-marker-alt text-muted mr-3" />
											1750 NW 107 AVE, Miami.
										</h3>
										<h5>
											<ins>Phone Number</ins>
										</h5>
										<h3>
											<i className="fa fa-phone fa-fw text-muted mr-3" />
											(786)253 9003
										</h3>
										<h5>
											<ins>Email</ins>
										</h5>
										<h3>
											<i className="fa fa-envelope fa-fw text-muted mr-3" />
											luisvega.jlvv@gmail.com
										</h3>
									</div>
									<div className="col-md-6 mb-1 detailslist">
										<h3 className="text-center">To Do List</h3>
										<div className="row justify-content-md-center">
											<input
												className="inputtodolist col-md-9 mr-1"
												placeholder="What needs to be done with this Contact?"
												onChange={e => this.setState({ todo: e.target.value })}
											/>
											<button
												type="button"
												className="btn btn-primary col-md-2"
												onClick={() => actions.addTodo(this.state.todo)}>
												Add to do
											</button>
										</div>
										<ul className="text-center">
											{store.todolist.map((todolist, inx) => (
												<li key={inx}>
													{todolist}
													<span
														className="times fa fa-times"
														//onClick={e => this.handleClick(e, ind)}
													/>
												</li>
											))}
										</ul>
										<div className="detailsfooter text-muted">{store.todolist.length} items</div>
									</div>
								</div>
								<Link to="/demo">
									<p className="col-md-2 mt-3">Or get back to contacts</p>
								</Link>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
