import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";


ReactDOM.render(
  <div><TodoList testProps={'a test string component property'} /></div>,
  document.getElementById('container') //destination
);
