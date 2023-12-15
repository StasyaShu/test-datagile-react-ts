import React, {useCallback} from 'react';
import {FaCheck} from 'react-icons/fa6';
import {MdDeleteOutline} from 'react-icons/md';
import {ITodo} from 'redux/store';

interface IProps {
  todo: ITodo;
  onFulfill: (id: string) => void;
  onDelete: (id: string) => void;
}

const Item: React.FC<IProps> = ({todo, onFulfill, onDelete}) => {
  const handleFulfill = useCallback(() => {
    onFulfill(todo.id);
  }, [onFulfill, todo.id]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [onDelete, todo.id]);

  return (
    <li>
      <div className='todo-list__checkbox todo-checkbox'>
        <label
          className={
            todo.isDone
              ? 'todo-checkbox__label todo-checkbox__label--checked'
              : 'todo-checkbox__label'
          }
        >
          <FaCheck
            className={
              todo.isDone
                ? 'todo-checkbox__visible'
                : 'todo-checkbox__invisible'
            }
          />
          <input
            className='visually-hidden'
            type='checkbox'
            checked={todo.isDone}
            aria-label='Отметить задание как выполненное'
            onChange={handleFulfill}
          />
        </label>
      </div>
      <p className={todo.isDone ? 'todo-text-done' : ''}>{todo.text}</p>
      <div className='delete-button'>
        <button onClick={handleDelete}>
          <span className='visually-hidden'>Удалить задачу</span>
          <MdDeleteOutline />
        </button>
      </div>
    </li>
  );
};

export default Item;
