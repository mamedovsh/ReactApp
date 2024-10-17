// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import themeReducer from 'D:/Desktop/new-app/src/Store/themeReducer.js';
// import ThemeSwitcher from 'D:/Desktop/new-app/src/Components/ThemeSwitcher.js';

// const store = createStore(themeReducer);

// const App = () => {
//     return (
//         <Provider store={store}>
//             <ThemeSwitcher />
//         </Provider>
//     );
// };

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from 'D:/Desktop/new-app/src/Store/Store.js';
import ProductForm from 'D:/Desktop/new-app/src/Store/ProductForm.js';
import ProductList from 'D:/Desktop/new-app/src/Store/ProductList.js';

const App = () => {
    return (
        <Provider store={store}>
            <h1>Product Catalog</h1>
            <ProductForm />
            <ProductList />
        </Provider>
    );
};

export default App;