import getAllProducts from '@/utilies/getAllProducts';
import React from 'react';
import SingleProduct from './singleProduct';

const ProductPage = async ({searchParams}) => {
    const products = await getAllProducts(searchParams.categoriesId);
    return (
        <div>
            {
                products.map((product)=> <SingleProduct product={product} key={product.id}></SingleProduct>)
            }
        </div>
    );
};

export default ProductPage;