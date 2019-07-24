import React from 'react';
import Counter from './Counter';
import { hot } from 'react-hot-loader';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <h2>This is Component</h2>
      </div>
    );
  }
}

export default hot(module)(Index);