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

let initialState = {
  allTodos: todoList,
  completedTodos: todoList,
  activeTodos: todoList,
  active: 'all'
}


const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const todo = {
        todo: action.payload.title,
        id: Math.random(),
        completed: false
      }
      state.allTodos.push(todo);
    },

    toggleTodo(state, action) {
      const indexTodo = state.allTodos.findIndex(todo => todo.id === action.payload.id);

      state.allTodos[indexTodo].completed = !action.payload.completed;
    },

    deleteTodo(state, action) {
      state.allTodos =  state.allTodos.filter(todo => todo.id !== action.payload.id);
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