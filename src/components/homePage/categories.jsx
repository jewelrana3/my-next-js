import getAllCategories from '@/utilies/getAllCategories';
import React from 'react';
import SignleCategory from '../signleCategory';


const Categories = async () => {
    const categories = await getAllCategories();
    console.log(categories)
    return <div>
        <h1>Category</h1>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
                {
                    categories.map((category) => <SignleCategory category={category} key={category.id}></SignleCategory>)
                }
            </div>
        </div>
    </div>
};

export default Categories;