import Link from 'next/link';
import React from 'react';

const SignleCategory = ({ category }) => {
    const { id, name } = category;
    return (
        <div className='border border-blue-500 p-4 rounded'>
            <Link  href={`/products?categoriesId=${id}`}>
                <h1> {name}</h1>
            </Link>
        </div>
    );
};

export default SignleCategory;