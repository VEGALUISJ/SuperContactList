const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todolist: ["Do Homework Project", "Asist Every Day To Class"]
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;
