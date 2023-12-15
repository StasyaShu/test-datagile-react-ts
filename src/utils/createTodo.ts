import {v4 as uuidv4} from 'uuid';

const createTodo = (text: string) => {
  return {
    text,
    isDone: false,
    id: uuidv4(),
  };
};

export default createTodo;
