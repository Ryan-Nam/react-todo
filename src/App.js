import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header
        filters={filters}
        currentFilter={filter}
        onFilterChange={(f) => setFilter(f)}
      />
      <TodoList currentFilter={filter}/>
    </>
  );
}

export default App;
