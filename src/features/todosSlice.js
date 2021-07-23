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
},{
  todo: 'Cook pasta',
  id: '4',
  completed: true
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
      state.allTodos.forEach(todo => {
        if(todo.id === action.payload.id) {
          todo.completed = !action.payload.completed
        }
      });

      state.activeTodos.forEach(todo => {
        if(todo.id === action.payload.id) {
          todo.completed = !action.payload.completed
        }
      });

      state.completedTodos.forEach(todo => {
        if(todo.id === action.payload.id) {
          todo.completed = !action.payload.completed
        }
      });
    },

    deleteTodo(state, action) {
      state.allTodos =  state.allTodos.filter(todo => todo.id !== action.payload.id);
      state.activeTodos =  state.activeTodos.filter(todo => todo.id !== action.payload.id);
      state.completedTodos =  state.completedTodos.filter(todo => todo.id !== action.payload.id);
    },

    filterAllTodos(state) {
      state.completedTodos = state.allTodos;
      state.active = 'all'
    },

    filterCompletedTodos(state) {
      state.completedTodos = state.allTodos.filter(todo => todo.completed === true);
      state.active = 'completed'
    },

    filterActiveTodos(state) {
      state.activeTodos = state.allTodos.filter(todo => todo.completed === false);
      state.active = 'active'
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