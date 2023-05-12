import React  from 'react';

const ItemsMenu = ({ item1 , item2 , item3 , item4 , item5 }) => {

    return (
        <ul>
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
            <li>{item4}</li>
            <li>{item5}</li>
        </ul>
    );
};

export { ItemsMenu };