import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
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

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {

  }
})