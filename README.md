## 🧩 Relation Between state and initialState

✅ initialState is the starting value

🔄 state is the current value that updates over time.

🔁 How it works together:
React calls useReducer with your reducer function and initialState.

It sets state to initialState.

When you call dispatch(...), the reducer function runs and returns a new state.

React updates state with this new value, and your component re-renders with the latest state.

## 🧩 Dispatch and Action in useReducer

🔁 How they work together:
You click a button.

That button calls dispatch() and passes in an action.

The reducer receives that action and current state.

Based on the action.type, it returns a new state.

```js
import React, { useReducer } from 'react';

// 1️⃣ Step 1: Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

// 2️⃣ Step 2: Define the initial state
const initialState = { count: 0 };

// 3️⃣ Step 3: Use useReducer in your component
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default Counter;



```
