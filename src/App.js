import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import themeReducer from 'D:/Desktop/new-app/src/Store/themeReducer.js';
import ThemeSwitcher from 'D:/Desktop/new-app/src/Components/ThemeSwitcher.js';

const store = createStore(themeReducer);

const App = () => {
    return (
        <Provider store={store}>
            <ThemeSwitcher />
        </Provider>
    );
};

export default App;