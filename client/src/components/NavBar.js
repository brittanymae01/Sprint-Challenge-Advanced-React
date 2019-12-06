import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode', false)

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    };

    return (
        <div className='navBar'>
            <h1>Women's World Cup Players Ranked By Search Interest</h1>
            <button onClick={toggleMode}>DarkMode</button>
        </div>
    )
}

export default NavBar;