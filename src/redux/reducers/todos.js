import { ADD_TODO, TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
    console.log(action);
      const { id, content } = action.payload;
      return {
        todos: [...state.todos, { content, completed: false, id }],
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }

    default: {
      return state;
    }
  }
};

export default todos;
