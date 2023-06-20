import React from 'react';

export default function Header({ filters, currentFilter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((item, index) => (
          <li key={index}>
            <button onClick={()=> onFilterChange(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
