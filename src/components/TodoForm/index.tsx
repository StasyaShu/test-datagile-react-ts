import React, {useCallback} from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {FiPlus} from 'react-icons/fi';
import createTodo from '../../utils/createTodo';
import {setTodo} from '../../redux/slices/todoSlice';
import './style.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (text) {
        const todo = createTodo(text);
        dispatch(setTodo(todo));
        setText('');
      }
    },
    [dispatch, text]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    []
  );

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>Новая задача</label>
        <input
          type='text'
          id='todo'
          value={text}
          onChange={handleInputChange}
        />
        <button type='submit'>
          <FiPlus /> Добавить
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
