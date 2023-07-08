import getAllProducts from '@/utilies/getAllProducts';
import React from 'react';
import ManageProduct from './ManageProduct';

const ManageProductPage = async () => {
    const products = await getAllProducts();
    return (
        <div className='container mx-auto mt-22'>
            <h1 className='text-center text-2xl font-bold'>  ManageProduct</h1>
            <ManageProduct products={products}/>
        </div>
    );
};

export default ManageProductPage;