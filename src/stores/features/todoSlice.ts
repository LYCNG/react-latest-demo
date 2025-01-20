import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//demo 範例
export interface TodoType {
  id: number;
  text: string;
  status: boolean;
}

export const initialState = {
  list: [] as TodoType[],
};

export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.list.push(action.payload);
    },
    toggleTodoStatus: (state, action: PayloadAction<number>) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = !todo.status;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<TodoType>) => {
      const todo = state.list.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, toggleTodoStatus, deleteTodo, editTodo } =
  todoListSlice.actions;

export default todoListSlice.reducer;
