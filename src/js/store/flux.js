const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todolist: ["Do Homework Project", "Asist Every Day To Class"],
			list: ""
		},

		actions: {
			// Use getActions to call a function within a fuction
			handleChange: e =>
				setStore({
					list: {
						...setStore.list,
						[e.target.name]: e.target.value
					}
				})
		}
	};
};

export default getState;
