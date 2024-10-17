import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'D:/Desktop/new-app/src/Store/Store.js';

const ProductForm = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        available: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === 'available' ? value === 'true' : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ ...product, id: Date.now() }));
        setProduct({ id: '', name: '', description: '', price: '', available: true });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
            <input name="description" placeholder="Description" value={product.description} onChange={handleChange} />
            <input name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
            <select name="available" onChange={handleChange}>
                <option value="true">Available</option>
                <option value="false">Not Available</option>
            </select>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;