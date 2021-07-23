import { createSlice } from "@reduxjs/toolkit";

let todoList = [{
  todo: 'Buy milk',
  id: '1',
  completed: false
},{
  todo: 'Buy vegetables',
  id: '2',
  completed: true
},{
  todo: 'Call to grandma',
  id: '3',
  completed: false
}]


const todosSlice = createSlice({
  name: 'todos',
  initialState: todoList,
  reducers: {
    addTodo(state, action) {
      const todo = {
        todo: action.payload.title,
        id: Math.random(),
        completed: false
      }
      state.push(todo);
    },

    toggleTodo(state, action) {
      const indexTodo = state.findIndex(todo => todo.id === action.payload.id);

      state[indexTodo].completed = !action.payload.completed;
    },

    deleteTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload.id)
    },

    filterAllTodos(state, action) {
      return action.payload.todos;
    },

    filterCompletedTodos(state, action) {
      return state.todos.filter(todo => todo.completed === true);
    },

    filterActiveTodos(state, action) {
      return action.payload.todos.filter(todo => todo.completed === false);
    }
  }
})

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  filterAllTodos,
  filterCompletedTodos,
  filterActiveTodos} = todosSlice.actions
export default todosSlice.reducer