import React, {useCallback, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  deleteTodo,
  setTodoIsDone,
  selectTodos,
} from '../../redux/slices/todoSlice';
import {
  selectOnlyFinished,
  selectSortValue,
} from '../../redux/slices/filtersSlice';
import {ITodo} from 'redux/store';
import Item from './Item';
import './style.css';

const byField = (fieldName: string) => {
  return (a: ITodo, b: ITodo) => (a[fieldName] > b[fieldName] ? 1 : -1);
};

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const onlyFinishedFilter = useSelector(selectOnlyFinished);
  const sortValue = useSelector(selectSortValue);

  const filteredTodos = useMemo(
    () =>
      todos
        .filter(todo => {
          if (onlyFinishedFilter === null) return true;
          const matchesFinished = onlyFinishedFilter ? todo.isDone : true;
          const matchesActive = !onlyFinishedFilter ? !todo.isDone : true;
          return matchesFinished && matchesActive;
        })
        .sort(byField(sortValue)),
    [onlyFinishedFilter, sortValue, todos]
  );

  const handleDeleteTodo = useCallback(
    (todoId: string) => {
      dispatch(deleteTodo(todoId));
    },
    [dispatch]
  );

  const handleFulfillTodo = useCallback(
    (todoId: string) => {
      dispatch(setTodoIsDone(todoId));
    },
    [dispatch]
  );

  if (filteredTodos.length === 0) {
    return <p className='todo-list__no-todos'>Задачи отсутствуют.</p>;
  }

  return (
    <div className='todo-list'>
      <ul>
        {filteredTodos.map(todo => (
          <Item
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onFulfill={handleFulfillTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
