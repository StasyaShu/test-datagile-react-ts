import React, {useCallback} from 'react';
import {IRadioFilter} from '..';

interface IProps {
  block: IRadioFilter;
  onRadioClick: (v: string) => void;
}

const Filter: React.FC<IProps> = ({block, onRadioClick}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onRadioClick(e.target.value);
    },
    [onRadioClick]
  );

  return (
    <div>
      <input
        type='radio'
        id={`${block.id}`}
        value={`${block.value}`}
        name='status'
        defaultChecked={block.isChecked}
        onChange={handleChange}
      ></input>
      <label htmlFor={`${block.id}`}>{block.text}</label>
    </div>
  );
};

export default Filter;
