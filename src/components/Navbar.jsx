import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <a>Model</a>
        </div>
        <div className={s.item}>
          <a>Year</a>
        </div>
        <div className={s.item}>
          <a>Color</a>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;