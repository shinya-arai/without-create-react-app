import React from 'react';
import Counter from './Counter';
import { hot } from 'react-hot-loader';
// import styles from '../appScss.scss';

const App = (props) => (
  <div>
    <Counter />
    <h2>これはh2</h2>
    <p>ここはIndex</p>
    <p>ここはIndex</p>
    <p>{props.text}</p>
  </div>
);

export default hot(module)(App);