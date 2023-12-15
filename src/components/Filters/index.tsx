import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {VscTriangleDown} from 'react-icons/vsc';
import {
  setOnlyFinished,
  setOnlyActive,
  resetFilters,
  sortTodos,
} from '../../redux/slices/filtersSlice';
import './style.css';
import Filter from './Filter';

export interface IRadioFilter {
  id: string;
  text: string;
  value: string;
  isChecked?: boolean;
}

const filersRadio: IRadioFilter[] = [
  {id: 'all', text: 'Все', value: 'all', isChecked: true},
  {id: 'active', text: 'Активные', value: 'active'},
  {id: 'finished', text: 'Завершенные', value: 'finished'},
];

const Filters = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (radioValue: string) => {
      switch (radioValue) {
        case 'finished':
          dispatch(setOnlyFinished());
          break;
        case 'active':
          dispatch(setOnlyActive());
          break;
        case 'all':
          dispatch(resetFilters());
          break;
        default:
          break;
      }
    },
    [dispatch]
  );

  const handleSortTodos = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(sortTodos(e.target.value));
    },
    [dispatch]
  );

  return (
    <div className='filters'>
      <div className='filters__radio filters-block'>
        <p>Статус</p>
        <div className='filters-block__wrapper filters-block__wrapper--radio'>
          {filersRadio.map(block => (
            <Filter key={block.id} block={block} onRadioClick={handleChange} />
          ))}
        </div>
      </div>
      <div className='filters__select filters-block'>
        <p>Сортировка</p>
        <div className='filters-block__wrapper filters-block__wrapper--select'>
          <VscTriangleDown />
          <select onChange={handleSortTodos} defaultValue='name'>
            <option value='text'>Наименование</option>
            <option value='isDone'>Статус</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
