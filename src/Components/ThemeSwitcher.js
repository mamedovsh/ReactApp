// Приложение для переключения темы сайта
// Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.

// Функционал:

// Action types: TOGGLE_THEME.
// Actions: Создайте действие для переключения темы.
// Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
// Component: Создайте компонент, который отображает переключатель для изменения темы сайта.

// Описание:

// Состояние: Для хранения текущей темы можно использовать логическую переменную 
//(true для темной темы и false для светлой) или строку ("dark" или "light").

// Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с 
//светлой на темную и обратно.


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'D:/Desktop/new-app/src/Store/switchTheme.js';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', height: '100vh', textAlign: 'center', transition: 'all 0.5s' }}>
            <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
            <button onClick={handleToggle}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;