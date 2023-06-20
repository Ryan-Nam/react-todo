import React, { useState } from 'react';
import { v4 } from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({onAdd}) {
  //props는 객체이므로 구조 분해(destrucuring) 방식을 이용해 데이터를 받는 변수를 중괄호({})로 감싸주었습니다
  const [text, setText] = useState('');

  // const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    //if(string.trim() === '' ){ }
    //이 경우에는 아무것도 입력이 안된 경우지 (트림을 했는데도 아무 데이터도 없으니) 그 경우에는, 아예 함수 종료.
    if(text.trim().length === 0) {
        setText('');
        return;
    }
    //이제 여기에 데이터를 mother로 보내줘야해
    //부모가 자식에게 데이터를 줄 수있다
    //자식이 props을 통해 부모에게 데이터를 줄 수 없다.

    onAdd({id: v4(), text:text, status: 'active'});
    
    
    setText('');
    console.log('cliked:' + text);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
        className={styles.input}
          type='text'
          placeholder='Add smt here'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button} type='submit'>Add</button>
        
      </form>
    </>
  );
}
