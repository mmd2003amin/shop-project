import React from 'react';
import notFound from "../images/notFound.avif"

const NotFound = () => {
    return (
        <div className="bg-white">
            <img src={notFound} alt="notFound" className="w-1/2 h-1/2 mx-auto"/>
        </div>
    );
};

export default NotFound;