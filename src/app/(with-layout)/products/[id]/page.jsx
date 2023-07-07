import getSingleProduct from '@/utilies/getSingleProduct';
import React from 'react';

const SingleProductPage = async({params}) => {
    const {title,price} = await getSingleProduct(params.id);

    return (
        <div className='ml-12 border border-blue-600 p-4 w-96 rounded'>
            <h1>Title: {title}</h1>
            <p>Price: {price}</p>
        </div>
    );
};

export default SingleProductPage;