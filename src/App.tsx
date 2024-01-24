import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageLazy } from './Pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './Pages/MainPage/MainPage.async';
import { Suspense, useContext, useState } from 'react';
import { ThemeContext } from './styles/theme/ThemeContext';
import { Theme } from './styles/theme/ThemeContext';
import { useTheme } from './styles/theme/useTheme';
import { classNames } from './helpers/classNames/classnames';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const bool = true;
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/'} element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
