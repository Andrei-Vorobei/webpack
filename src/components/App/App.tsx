import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as classes from './App.module.scss';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/calendar.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  
    const test = () => {
      throw new Error();
    };
  
    const test2 = () => {
      test();
    };

  const increment = () => {
    test2();
    setCount(state => ++state);
  };


  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div data-testid='App.DataTest'>
        <img src={avatarPng} width={100} height={100} alt="" />
      </div>
      <div>
        <Calendar fill='red' width={50} height={50} />
      </div>
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
