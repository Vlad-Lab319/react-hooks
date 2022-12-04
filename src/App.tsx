import React from 'react';
import {Fib} from './components/Fib';
import {Counter} from './components/Counter';

export default function App() {
  return (
    <div>
      React Hooks
      <Fib n={10} />
      <Counter n={10} />
    </div>
  )
}