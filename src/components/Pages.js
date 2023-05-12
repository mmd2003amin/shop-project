import React, { useState } from 'react';

//Images
import image1 from "../images/Pages/image1.jpg";
import image2 from "../images/Pages/image2.jpg";
import image3 from "../images/Pages/image3.jpg";
import image4 from "../images/Pages/image4.jpg";

const Pages = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3 item-pages m-3.5 md:m-6 lg:m-8">
            <div>
                <img src={image1} alt="image"/>
            </div>

            <div>
                <img src={image2} alt="image"/>
            </div>

            <div>
                <img src={image3} alt="image"/>
            </div>

            <div>
                <img src={image4} alt="image"/>
            </div>
        </div>
    );
};

export default Pages;