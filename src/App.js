import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'HTML & CSS'
  },
  {
    id: 2,
    name: 'ReactJs'
  },
  {
    id: 3,
    name: 'Java'
  },

]

function App() {
  let [value, setValue] = useState()


  console.log(value);

  return (
    <React.Fragment>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <br />
      <button >Regist</button>
    </React.Fragment>
  );
}

export default App;
