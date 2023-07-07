'use client'

import React, { useEffect } from 'react';

const ErrorProduct = ({error,reset}) => {
    useEffect(()=>{
        console.error(error)
    },[error])
    return (
        <div className='text-center'>
            <h1>{error.message || 'went wrong message'}</h1>
            <button onClick={()=> reset()}>Reset</button>
        </div>
    );
};

export default ErrorProduct;