import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ currentFilter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  //새로운 (입력받은)todo 를 todos에 업데이트해야 함
  //console.log(todo);
  //setTodo([...todos, todo]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  //Update된 아이템을 받아와서 => setTodos (기존의 todos를 빙글빙글돌면서)
  // 기존의 todo아이템을 가지고 올껀데, 가져올 item의 id가 update하고자하는 item의 id와 동일하다면,
  // 그러면, updateded된 객체로 map 해줄꺼고, 그렇지 않다면 기존의 t를 사용
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // t의 id가 삭제하고자하는 item의 id가 아닌 경우에만 필터링
  const handleDelte = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  //so, whenever, todos is changed, we will store its data
  // 1.change todos to JSON file and
  // 2. save as todos(key)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, currentFilter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          // <li key={item.id}>{item.text}</li>
          //children을 보내주는게 아니라, todo 자체를 보내줄 것임
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelte}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

//if there is todos, parse(chagne) as JSON, if not, return []
function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
