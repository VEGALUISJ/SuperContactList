const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todolist: ["Do Homework Project", "Asist Every Day To Class"],
			list: ""
		},

		actions: {
			// Use getActions to call a function within a fuction
			addTodo: todo => {
				const store = getStore();
				store.todolist.push(todo);
				setStore({ todo: todo });
				console.log("im working", todo);
			}
		}
	};
};

export default getState;
