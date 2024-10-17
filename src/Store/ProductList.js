import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, toggleAvailability } from 'D:/Desktop/new-app/src/Store/Store.js';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name} - {product.price}</h3>
                    <p>{product.description}</p>
                    <p>Available: {product.available ? 'Yes' : 'No'}</p>
                    <button onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
                    <button onClick={() => dispatch(toggleAvailability(product.id))}>
                        Toggle Availability
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;