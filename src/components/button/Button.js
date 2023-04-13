// Authors: Yohai Hen Levi and David Jedwabsky
import React from 'react';
import style from './button.module.css';

function Button(props) {
  return (
    <button className={style.but} onClick={props.fun}>
      {props.text}
    </button>
  );
}

export default Button;
