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

    deleteTodo(state, action) {
      
    }
  }
})

export const {addTodo} = todosSlice.actions
export default todosSlice.reducer