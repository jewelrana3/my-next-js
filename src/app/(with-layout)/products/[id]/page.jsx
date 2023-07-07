import getSingleProduct from '@/utilies/getSingleProduct';
import React from 'react';

const SingleProductPage = async({params}) => {
    const {title,price} = await getSingleProduct(params.id);

    return (
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
    );
};

export default SingleProductPage;