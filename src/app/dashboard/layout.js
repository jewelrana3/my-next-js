import React from 'react';

const LayoutPage = ({children}) => {
    return (
        <div>
            <div>Sideber</div>
            {children}
        </div>
    );
};

export default LayoutPage;