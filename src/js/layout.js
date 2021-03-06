import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { LogIn } from "./views/login";
import { SignIn } from "./views/signin";
import { Demo } from "./views/demo";
import { AddContact } from "./views/addcontact";
import { EditContact } from "./views/editcontact";
import { DetailsContact } from "./views/detailscontact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={LogIn} />
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/demo" component={Demo} />
						<Route exact path="/addcontact" component={AddContact} />
						<Route exact path="/editcontact" component={EditContact} />
						<Route exact path="/detailscontact" component={DetailsContact} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
