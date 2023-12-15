import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='wrapper'>
          <TodoForm />
        </div>
      </header>
      <main className='app-main'>
        <div className='wrapper'>
          <h1>Список задач</h1>
          <div className='app-main__content'>
            <div className='app-main__block'>
              <TodoList />
            </div>
            <div className='app-main__block'>
              <Filters />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
