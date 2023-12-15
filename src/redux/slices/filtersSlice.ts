import {createSlice} from '@reduxjs/toolkit';
import {IFilters, IState} from 'redux/store';

const initialState: IFilters = {
  text: '',
  onlyDone: null,
  sortValue: 'text',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setOnlyFinished: state => {
      state.onlyDone = true;
    },
    setOnlyActive: state => {
      state.onlyDone = false;
    },
    resetFilters: () => {
      return initialState;
    },
    sortTodos: (state, action) => {
      state.sortValue = action.payload;
    },
  },
});

export const {setOnlyFinished, setOnlyActive, resetFilters, sortTodos} =
  filterSlice.actions;

export const selectOnlyFinished = (state: IState) => state.filters.onlyDone;
export const selectSortValue = (state: IState) => state.filters.sortValue;

export default filterSlice.reducer;
