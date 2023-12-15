import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import filtersReducer from './slices/filtersSlice';

export interface ITodo {
  [key: string]: string | boolean;
  text: string;
  isDone: boolean;
  id: string;
}

export interface IFilters {
  text: string;
  onlyDone: boolean | null;
  sortValue: string;
}

export interface IState {
  todos: ITodo[];
  filters: IFilters;
}

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filtersReducer,
  },
});

export default store;
