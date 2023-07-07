import React from 'react';
import Sidebar from './sidebar';

const LayoutPage = ({children}) => {
    return (
        <div className='flex ml-10'>
          <Sidebar/>
            {children}
        </div>
    );
};

export default LayoutPage;