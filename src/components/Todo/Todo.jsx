import React from 'react';
import { BsTrashFill } from 'react-icons/bs';


export default function Todo({key, todo, onUpdate, onDelete}) {
  return (
    <li key={key}>
      <input type='checkbox' id='checkbox'/>
      <label htmlFor="checkbox">{todo.text}</label>
      <button><BsTrashFill /></button>
    </li>
    
  )
}
