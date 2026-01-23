import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(state => ++state);
  };

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <Link to='/about'>about</Link>
      <br />
      <Link to='/shop'>shop</Link>
      <h1 className={classes.title}>{count}</h1>
      <button
        className={classes.button}
        onClick={increment}
      >
        inc
      </button>
      <Outlet />
    </div>
  );
}
