import getAllProducts from '@/utilies/getAllProducts';
import React from 'react';
import SingleProduct from './singleProduct';

const ProductPage = async ({searchParams}) => {
    const products = await getAllProducts(searchParams.categoriesId);
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 container mx-auto'>
            {
                products.map((product)=> <SingleProduct product={product} key={product.id}></SingleProduct>)
            }
        </div>
    );
};

export default ProductPage;