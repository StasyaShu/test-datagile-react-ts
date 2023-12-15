import {createSlice} from '@reduxjs/toolkit';
import todosData from '../../data/todos.json';
import {ITodo, IState} from 'redux/store';

const initialState: ITodo[] = todosData;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    setTodoIsDone: (state, action) => {
      state.forEach(todo => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
    },
  },
});

export const {setTodo, deleteTodo, setTodoIsDone} = todoSlice.actions;

export const selectTodos = (state: IState) => state.todos;

export default todoSlice.reducer;
