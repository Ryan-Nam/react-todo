import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status }); //status 로 생략 status: status
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={todo.id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsTrashFill />
        </button>
      </span>
    </li>
  );
}
