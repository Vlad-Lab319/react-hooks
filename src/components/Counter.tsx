import React, { FC, Reducer, useCallback, useReducer } from 'react';
import { useMemo } from 'react';

interface State {
  count: number;
}
interface IncrementAction {
  type: 'increment';
}
interface DecrementAction {
  type: 'decrement';
}
type Action = IncrementAction | DecrementAction;

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

export const Counter: FC<{ n: number }> = ({ n }) => {
  const [state, dispatch] = useReducer(reducer, { count: n });
  const decrement = useCallback(() => dispatch({ type: 'decrement' }), []);
  const increment = useCallback(() => dispatch({ type: 'increment' }), []);
  const f = useMemo(() => fib(state.count), [state.count]);

  return (
    <>
      <pre>
        {state.count}-th fibonacci number: {f}
      </pre>
      Count: {state.count}
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={increment}>
        +
      </button>
    </>
  )
}
